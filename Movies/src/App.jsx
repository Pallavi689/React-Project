import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";

import { About } from "./pages/About";
import { Contact, contactdata } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import { AboutUs } from "./components/multi-pages/About-Us";
import { Error } from "./pages/Error";
import { getApi } from "./components/multi-pages/api/GetApi";
import { Loading } from "./components/multi-pages/Ui/Loading";
import { MovieDetails } from "./pages/MovieDetails";
import { getMovieDetails } from "./components/multi-pages/api/GetMovieDetailsApi";
const App = () => {

  // createBrowserRouter is used to create a router that will handle the routes of the application
  const router = createBrowserRouter([

    {
      path: "/",
      // about-us is the parent route of the child routes
      element: <AboutUs/>,
      errorElement: <Error />,
      // child routes of about-us
      // these routes will be rendered inside the Outlet component in AboutUs
      // component
      // Outlet is a placeholder for the child routes
      // it will render the child routes inside the parent route
      // it is used to create nested routes
      // Outlet is used to render the child routes inside the parent route
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie",
          element: <Movie />,
          //getApi is used to fetch data from the API in api GetApi.jst file
          loader:getApi, 
          // loader is used to fetch data before rendering the component
          // it will fetch the data from the API and pass it to the component as props
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
          //contactdata is used to fetch data from the API in api contact.jsx file
          action:contactdata,
        },
        {

          path:"/movie/:movieid",
          element:<MovieDetails/>,
          //getMovieDetails is used to fetch data from the API in api GetMovieDetailsApi.jst file
          loader:getMovieDetails,
        },
        
      ],
    }
  ]);
  return (
    <>
    {/* // RouterProvider is used to provide the router to the application
    // it will render the router and handle the routes of the application */}
      <RouterProvider router={router} />
    </>
  )
}
export default App;