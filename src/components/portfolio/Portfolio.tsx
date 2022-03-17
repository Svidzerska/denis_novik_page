import { useSelector, RootStateOrAny } from "react-redux";
import Names from "../elements/Names";
import PortfolioElement from "./portfolio_element/PortfolioElement";
import './portfolio.scss';
import Fashion from "./images/portfolio_example_1.png";
import Reebok from "./images/reebok_web_portfolio_example_2.png";
import Braun from "./images/portfolio_example_3.png";


function Portfolio() {
   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);
   
   const portfolio_img = [Fashion, Reebok, Braun];

   const info = () => {
      if (language === "Eng") {
         return ({
            named: "Portfolio",
            portfolioArray: ["Online fashion store - Homepage",
               "Reebok Store - Concept",
               "Braun Landing Page - Concept"]
         }
         )
      } else if (language === "Ukr") {
         return (
            {
               named: "Портфоліо",
               portfolioArray: ["Онлайн-магазин моди - Домашня сторінка",
                  "Reebok магазин - Ідея",
                  "Braun візитка-лендинг - Ідея"]
            }
         )
      }
   }

   const renderPorfolio = portfolio_img?.map((element,index) => {
      return (
      <PortfolioElement key={info()?.portfolioArray[index]} img={element} text={info()?.portfolioArray[index]}/>
      )
   })

   
   return (<div id="portfolio" className="portfolio">
      <Names value={info()?.named} />
      {renderPorfolio}
   </div>
   )
}

export default Portfolio;