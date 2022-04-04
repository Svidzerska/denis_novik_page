import Star_black from "../images/Star_black.png";
import Star_gray from "../images/Star_gray.png";
import './program.scss';

interface ProgramList {
   key: string,
   img: string,
   name_program_first_line: string,
   name_program_second_line: string,
   numberStar: number
}

function Program(props : ProgramList):JSX.Element {

   const star = [Star_gray, Star_gray, Star_gray, Star_gray, Star_gray];
   const star_list = star.map((element,index) => {
      if (index < props.numberStar) {
         return Star_black
      } else {
         return element
      }
   })

   const renderStar = star_list?.map((element,index) => {
      return (
         <img key={index} src={element} alt="star"/>
      )
   })


   return (<div className="program">
      <p className="program__picture">
         <img src={props.img} alt="icon_program"/>
      </p>
      <p className="program__name">
         {props.name_program_first_line}
         <br/>
         {props.name_program_second_line}
      </p>
      <p className="program__star">
         {renderStar}
      </p>
   </div>
   )
}

export default Program;