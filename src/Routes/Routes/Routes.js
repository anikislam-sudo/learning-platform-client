import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
{
    path:"/",
    element:<Main></Main>,
    children:[
     {
        path:"/",
        element:<Home></Home>
     },
     {
        path:"/category/:id",
        element:<Category></Category>,
        loader:({params})=> fetch(`http://localhost:5000/Categories/${params.id}`)
     },
     {
        path:"/courses/:id",
        element:<Courses></Courses>,
        loader: ()=> fetch('http://localhost:5000/AllCourses')
     },

    ]
}
]);