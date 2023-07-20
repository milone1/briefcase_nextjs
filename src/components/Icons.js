import React from 'react';

const Icons = ({item}) => {
    // Assuming 'item.icons' is an array that may contain either React components or strings
    const icons = item.icons?.map((icon, index) => {
        if (typeof icon === 'string') {
            // If it's a string, treat it as a simple HTML element (e.g., <div>)
            return <div key={index} className="text-2xl text-white">{icon}</div>;
        } else if (React.isValidElement(icon)) {
            // If it's a valid React component, just return it as-is
            return icon;
        } else {
            // If it's neither a string nor a valid React component, handle the error
            console.error('Invalid icon type at index', index, icon);
            return null; // Or return a default icon, or handle the error as needed
        }
    });

    return <div className="flex gap-x-4">{icons}</div>;
};

export default Icons;