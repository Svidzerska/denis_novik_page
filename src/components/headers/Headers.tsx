import React, { useEffect, useState } from "react";
import useMediaQuery from "../elements/hooks/useMediaQuery";
import Button from "../elements/Button";
import foto from '../../images/Group_2_1.png';
import menu from '../../images/menu.png';
import foto_small from '../../images/Group_2_1_small.png';
import menu_close from '../../images/menu_close.png';
import { HashLink as Link } from 'react-router-hash-link';

import './headers.scss';
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { setSection } from "../../app/features/navigationSlice";
import { useTranslation} from 'react-i18next';





function Headers():JSX.Element {
   const { t, i18n } = useTranslation();

   const dispatch = useDispatch();

   const section: string = useSelector((state: RootStateOrAny) => state.navigation.selectSection);
   const matches: boolean = useMediaQuery('(max-width: 640px)');


   const [menuText, setMenuText] = useState(false);

   
   useEffect(() => {
      window.location.hash = "";
   }, []);

   const lngs = {
      en: { nativeName: t("headers.buttonLang2") },
      ukr: { nativeName: t("headers.buttonLang1")}
   };

   console.log(t("headers.headersNavigator", { returnObjects: true }));
   
   const handleNavigation = (e: any) => {
      setMenuText(false);
      console.log(e.target.id);
      dispatch(setSection(e.target.id));
   }


   const nav: string[] = ["headers", "info", "skills", "portfolio", "footer"];
   const a : Array<string> = t("headers.headersNavigator", { returnObjects: true });
   const headerNavigationList = a.map((element, index) => {
      const indexSection: string = index.toString();
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
         <>
            <div className="headers__name">
               <span>{t("headers.name")}</span>
               <br />
               <span>{t("headers.surname")}</span>
            </div>
            <div className="headers__info">
               <p>{t("headers.info_profession")}</p>
               <p>{t("headers.info_age")}</p>
            </div>
         </>
      )
   }

   const renderButtonLang = () => {
      return (
         <div className="headers__buttonsLang">
            <Link to={"#headers"}>
               {Object.keys(lngs).map((lng) => {
                  return <button key={lng}
                     style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                     className={i18n.resolvedLanguage === lng ? "buttonLang__active" : "buttonLang"}
                     type="submit"
                     onClick={() => { i18n.changeLanguage(lng); }}>  
                     {lngs[lng as keyof typeof lngs].nativeName}
                  </button>
               })}
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

   const handleMenu = () => {
      setMenuText(true);
   }

   const renderHeadersSmall = () => {
      return (<div className="headers_small">
         <div id="headers" className="headers_small__info">
            <div className="name_info_flex">{renderNameInfo()}</div>
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


