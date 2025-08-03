import React from 'react';

interface PostFormProps {
  activeTab: string;
  onSubmit: (data: any) => void;
}

export const PostForm: React.FC<PostFormProps> = ({ activeTab, onSubmit }) => {
  return (
    <div className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Title"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          maxLength={300}
        />
        <div className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">
          0/300
        </div>
      </div>
      
      <div className="min-h-[200px] border border-gray-300 dark:border-gray-700 rounded-md">
        <div className="flex items-center space-x-2 p-2 border-b border-gray-300 dark:border-gray-700">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            <strong>B</strong>
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            <i>I</i>
          </button>
          {/* Add more formatting buttons as needed */}
        </div>
        <textarea
          placeholder="Body text (optional)"
          className="w-full p-4 bg-transparent text-gray-800 dark:text-white resize-none focus:outline-none"
          rows={8}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md">
          Save Draft
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Post
        </button>
      </div>
    </div>
  );
};