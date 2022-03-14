import { useSelector, RootStateOrAny } from "react-redux";
import './skills.scss';



function Skills() {
   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);
   
   const info = () => {
      if (language === "Eng") {
         return (
            <div></div>
         )
      } else if (language === "Ukr") {
         return (
            <div></div>
         )
      }
   }

   return (<div id="2Section" className="skills">
      {info()}
   </div>
   )
}

export default Skills;