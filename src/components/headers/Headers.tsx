import React from "react";
import Button from "./elements/Button";
import foto from '../../images/Group_2_1.png';


function Headers(props: any) {

   const headersNavigatorEng = ["Home", "About me", "Skills", "Portfolio", "Contacts"]
   const nameEng = "Denis Novik";
   const infoEng = "UX | UI designer 24 years old, Minsk";
   const buttonLang1 = "Ukr";
   const buttonLang2 = "Eng";

   const headerNavigationList = headersNavigatorEng.map(element => {
      return (
         <p key={element}><a href={'#' + element}>{element}</a></p>
      )
   });

   const renderNavigation = () => {
      return (
      <div className="headers__navigation_items">
            {headerNavigationList}
      </div>
      )
   }

   const renderHeadersInfoName = () => {
      return (
         <div className="headers__info_name">
            <div className="headers__name">{nameEng}</div>
            <div className="headers__info">{infoEng}</div>
            <div className="headers__buttonsLang"><Button text={buttonLang2}/> | <Button text={buttonLang1}/></div>
         </div>
      )
   }

   return (<div>
        {renderNavigation()}
        {renderHeadersInfoName()}
        <div className="headers__picture">
           <img src={foto} alt="Novik"/>
        </div>
      </div>
   )
}

export default Headers;


