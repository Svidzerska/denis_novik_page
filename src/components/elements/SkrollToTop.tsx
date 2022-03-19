import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props: any) => {

   const location = useLocation();
   

   useEffect(() => {
      if(location.hash === "") {
         document.getElementById("root")?.scrollIntoView();
      }
   }, [location]);



   return <>{props.children}</>
};

export default ScrollToTop;