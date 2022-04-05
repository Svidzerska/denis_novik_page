import "./portfolioElement.scss";


interface Props {
   key: string,
   img: string,
   text: string
}

function PortfolioElement(props:Props) : JSX.Element {
   return (
            <div className="portfolioElement">
               <img src={props.img} alt=""/>
               <a href="#">{props.text}</a>
            </div>
   )
}

export default PortfolioElement;