import "./portfolioElement.scss";


function PortfolioElement(props:any) {
   return (
            <div className="portfolioElement">
               <img src={props.img} alt=""/>
               <a href="#">{props.text}</a>
            </div>
   )
}

export default PortfolioElement;