import { Link, Image, List, ListOrdered, Video } from 'lucide-react';

const RichTextEditorToolbar = () => {
    const icons = [
        { icon: <Link size={20} />, label: 'Add Link' },
        { icon: <Image size={20} />, label: 'Add Image' },
        { icon: <Video size={20} />, label: 'Add Video' },
        { icon: <List size={20} />, label: 'Bullet List' },
        { icon: <ListOrdered size={20} />, label: 'Numbered List' },
    ];

    return (
        <div className="flex items-center bg-gray-50 border-b border-gray-200 px-3 py-2 rounded-t-md overflow-x-auto">
            {icons.map(({ icon, label }, index) => (
                <button
                    key={index}
                    className="p-1.5 rounded-md text-gray-600 hover:bg-gray-200 mr-1"
                    aria-label={label}
                >
                    {icon}
                </button>
            ))}
            <span className="text-gray-400 mx-2">|</span>
        </div>
    );
};

export default RichTextEditorToolbar;