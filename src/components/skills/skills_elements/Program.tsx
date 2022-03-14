import Star_black from "../images/Star_black.png";
import Star_gray from "../images/Star_gray.png";

function Program(props : any) {

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
      <p>
         <img src={props.img} alt="icon_program"/>
      </p>
      <p>
         {props.name_program_first_line}
         <br/>
         {props.name_program_second_line}
      </p>
      <p>
         {renderStar}
      </p>
   </div>
   )
}

export default Program;