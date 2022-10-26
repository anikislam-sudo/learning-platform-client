import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardDetails from '../../Shared/Card-Details/CardDetails';
import Course from '../../Shared/Course/Course';

const Category = () => {
    const courses = useLoaderData();
    console.log("e",courses);
    return (
        <div>
            <h2>this Category has a course:length:{courses.length}</h2>
      
        {
            courses.map(course=><CardDetails
            key={course._id}
            course={course}></CardDetails>)
        }
          </div>
    );
};

export default Category;