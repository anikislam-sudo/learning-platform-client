import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>this Category has a course:length:{courses.length}</h2>
        </div>
    );
};

export default Category;