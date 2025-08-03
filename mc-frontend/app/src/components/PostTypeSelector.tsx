interface PostTypeSelectorProps {
    selectedType: 'text' | 'images' | 'link';
    onSelectType: (type: 'text' | 'images' | 'link') => void;
}

const PostTypeSelector: React.FC<PostTypeSelectorProps> = ({ selectedType, onSelectType }) => {
    const tabs = [
        { id: 'text', label: 'Text', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 12H3"/><path d="M18 3v3a2 2 0 0 0 2 2h3"/></svg> },
        { id: 'images', label: 'Images & Video', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg> },
        { id: 'link', label: 'Link', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L9.4 9.4"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L14.6 14.6"/></svg> },
    ];

    return (
        <div className="flex bg-gray-100 rounded-md p-1 mb-4">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onSelectType(tab.id as 'text' | 'images' | 'link')}
                    className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md text-sm font-semibold transition-colors duration-200
                        ${selectedType === tab.id ? 'bg-white text-blue-600 shadow' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                    <span className="mr-2">{tab.icon}</span> {tab.label}
                </button>
            ))}
        </div>
    );
};

export default PostTypeSelector;