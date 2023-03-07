import React, { Suspense, useEffect, useState } from "react";
import { Await, Link, useAsyncValue, useLoaderData, useNavigate } from "react-router-dom";

const Post = () => {
  const post = useAsyncValue()
  return (
    <>
      <div className="SinglePage">
        <h3 className="SinglePage_title">
          {post.id}. {post.title}
        </h3>
        <div className="SinglePage_body">{post.body}</div>
      </div>
    </>
  );
};


const SinglePage = () => {
  const { post, id } = useLoaderData();
  const navigate = useNavigate();
  const goBack = (param) => navigate(param);
  return (
    <>
      <button onClick={() => goBack(-1)}>Go back</button>
        <Suspense fallback = {<h2>Loading...</h2>}>
          <Await resolve={post}>
              <Post/>
          </Await>
        </Suspense>
      <Link to={`/posts/edit/${id}`}>Edit post</Link>
    </>
  );
};

const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};
const singlePageLoader = async ({ params }) => {
  const id = params.id;
  return { post: getSinglePost(id), id };
};

export { SinglePage, singlePageLoader };
