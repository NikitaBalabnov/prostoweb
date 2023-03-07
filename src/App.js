import { Layout } from "components/Layout";
import AuthProvider from "hok/AuthProvider";
import RequireAuth from "hok/RequireAuth";
import AboutPage from "pages/AboutPage";
import {BlogPage, blogLoader } from "pages/BlogPage";
import CreatePost from "pages/CreatePost";
import EditPost from "pages/EditPost";
import HomePage from "pages/HomePage";
import LogInPage from "pages/LogInPage";
import NotFoundPage from "pages/NotFoundPage";
import {SinglePage, singlePageLoader} from "pages/SinglePage";
import React from "react";
import { Route, Navigate, RouterProvider ,createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./App.css";
function App() {
   const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route
      path="/about-us"
      element={<Navigate to={"/about"} replace />}
    />
    <Route
      path="/blog"
      element={<BlogPage/>}
      loader = {blogLoader}
    />
    <Route path="/posts/:id" element={<SinglePage />} loader = {singlePageLoader}/>
    <Route path="/login" element={<LogInPage />} />
    <Route
      path="/posts/new"
      element={
        <RequireAuth>
          <CreatePost />
        </RequireAuth>
      }
    />
    <Route path="/posts/edit/:id" element={<EditPost />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
   ))
  return (
    <div className="App">
      <AuthProvider>
          <RouterProvider router={router}/>
      </AuthProvider>
    </div>
  );
}
export default App;
