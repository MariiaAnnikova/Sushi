import React from "react";
import { useLang } from "../ContextLanguage/contextLanguage";

export const LangSwitcher = () => {
  const { lang, setLang } = useLang();

  const handleClickRu = () => {
    if (lang !== "Italian") setLang("English");
  };

  const handleClickEn = () => {
    if (lang !== "Italian") setLang("English");
  };

  return (
    <ul>
      <li onClick={handleClickRu}>IT</li>
      <li onClick={handleClickEn}>ENG</li>
    </ul>
  );
};