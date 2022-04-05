import Names from "../elements/Names";
import PortfolioElement from "./portfolio_element/PortfolioElement";
import './portfolio.scss';
import Fashion from "./images/portfolio_example_1.png";
import Reebok from "./images/reebok_web_portfolio_example_2.png";
import Braun from "./images/portfolio_example_3.png";
import { useTranslation } from "react-i18next";


function Portfolio(): JSX.Element {
   const {t} = useTranslation();
   const portfolio_img:string[] = [Fashion, Reebok, Braun];

   const renderPorfolio = portfolio_img?.map((element:string,index:number) => {
      return (
      <PortfolioElement key={t("portfolio.portfolioArray", { returnObjects: true })[index]} img={element} text={t("portfolio.portfolioArray", { returnObjects: true })[index]}/>
      )
   })

   
   return (<div id="portfolio" className="portfolio">
      <Names value={t("portfolio.named")} />
      {renderPorfolio}
   </div>
   )
}

export default Portfolio;