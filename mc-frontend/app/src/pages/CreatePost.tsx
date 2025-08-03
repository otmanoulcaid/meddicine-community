import { useState } from 'react';
import RichTextEditorToolbar from '../components/RichTextEditorToolbar';


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');

    const handlePost = () => {

    };
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

                {/* Main content area for creating post */}
                <main className="flex-1 p-4 ">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold text-gray-800">Create post</h1>
                        </div>

                        {/* Community Selector */}
                        <div className="mb-6">
                            <button className="flex items-center w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <img src="https://placehold.co/24x24/c7d2fe/000000?text=C" alt="Community Icon" className="rounded-full mr-3"/>
                                Select a community
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-gray-500"><path d="m6 9 6 6 6-6"/></svg>
                            </button>
                        </div>


                        {/* Post Input Area */}
                        <div className="border border-gray-300 rounded-md overflow-hidden mb-6">
                            {/* Title Input */}
                            <input
                                type="text"
                                placeholder="Title*"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                maxLength={300}
                                className="w-full p-3 text-lg font-semibold text-gray-800 focus:outline-none focus:ring-0 border-b border-gray-200"
                            />
                            <div className="text-right text-xs text-gray-500 p-2">
                                {title.length}/300
                            </div>

                            {/* Rich Text Editor Toolbar */}
                            <RichTextEditorToolbar />

                            {/* Body Text Area */}
                            <textarea
                                placeholder="Body text (optional)"
                                value={bodyText}
                                onChange={(e) => setBodyText(e.target.value)}
                                rows={10}
                                className="w-full p-3 text-gray-700 resize-y focus:outline-none focus:ring-0"
                            ></textarea>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-4">

                            <button
                                onClick={handlePost}
                                className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </main>

        </div>
    );
};
export default CreatePost;
