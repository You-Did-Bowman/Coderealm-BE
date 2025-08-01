import express from "express";
import {
  allPosts,
  createPost,
  addCommentToPost,
  getSinglePostWithComments,
  deletePost,
  deleteComment,
  editComment,
  getPostsbyId,
  communityPosts,
  likePost,
  unlikePost,
  dislikePost,
  removeDislike,
  countAllPosts,
  countCommunityPosts
  
} from "../controllers/postsController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

// JB: For try-and-error
import { getDB } from "../utils/db.js";

const router = express.Router();

//Get all Posts with comments
router.get("/", allPosts);

//Get all Posts with comments for one community
router.get("/communities/:communityId", communityPosts); // for posts in a specific community

//Get Posts with comments for one user or one post
router.get("/:id", getSinglePostWithComments);

// 
router.post("/:id/like",authenticateUser, likePost);
router.delete("/:id/like",authenticateUser, unlikePost);
 
router.post("/:id/dislike", authenticateUser, dislikePost);
router.delete("/:id/dislike", authenticateUser, removeDislike);
//Delete a Post by id
router.delete("/:id", authenticateUser, deletePost);

//create  a Post
router.post("/", authenticateUser, createPost);

//Adding Comments to the Post
router.post("/:id/comments", authenticateUser, addCommentToPost);

// JB: edit comments
router.patch("/comments/:id", authenticateUser, editComment);

// Delete a comment
router.delete("/comments/:id", authenticateUser, deleteComment);

// JB: fetch posts by id
router.get("/userPosts/:id",authenticateUser, getPostsbyId);

// JB: count all Posts
router.get("/count/allPosts",authenticateUser, countAllPosts);
 // JB: count community posts
 router.get("/count/community/:communityId", authenticateUser, countCommunityPosts)
export default router;
