import { useSelector, RootStateOrAny } from "react-redux";
import './skills.scss';
import Names from "../elements/Names";
import Program from "./skills_elements/Program";
import Ps from "./images/Ps.png";
import Ai from "./images/Ai.png";
import Ae from "./images/Ae.png";
import Figma from "./images/Figma.png";

function Skills() {
   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);
   
   const info = () => {
      if (language === "Eng") {
         return ({
            named:"Skills",
            action: "I work in such programs as",
         }
         )
      } else if (language === "Ukr") {
         return (
            {
               named:"Навики",
               action: "Я працюю з наступними програмами",
            }
         )
      }
   }

   const program_list = [
      {
         img:Ps,
         name_program_first_line: "Adobe",
         name_program_second_line: "Photoshop",
         numberStar: 4
      },
      {
         img:Ai,
         name_program_first_line: "Adobe",
         name_program_second_line: "Illustrator",
         numberStar: 3
      },
      {
         img:Ae,
         name_program_first_line: "Adobe",
         name_program_second_line: "After Effects",
         numberStar: 4
      },
      {
         img:Figma,
         name_program_first_line: "Figma",
         name_program_second_line: "",
         numberStar: 4
      }
   ]

   const renderProgram = program_list?.map(element => {
      return (
         <Program key={element.name_program_second_line}
         img={element.img} 
         name_program_first_line={element.name_program_first_line}
         name_program_second_line={element.name_program_second_line}
         numberStar={element.numberStar} />
      )
   })

   return (<div id="2Section" className="skills">
      <Names value={info()?.named} />
      <p className="skills__action">{info()?.action}</p>
      <div className="all_my_programs">{renderProgram}</div>
   </div>
   )
}

export default Skills;