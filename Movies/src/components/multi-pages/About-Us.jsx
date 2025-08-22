import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Ui/Loading";

export const AboutUs = () => {
  // useNavigate is a hook that returns a function to navigate to a different route
  // navigate.state = loading 
  //console.log(navigate);

  const navigate = useNavigate();
  console.log(navigate);
  if(navigate.state === "loading"){
    return(
      <Loading/>
    );
  }
  return ( 
    <div>
      <Header/>
      {/* <Outlet/> is a placeholder for the child routes */}
      <Outlet/>
      <Footer/>
    </div>
  );
}