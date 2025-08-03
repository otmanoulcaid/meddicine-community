import React from "react";
import {
  MessageCircle,
  Share2,
  Bookmark,
  Flag,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";
import type {  PostType } from "../types/postType";

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 flex">
      {/* Upvote/Downvote section */}
      <div className="flex flex-col items-center mr-4 py-2 px-1 bg-gray-50 rounded-l-lg">
        <button className="text-gray-400 hover:text-blue-500">
          <ChevronUp className="w-6 h-6" />
        </button>
        <span className="font-bold text-gray-700 my-1">{post.votes}</span>
        <button className="text-gray-400 hover:text-blue-500">
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Post Content */}
      <div className="flex-1">
        {/* Post Meta */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <img
            src={post.community.icon}
            alt="Community Icon"
            className="rounded-full mr-2 w-5 h-5"
          />
          <a href="#" className="font-semibold text-gray-700 hover:underline">
            {post.community.name}
          </a>
          <span className="mx-1">•</span>
          <span>Posted by u/{post.author}</span>
          <span className="mx-1">•</span>
          <span>{post.createdAt}</span>
          <button className="ml-auto text-gray-500 hover:text-gray-700">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Post Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>

        {/* Post Body/Content */}
        <p className="text-gray-700 mb-4">{post.content}</p>

        {/* Image if exists */}
        {post.imageUrl && (
          <div className="mb-4">
            <img
              src={post.imageUrl}
              alt="Post content"
              className="rounded-lg max-h-96 w-full object-cover"
            />
          </div>
        )}

        {/* Post Footer Actions */}
        <div className="flex items-center space-x-4 text-gray-600 text-sm font-semibold">
          <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100">
            <MessageCircle className="w-5 h-5" />
            <span>{post.commentCount} Comments</span>
          </button>
          <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100">
            <Bookmark className="w-5 h-5" />
            <span>Save</span>
          </button>
          <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100">
            <Flag className="w-5 h-5" />
            <span>Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}
