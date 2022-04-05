import './footer.scss';
import Names from "../elements/Names";
import Button from "../elements/Button";
import linkedIn from "./images/linkedIn.png";
import instagram from "./images/Instagram.png";
import dribble from "./images/Dribble.png";
import behance from "./images/Behance.png";

import { useTranslation } from "react-i18next";


function Footer():JSX.Element {
   const {t} = useTranslation();
   const resourse:string[] = [linkedIn, instagram, dribble, behance];

   const resourseLink:string[] = ["https://www.linkedin.com/",
    "https://www.instagram.com/",
    "https://dribbble.com/",
    "https://www.behance.net/"
   ];
   
   const renderResourse: JSX.Element[] = resourse?.map((img:string, index:number) => {
      return (
         <a href={resourseLink[index]}
            target="_blank"
            key={resourseLink[index]}>
            <img src={img} alt="image" />
         </a>
      )
   })

   const handleButtonMessage = (e: any) => {
      console.log("press button");
   } 

   return (<div id="footer" className="footer" >
      <Names value={t("footer.named")} />
      <p className="footer__welcome">
         {t("footer.info_first_line")}
         <br/>
         {t("footer.info_second_line")}
      </p>
      <Button value={t("footer.button")}
       className="footer_button"
       onClick={handleButtonMessage}/>
      <div className="footer__resource">
         {renderResourse}
      </div>
      <p className="footer__like_me">
         {t("footer.liked_first_line")}
         <br/>
         {t("footer.liked_second_line")}
      </p>
   </div>
   )
}

export default Footer;