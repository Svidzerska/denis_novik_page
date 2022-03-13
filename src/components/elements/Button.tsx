function Button(props : any) {
   return (
      <button onClick={props.onClick}
      value={props.value}
      className={props.className}
      >{props.value}</button>
   )
}

export default Button;