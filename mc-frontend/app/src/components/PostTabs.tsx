
import React from 'react';

interface PostTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const PostTabs: React.FC<PostTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['Text', 'Images & Video', 'Link'];
  
  return (
    <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 ${
            activeTab === tab
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 dark:text-gray-400'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};