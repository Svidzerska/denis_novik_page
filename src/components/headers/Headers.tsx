import React, { useEffect, useState } from "react";
import useMediaQuery from "../elements/hooks/useMediaQuery";
import Button from "../elements/Button";
import foto from '../../images/Group_2_1.png';
import menu from '../../images/menu.png';
import foto_small from '../../images/Group_2_1_small.png';
import menu_close from '../../images/menu_close.png';

import './headers.scss';
import { setLanguage } from "../../app/features/languageSlice";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { setSection } from "../../app/features/navigationSlice";


function Headers(props: any) {
   const dispatch = useDispatch();

   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);
   const section = useSelector((state: RootStateOrAny) => state.navigation.selectSection);
   const matches = useMediaQuery('(max-width: 640px)');

   const [menuText, setMenuText] = useState(false);



   useEffect(() => {
      console.log(matches);
   }, [matches]);

   const info = () => {
      if (language === "Eng") {
         return {
            headersNavigator: ["Home", "About me", "Skills", "Portfolio", "Contacts"],
            name: "Denis",
            surname: "Novik",
            info_profession: "UX | UI designer",
            info_age: "24 years old, Minsk",
            buttonLang1: "UKR",
            buttonLang2: "ENG"
         }
      } else if (language === "Ukr") {
         return {
            headersNavigator: ["Домашня сторінка", "Про мене", "Навики", "Портфоліо", "Контакти"],
            name: "Деніс",
            surname: "Новік",
            info_profession: "UX | UI дизайнер",
            info_age: "24 роки, Мінськ",
            buttonLang1: "УКР",
            buttonLang2: "АНГЛ"
         }
      }
   }

   const handleButtonEng = (e: any) => {
      setMenuText(false);
      dispatch(setSection("0"));
      dispatch(setLanguage("Eng"));
   }

   const handleButtonUkr = (e: any) => {
      setMenuText(false);
      dispatch(setSection("0"));
      dispatch(setLanguage("Ukr"));
   }

   const handleNavigation = (e: any) => {
      setMenuText(false);
      console.log(e.target.id);
      dispatch(setSection(e.target.id));
   }


   const headerNavigationList = info()?.headersNavigator.map((element, index) => {
      const indexSection = index.toString();
      return (
         <p key={element} >
            <a href={'#' + index + 'Section'}
               id={indexSection}
               onClick={handleNavigation}
               className={section === indexSection ? "navigations_items__active" : "navigations_items"}>
               {element}
            </a>
         </p>
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
         <div id="0Section" className="headers__info_name">
            <div className="headers__name">
               <span>{info()?.name}</span>
               <br />
               <span>{info()?.surname}</span>
            </div>
            <div className="headers__info">
               <p>{info()?.info_profession}</p>
               <p>{info()?.info_age}</p>
            </div>
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

   const handleMenu = (e:any) => {
      setMenuText(true);
   }

   const renderHeadersSmall = () => {
      return (<div className="headers_small">
         <div>
            <div className="headers__name">
               <span>{info()?.name}</span>
               <br />
               <span>{info()?.surname}</span>
            </div>
            <div className="headers__info">
               <p>{info()?.info_profession}</p>
               <p>{info()?.info_age}</p>
            </div>
         </div>
         <div>
            <Button value={<img src={menu}></img>} onClick={handleMenu}/>
         </div>
         <div><img src={foto_small} alt="fotoman" /></div>
      </div>)
   }

   const handleClosePress = () => {
      setMenuText(false);
   }

   const renderMenuSmall = () => {
      return (
         <div>
            <div>
               {renderNavigation()}
               <Button value={<img src={menu_close} alt=""/>} onClick={handleClosePress}/>
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

         </div>
      )
   }

   return (
      matches ?
         <div>{menuText ? renderMenuSmall() : renderHeadersSmall()}</div>
         :
         (
            <div className="headers">
               <div>
                  {`The view port is ${matches ? 'less than' : 'more than'} 640px pixels wide`}
               </div>
               {renderNavigation()}
               {renderHeadersInfoName()}
               <div className="headers__picture">
                  <img src={foto} alt="Novik" />
               </div>
            </div>)
   )
}

export default Headers;


