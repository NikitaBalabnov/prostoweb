import React, { Suspense } from "react";
import {
  Link,
  useLoaderData,
  useSearchParams,
  Await,
} from "react-router-dom";

const BlogPage = () => {
  const { posts } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("post") || "";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    const latest = form.latest.checked;
    let params = {};
    if (query.length) params.post = query;
    if (latest) params.latest = true;
    setSearchParams(params);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ marginBottom: "20px" }}
        autoComplete="off"
        action=""
      >
        <input type="search" name="search" />
        <input type="checkbox" name="latest" id="" />
        <input type="submit" value="Search" />
      </form>
      <button style={{ marginBottom: "12px" }}>
        <Link className="link-sm" to={"/posts/new"}>
          Create Post
        </Link>
      </button>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={posts}>
          {(resolvedPosts) =>
            resolvedPosts
              .filter((p) => p.title.includes(postQuery))
              .map((p, index) => {
                return (
                  <div key={p.id} className="post">
                    <Link className="post_link" to={`/posts/${p.id}`}>
                      {index + 1}. {p.title}
                    </Link>
                  </div>
                );
              })
          }
        </Await>
      </Suspense>
    </div>
  );
};
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const blogLoader = async () => {
  return ({
    posts: getPosts(),
  });
};
export { BlogPage, blogLoader };
