import React, { useEffect } from "react";
import Button from "./elements/Button";
import foto from '../../images/Group_2_1.png';
import './headers.scss';
import { setLanguage } from "../../app/features/languageSlice";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";


function Headers(props: any) {
   const dispatch = useDispatch();

   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);

   useEffect(() => {
      console.log(language);
   }, [language]);

   const info = () => {
      if (language === "Eng") {
         return {
            headersNavigator: ["Home", "About me", "Skills", "Portfolio", "Contacts"],
            name: "Denis Novik",
            info: "UX | UI designer 24 years old, Minsk",
            buttonLang1: "UKR",
            buttonLang2: "ENG"
         }
      } else if (language === "Ukr") {
         return {
            headersNavigator: ["Домашня сторінка", "Про мене", "Навики", "Портфоліо", "Контакти"],
            name: "Деніс Новік",
            info: "UX | UI дизайнер 24 роки, Мінськ",
            buttonLang1: "УКР",
            buttonLang2: "АНГЛ"
         }
      }
   }

   const handleButtonEng = (e: any) => {
      dispatch(setLanguage("Eng"));
   }

   const handleButtonUkr = (e: any) => {
      dispatch(setLanguage("Ukr"));
   }


   const headerNavigationList = info()?.headersNavigator.map(element => {
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
            <div className="headers__name">{info()?.name}</div>
            <div className="headers__info">{info()?.info}</div>
            <div className="headers__buttonsLang">
               <Button onClick={handleButtonEng}
                  value={info()?.buttonLang2}
                  className={language === "Eng" ? "buttonLang__active" : "buttonLang"}
               /> | <Button onClick={handleButtonUkr}
                  value={info()?.buttonLang1}
                  className={language === "Ukr" ? "buttonLang__active" : "buttonLang"}
               />
            </div>
         </div>
      )
   }

   return (<div>
      {renderNavigation()}
      {renderHeadersInfoName()}
      <div className="headers__picture">
         <img src={foto} alt="Novik" />
      </div>
   </div>
   )
}

export default Headers;


