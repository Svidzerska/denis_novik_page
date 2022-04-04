import './skills.scss';
import Names from "../elements/Names";
import Program from "./skills_elements/Program";
import Ps from "./images/Ps.png";
import Ai from "./images/Ai.png";
import Ae from "./images/Ae.png";
import Figma from "./images/Figma.png";
import { useTranslation } from "react-i18next";

function Skills() {
   const {t, i18n} = useTranslation();

   interface ProgramList {
      img: string,
      name_program_first_line: string,
      name_program_second_line: string,
      numberStar: number
   }
   
   const program_list:ProgramList[] = [
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

   return (<div id="skills" className="skills">
      <Names value={t("skills.named")} />
      <p className="skills__action">{t("skills.action")}</p>
      <div className="all_my_programs">{renderProgram}</div>
   </div>
   )
}

export default Skills;