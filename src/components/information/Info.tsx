import { useSelector, RootStateOrAny } from "react-redux";
import './info.scss';
import Names from "../elements/Names";



function Info() {
   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);
   
   const info = () => {
      if (language === "Eng") {
         return (<div>
            <Names className="about_me__info__name" value="About me"/>
            <p>Hi, I'm Denis – UX/UI designer from Minsk. <br/> I'm interested in design and everything connected with it.</p>
            <p>I'm studying at courses "Web and mobile design <br/> interfaces" in IT-Academy.</p>
            <p>Ready to implement excellent projects <br/> with wonderful people.</p>
         </div>
         )
      } else if (language === "Ukr") {
         return (
            <div>
            <Names className="about_me__info__name" value="Про мене"/>
            <p>Привіт, мене звуть Деніс – я UX/UI дизайнер з Мінська. <br/> Цікавлюсь дизайном і усім, що з ним пов'язано.</p>
            <p>Я навчаюся на курсах "Веб- і мобільний дизайн <br/> застосунків" в IT-Академії.</p>
            <p>Готовий до реалізації блискучих проектів <br/> з чудовими людьми.</p>
         </div>
         )
      }
   }

   return (<div id="1Section" className="about_me__info" >
      {info()}
   </div>
   )
}

export default Info;