import './info.scss';
import Names from "../elements/Names";
import useMediaQuery from "../elements/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";



function Info(): JSX.Element {
   const { t } = useTranslation();

   const matches: boolean = useMediaQuery('(max-width: 640px)');

   return (
   <div id="info" className="about_me__info" >
      <div>
         <Names value="About me" />
         <p>
            {t("info.0")}{matches ? <br /> : " "}
            {t("info.1")}{matches ? " " : <br />}
            {t("info.2")}{matches ? <br /> : " "}
            {t("info.3")}</p>
         <p>
            {t("info.4")}{matches ? <br /> : " "}
            {t("info.5")}{matches ? " " : <br />}
            {t("info.6")}{matches ? <br /> : " "}
            {t("info.7")}
         </p>
         <p>
            {t("info.8")}{matches ? <br /> : " "}
            {t("info.9")}{matches ? " " : <br />}
            {t("info.10")}
         </p>
      </div>
   </div>
   )
}

export default Info;