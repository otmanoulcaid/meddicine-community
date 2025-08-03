import React from 'react';

interface PostHeaderProps {
  onCommunitySelect: (community: string) => void;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ onCommunitySelect }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Create post</h1>
      <div className="relative">
        <button 
          className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700"
          onClick={() => {/* Handle community select */}}
        >
          <span className="text-gray-600 dark:text-gray-300">Select a community</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};