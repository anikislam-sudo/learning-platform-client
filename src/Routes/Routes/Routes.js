import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Courses from "../../Pages/Courses/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
        loader:({params})=> fetch(`http://localhost:5000/Category/${params.id}`)
     },
     {
        path:"/AllCourses",
        element:<PrivateRoute><Courses></Courses></PrivateRoute> ,
        loader: ()=> fetch('http://localhost:5000/AllCourses')
     },
     {
      path:"/login",
      element:<Login></Login>
   },
     {
      path:"/register",
      element:<Register></Register>
   },
     {
      path:"/checkout",
      element:<CheckOut></CheckOut>
      

   },

     {
      path:"/blog",
      element:<Blog></Blog>
   },
     {
      path:"/faq",
      element:<FAQ></FAQ>
   },

    ]
   },
{
path:'*',
element:<div>404:Page not found</div>
}

]);