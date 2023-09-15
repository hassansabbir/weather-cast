"use client";

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PostCard from "././page";
import { AuthContext } from "@/Providers/AuthProvider";
import Swal from "sweetalert2";

const MyPost = () => {
  const { user } = useContext(AuthContext);

  const [myPosts, setMyPosts] = useState([]);

  const fetchData = () => {
    if (user?.email) {
      axios
        .get(`https://weather-cast-server.vercel.app/post/${user.email}`)
        .then((response) => {
          console.log(response);
          
          const postsWithAuthorAndComments = response.data.map((post) => ({
            ...post,
            authorEmail: post.authorEmail,
            comments: post.comments,
            like: post.likes,
            createdAt: post.createdAt,
          }));
          setMyPosts(postsWithAuthorAndComments);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, [user?.email]);

  if (!myPosts) {
    return <p>Loading posts...</p>;
  }

  const handleDelete = (postId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://weather-cast-server.vercel.app/post/${postId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Post deleted successfully") {
             
              console.log("Post deleted successfully");
              setMyPosts((prevPosts) =>
                prevPosts.filter((post) => post._id !== postId)
              );
            } else {
             
              console.error("Error deleting post:", data.message);
            }
          })
          .catch((error) => {
            console.error("Error deleting post:", error);
          });
      }
    });
  };

  const handleUpdate = (postId, updatedContent) => {
    Swal.fire({
      title: "Update Post",
      input: "textarea",
      inputValue: updatedContent,
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
       
        axios
          .put(`https://weather-cast-server.vercel.app/post/${postId}`, {
            content: result.value,
          })
          .then((response) => {
            if (response.status === 200) {
             
              console.log("Post updated successfully");
            
              setMyPosts((prevPosts) =>
                prevPosts.map((post) =>
                  post._id === postId
                    ? { ...post, content: result.value }
                    : post
                )
              );
            } else {
              console.error("Error updating post:", response.data.message);
            }
          })
          .catch((error) => {
            console.error("Error updating post:", error);
          });
      }
    });
  };


  const [showComments, setShowComments] = useState({});


  const toggleComments = (postId) => {
    setShowComments((prevShowComments) => ({
      ...prevShowComments,
      [postId]: !prevShowComments[postId] || false,
    }));
  };

  return (
    <div className="my-4 mx-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '16px' }}>
      {myPosts.map((post) => (
        <div
          key={post._id}
          className="bg-white p-4 rounded shadow-md my-4 flex"
        >
          <div>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-xl font-sans font-bold">
              Content: <span className="">{post.content}</span>
            </p>
            <p className="text-gray-600">Created At: {post.createdAt}</p>
            <p className="text-gray-600">Email: {post.authorEmail}</p>
            {post.likes && <p className="text-gray-600">Likes: {post.likes}</p>}
           <div className="flex gap-2">
           <button
              onClick={() => handleDelete(post._id)}
              className="bg-red-500 text-white py-1 px-2 mt-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => handleUpdate(post._id, post.content)}
              className="bg-red-500 text-white py-1 px-2 mt-2 rounded hover:bg-red-600"
            >
              Update
            </button>
           </div>
          </div>
          <div>
            <div>
              
              <button
                onClick={() => toggleComments(post._id)}
                className="bg-blue-500 text-white py-1 px-2 mt-2 rounded hover:bg-blue-600"
              >
                {showComments[post._id] ? "Hide Comments" : "View Comments"}
              </button>
            </div>

           
            {showComments[post._id] && (
              <div
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginTop: "10px",
                  height: "90px",
                  border: "none", 
                  msOverflowStyle: "none",
                  scrollbarWidth: "none", 
                }}
              >
                <h3>Comments:</h3>
                <ul>
                 
                  {post.comments.length > 0 ? (
                    post.comments.map((comment, index) => (
                      <li key={index}>{comment.content}</li>
                    ))
                  ) : (
                    <li>No comments yet</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPost;
