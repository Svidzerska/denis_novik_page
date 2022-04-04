import './names.scss';

interface Props {
   value : string
}

function Names(props : Props) {
   return (
      <p className="allSections_info__name" >{props.value}</p>
   )
}

export default Names;