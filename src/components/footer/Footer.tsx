import { useSelector, RootStateOrAny } from "react-redux";
import './footer.scss';
import Names from "../elements/Names";
import Button from "../elements/Button";



function Footer() {
   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);
   
   const info = () => {
      if (language === "Eng") {
         return ({
            named: "Contacts",
            info_first_line: "Want to know more or just chat?",
            info_second_line: "You are welcome!",
            button: "Send message"
         })
      } else if (language === "Ukr") {
         return ({
            named: "Контакти",
            info_first_line: "Хочете дізнатися більше або просто поспілкуватися?",
            info_second_line: "Запрошую!",
            button: "Повідомлення"
         })
      }
   }

   const handleButtonMessage = (e: any) => {
      console.log("press button");
   } 

   return (<div id="4Section" className="footer" >
      <Names value={info()?.named} />
      <p className="footer__welcome">
         {info()?.info_first_line}
         <br/>
         {info()?.info_second_line}
      </p>
      <Button value={info()?.button}
       className="footer_button"
       onClick={handleButtonMessage}/>
   </div>
   )
}

export default Footer;