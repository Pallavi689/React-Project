import { useRouteError, useNavigate } from "react-router-dom";

export const Error = () => {
    // This component will be displayed when there is an error in the route
    // It will display the error message and a button to go back to the previous page
  const error = useRouteError();

  //navigate is used to navigate to a different route
  // useNavigate is a hook that returns a function to navigate to a different route
  //go back to the previous page
  const navigate = useNavigate();

  const handleGoBack = () => {
   
      navigate(-1); // otherwise go home
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-lg text-gray-700">Something went wrong.</p>
      <p className="mt-2 text-sm text-gray-500">{error.statusText || error.message}</p>
      <button
        onClick={handleGoBack}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
};
