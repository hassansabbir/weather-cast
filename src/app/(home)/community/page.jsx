"use client";

import { AuthContext } from "@/Providers/AuthProvider";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import Link from "next/link";

const CommentModal = ({ comments, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Additional Comments</h2>
        {comments.map((comment, index) => (
          <div key={index}>
            <strong>{comment.userName}:</strong> {comment.content}
          </div>
        ))}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export const PostCard = ({ post }) => {
  const { user } = useContext(AuthContext);
  const [liked, setLiked] = useState(post.likedByCurrentUser || false);

  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);

  const handleCommentButtonClick = () => {
    setIsCommenting(!isCommenting);
  };

  const handleLike = () => {
    if (!liked) {
      // Send a request to like the post
      axios
        .post(`https://weather-cast-server.vercel.app/post/${post._id}/like`)
        .then((response) => {
          if (response.data.message === "Post liked") {
            setLiked(true);
            post.likes++;
          }
        })
        .catch((error) => {
          console.error("Error liking the post:", error);
        });
    } else {
      // Send a request to unlike the post
      axios
        .post(`https://weather-cast-server.vercel.app/post/${post._id}/unlike`)
        .then((response) => {
          if (response.data.message === "Post unliked") {
            setLiked(false);
            post.likes--;
          }
        })
        .catch((error) => {
          console.error("Error unliking the post:", error);
        });
    }
  };

  const handleComment = () => {
    // Check if the user is authenticated
    if (!user || !user.uid) {
      console.error("User is not authenticated.");
      return;
    }

    const createdAt = new Date().toISOString();

    // new comment request
    axios
      .post(`https://weather-cast-server.vercel.app/post/${post._id}/comment`, {
        content: newComment,
        userId: user.uid,
        userName: user.displayName,
        createdAt: createdAt,
      })
      .then((response) => {
        if (response.data.message === "Comment added") {
          setComments((prevComments) => [
            ...prevComments,
            {
              content: newComment,
              userName: user.displayName,
              createdAt: createdAt,
            },
          ]);
          setNewComment("");
        }
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`https://weather-cast-server.vercel.app/post/${post._id}/comments`)
      .then((response) => {
        setComments(response.data.comments || []);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [post._id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.content,
          url: window.location.href,
        })
        .then(() => {
          console.log("Shared successfully");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      console.log("Web Share API not supported in this browser");
    }
  };

  const formatTimeDifference = (timestamp) => {
    const now = new Date();
    const createdAt = new Date(timestamp);
    const timeDifference = now - createdAt;
    const seconds = Math.floor(timeDifference / 1000);

    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(seconds / 86400);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  };

  const [showAllComments, setShowAllComments] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleText = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 60) {
      setNewComment(inputValue);
    }
  };

  return (
    <div
      className=" shadow-lg rounded-lg overflow-hidden  gap-5 mb-2 max-w-2xl"
      style={{
        background:
          "linear-gradient(90deg, rgba(175,174,238,0.022846638655462215) 82%, rgba(148,187,233,0.1741071428571429) 100%), linear-gradient(76deg, rgba(148,187,233,0.1741071428571429) 0%, rgba(175,174,238,0.022846638655462215) 82%, rgba(148,187,233,0.1741071428571429) 100%)",
      }}
    >
      <div className="px-6 py-4 ">
        <div className="flex items-center justify-between mt-4 ">
          <div className=" items-center justify-center">
            <div className="flex">
              <div className="avatar">
                <div className="w-10 rounded-full ">
                  <img src={post.authorPhoto} />
                </div>
              </div>
              <div>
              <h2 className="hidden md:block">{post.authorName}</h2>
              <div className="text-gray-500 text-xs">
              {formatTimeDifference(post.createdAt)}
            </div>
              </div>
            </div>

            
          </div>
          <div className="flex items-center justify-between mt-4 gap-4">
            <div>
              <span className="text-blue-700 text-base flex items-center justify-between ">
                <FaThumbsUp></FaThumbsUp> {post.likes}
              </span>
            </div>
            <div>
              <span className="text-green-500 text-base flex items-center justify-between">
                <FaComment></FaComment> {comments.length}
              </span>
            </div>
          </div>
        </div>
        <div>
          
          {post.image && <img src={post.image} alt="Post Image" />}
         
        </div>
        <p className="text-gray-700 text-base">{post.content}</p>

        <div className="flex items-center justify-between mt-4 ">
          <div className="flex space-x-2">
            <button
              className="flex items-center space-x-1"
              onClick={handleLike}
            >
              <FaThumbsUp
                className={`w-4 h-4 ${liked ? "text-blue-500" : ""}`}
              />
              <span>{liked ? "Liked" : "Like"}</span>
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              className="flex items-center space-x-1"
              onClick={handleCommentButtonClick}
            >
              <FaComment className="w-4 h-4" />
              <span>Comment</span>
            </button>
          </div>

          <div>
            <button
              onClick={handleShare}
              className="flex items-center space-x-1"
            >
              <FaShare className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        <div className="mt-4">
          {Array.isArray(comments) && (
            <>
              {showAllComments ? (
                comments.map((comment, index) => (
                  <div
                    key={index}
                    className={`text-gray-700 text-base w-15 overflow-hidden whitespace-normal max-h-24 overflow-y-auto`}
                  >
                    <strong>{comment.userName}:</strong> {comment.content}
                    <div className="text-gray-500 text-xs">
                      {formatTimeDifference(comment.createdAt)}
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {comments.slice(0, 2).map((comment, index) => (
                    <div
                      key={index}
                      className={`text-gray-700 text-base w-15 overflow-hidden whitespace-normal max-h-24 overflow-y-auto`}
                    >
                      <strong>{comment.userName}:</strong> {comment.content}
                      <div className="text-gray-500 text-xs">
                        {formatTimeDifference(comment.createdAt)}
                      </div>
                    </div>
                  ))}
                  {comments.length > 2 && (
                    <button
                      onClick={() => {
                        toggleShowAllComments();
                        openModal();
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      View More Comments ({comments.length - 2} more)
                    </button>
                  )}
                </>
              )}
              {isModalOpen && (
                <CommentModal
                  comments={comments.slice(2)}
                  closeModal={closeModal}
                />
              )}
            </>
          )}
        </div>

        {isCommenting && (
          <div className="flex justify-center items-center mt-4">
            <p> {newComment.length}/60</p>
            <textarea
              value={newComment}
              onChange={(e) => {
                handleText(e);
              }}
              className="w-full p-2 border rounded"
              placeholder={`Add a comment (max 60 characters)`}
              maxLength="60"
            />

            <button
              onClick={handleComment}
              className="h-[66px]  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Comment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [posts, setPosts] = useState([]);

  const [newPost, setNewPost] = useState("");

  const img_hosting_token = "bb1d8afb0107bc10333e2bdf348466ea";
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get(`https://weather-cast-server.vercel.app/post`).then((data) => setPosts(data.data));
  };

  const onSubmit = async (data) => {
    try {
      const post = {
        authorName: user?.displayName || "Anonymous",
        authorEmail: user?.email || "Anonymous",
        content: data.content,
        createdAt: new Date(),
        authorPhoto: user.photoURL,
      };

      // Get the selected image file
      const imageFile = data.image[0];

      // Create a FormData object to send the image
      const formData = new FormData();
      formData.append("image", imageFile);

      // Replace 'YOUR_IMG_API_KEY' with your actual ImgBB API key
      const imgApiKey = "bb1d8afb0107bc10333e2bdf348466ea";

      // Define the ImgBB upload URL
      const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;

      // Make a POST request to upload the image
      const imgResponse = await axios.post(imgUploadUrl, formData);

      if (imgResponse.data.success) {
        // If the image upload is successful, add the image URL to the post
        post.image = imgResponse.data.data.display_url;

        // Send a POST request to create the post with the image
        const postResponse = await axios.post(
          "https://weather-cast-server.vercel.app/post",
          post
        );

        if (postResponse.data.insertedId) {
          console.log("New Post Added");
          reset();
          fetchPosts(); // Fetch the updated list of posts
        } else {
          console.error("Error creating post:", postResponse.data.message);
        }
      } else {
        console.error("Error uploading image:", imgResponse.data.message);
        Swal.fire({
          icon: "error",
          title: "An error occurred while uploading the image",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error as needed
    }
  };

  const handlePostText = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 60) {
      setNewPost(inputValue);
    }
  };

  return (
    <div className="newsfeed flex gap-2">
      <div className="post-creator h-full w-1/4 bg-blue-50 shadow-lg rounded-lg overflow-hidden text-center">
        <Link href="/community/MyPost">
          <h2 className=" font-bold text-2xl text-blue-500">My Post</h2>
        </Link>
        <h2 className="text-5xl my-10 text-center">Create Your Post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-100 p-6">
          <div className="form-control  items-center justify-center">
            <label className="label">
              <span className="label-text text-2xl font-bold">Content</span>
            </label>
            <p>{newPost.length}/60</p>
            <textarea
              {...register("content", { required: true })}
              value={newPost}
              onChange={(e) => {
                handlePostText(e);
              }}
              className="p-10 rounded-xl border"
              placeholder={`Enter your post content (max 60 characters) ${newPost.length}/60`}
              rows="4"
              maxLength="60"
            />
            {errors.content && (
              <span className="text-red-600">Content is required</span>
            )}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-semibold">Image*</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full"
              />
            </div>
          </div>
          <button className="btn bg-blue-800 hover:bg-blue-600 text-white">
            Create Post
          </button>
        </form>
      </div>

      <div className="gap-4 flex-1 overflow-y-auto">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CreatePost;
