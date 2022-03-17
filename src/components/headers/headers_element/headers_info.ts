import { useSelector, RootStateOrAny } from "react-redux";


function useHeadersInfo() {
   const language = useSelector((state: RootStateOrAny) => state.language.selectLanguage);
   
   const info = () => {
   if (language === "Eng") {
      return {
         headersNavigator: ["Home", "About me", "Skills", "Portfolio", "Contacts"],
         name: "Denis",
         surname: "Novik",
         info_profession: "UX | UI designer",
         info_age: "24 years old, Minsk",
         buttonLang1: "UKR",
         buttonLang2: "ENG"
      }
   } else if (language === "Ukr") {
      return {
         headersNavigator: ["Домашня сторінка", "Про мене", "Навики", "Портфоліо", "Контакти"],
         name: "Деніс",
         surname: "Новік",
         info_profession: "UX | UI дизайнер",
         info_age: "24 роки, Мінськ",
         buttonLang1: "УКР",
         buttonLang2: "АНГЛ"
      }
   }
}
      return info();
}

export default useHeadersInfo;
