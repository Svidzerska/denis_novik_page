import { useSelector, RootStateOrAny } from "react-redux";
import './footer.scss';
import Names from "../elements/Names";
import Button from "../elements/Button";
import linkedIn from "./images/linkedIn.png";
import instagram from "./images/Instagram.png";
import dribble from "./images/Dribble.png";
import behance from "./images/Behance.png";






function Footer() {
   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);

   const resourse = [linkedIn, instagram, dribble, behance];

   const resourseLink = ["https://www.linkedin.com/",
    "https://www.instagram.com/",
    "https://dribbble.com/",
    "https://www.behance.net/"
   ];
   
   const info = () => {
      if (language === "Eng") {
         return ({
            named: "Contacts",
            info_first_line: "Want to know more or just chat?",
            info_second_line: "You are welcome!",
            button: "Send message",
            liked_first_line: "Like me on",
            liked_second_line: "LinkedIn, Instagram, Behance, Dribble",
         })
      } else if (language === "Ukr") {
         return ({
            named: "Контакти",
            info_first_line: "Хочете дізнатися більше або просто поспілкуватися?",
            info_second_line: "Запрошую!",
            button: "Повідомлення",
            liked_first_line: "залиш вподобайку на",
            liked_second_line: "LinkedIn, Instagram, Behance, Dribble",
         })
      }
   }


   const renderResourse = resourse?.map((img, index) => {
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
      <Names value={info()?.named} />
      <p className="footer__welcome">
         {info()?.info_first_line}
         <br/>
         {info()?.info_second_line}
      </p>
      <Button value={info()?.button}
       className="footer_button"
       onClick={handleButtonMessage}/>
      <div className="footer__resource">
         {renderResourse}
      </div>
      <p className="footer__like_me">
         {info()?.liked_first_line}
         <br/>
         {info()?.liked_second_line}
      </p>
   </div>
   )
}

export default Footer;