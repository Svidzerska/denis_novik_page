import React, { useEffect, useState } from "react";
import useMediaQuery from "../elements/hooks/useMediaQuery";
import Button from "../elements/Button";
import foto from '../../images/Group_2_1.png';
import menu from '../../images/menu.png';
import foto_small from '../../images/Group_2_1_small.png';
import menu_close from '../../images/menu_close.png';
import { HashLink as Link } from 'react-router-hash-link';

import './headers.scss';
import { setLanguage } from "../../app/features/languageSlice";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { setSection } from "../../app/features/navigationSlice";
import useHeadersInfo from "./headers_element/headers_info";


function Headers(props: any) {
   const dispatch = useDispatch();

   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);
   const section = useSelector((state: RootStateOrAny) => state.navigation.selectSection);
   const matches = useMediaQuery('(max-width: 640px)');

   const info = useHeadersInfo();
   console.log(info);

   const [menuText, setMenuText] = useState(false);


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


   const nav = ["headers", "info", "skills", "portfolio", "footer"];
   const headerNavigationList = info?.headersNavigator.map((element, index) => {
      const indexSection = index.toString();
      return (
         <p key={element} >
            <Link to={"#" + nav[index]}>
               <span id={indexSection}
               onClick={handleNavigation}
               className={section === indexSection ? "navigations_items__active" : "navigations_items"}>
                  {element}
               </span>
            </Link>
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

   const renderNameInfo = () => {
      return (
         <div>
            <div className="headers__name">
               <span>{info?.name}</span>
               <br />
               <span>{info?.surname}</span>
            </div>
            <div className="headers__info">
               <p>{info?.info_profession}</p>
               <p>{info?.info_age}</p>
            </div>
         </div>
      )
   }

   const renderButtonLang = () => {
      return (
         <div className="headers__buttonsLang">
            <Link to={"#headers"}>
               <Button onClick={handleButtonUkr}
               value={info?.buttonLang1}
               className={language === "Ukr" ? "buttonLang__active" : "buttonLang"}
            />
            </Link>
            |
            <Link to={"#headers"}>
               <Button onClick={handleButtonEng}
                  value={info?.buttonLang2}
                  className={language === "Eng" ? "buttonLang__active" : "buttonLang"}
               />
            </Link>
         </div>
      )
   }

   const renderHeadersInfoName = () => {
      return (
         <div id="headers" className="headers__info_name">
            {renderNameInfo()}
            {renderButtonLang()}
         </div>
      )
   }

   const handleMenu = (e:any) => {
      setMenuText(true);
   }

   const renderHeadersSmall = () => {
      return (<div className="headers_small">
         <div id="headers" className="headers_small__info">
            {renderNameInfo()}
            <div>
               <Button className="headers_small__button" value={<img src={menu}></img>} onClick={handleMenu}/>
            </div>
         </div>
         <div className="headers_small__picture"><img src={foto_small} alt="fotoman" /></div>
      </div>)
   }

   const handleClosePress = () => {
      setMenuText(false);
   }

   const renderMenuSmall = () => {
      return (
            <div className="headers_smallMenu">
               <div className="headers_smallMenu__list">
                  {renderNavigation()}
                  <Button value={<img src={menu_close} alt=""/>} onClick={handleClosePress}/>
               </div>
               {renderButtonLang()}
            </div>
      )
   }

   return matches ? 
         <div className="headers">{menuText ? renderMenuSmall() : renderHeadersSmall()}</div>
         :
         (<div className="headers">
            {renderNavigation()}
            {renderHeadersInfoName()}
            <div className="headers__picture">
               <img src={foto} alt="Novik" />
            </div>
         </div>)
}

export default Headers;


