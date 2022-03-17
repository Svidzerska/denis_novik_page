import { useSelector, RootStateOrAny } from "react-redux";
import './info.scss';
import Names from "../elements/Names";
import useMediaQuery from "../elements/hooks/useMediaQuery";



function Info() {
   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);
   const matches = useMediaQuery('(max-width: 640px)');


   const info = () => {
      if (language === "Eng") {
         return (<div>
            <Names className="about_me__info__name" value="About me" />
            <p>
               Hi, I'm Denis – UX/UI designer from{matches ? <br /> : " "}
               Minsk.{matches ? " " : <br />}
               I'm interested in design and{matches ? <br /> : " "}
               everything connected with it.</p>
            <p>
               I'm studying at courses{matches ? <br /> : " "}
               "Web and mobile design{matches ? " " : <br />}
               interfaces"{matches ? <br /> : " "}
               in IT-Academy.
            </p>
            <p>
               Ready to implement excellent{matches ? <br /> : " "}
               projects{matches ? " " : <br />}
               with wonderful people.
            </p>
         </div>
         )
      } else if (language === "Ukr") {
         return (
            <div>
            <Names className="about_me__info__name" value="Про мене"/>
               <p>
                  Привіт, мене звуть Деніс –{matches ? <br /> : " "}
                  я UX/UI дизайнер з Мінська.<br />
                  Цікавлюсь дизайном і усім,{matches ? <br /> : " "}
                  що з ним пов'язано.
               </p>
               <p>
                  Я навчаюся на курсах "Веб- і{matches ? <br /> : " "}
                  мобільний дизайн{matches ? " " : <br />}
                  застосунків"{matches ? <br /> : " "}
                  в IT-Академії.
               </p>
               <p>
                  Готовий до реалізації блискучих{matches ? <br /> : " "}
                  проектів{matches ? " " : <br />}
                  з чудовими людьми.
               </p>
         </div>
         )
      }
   }

   return (<div id="info" className="about_me__info" >
      {info()}
   </div>
   )
}

export default Info;