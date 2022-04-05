import { MouseEventHandler } from "react";

interface Props {
   onClick : MouseEventHandler<HTMLButtonElement>,
   className?: string,
   value: JSX.Element
}


function Button(props : Props) {
   return (
      <button onClick={props.onClick}
      className={props.className}
      >{props.value}</button>
   )
}

export default Button;