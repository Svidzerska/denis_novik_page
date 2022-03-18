import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props: any) => {

   const location = useLocation();
   

   useEffect(() => {
      console.log(window.visualViewport);
      // setTimeout(() => {
      //    window.scrollTo(0, 0);
      // }, 2000);
      window.scrollTo(0, 0);
   }, [location]);



   return <>{props.children}</>
};

export default ScrollToTop;