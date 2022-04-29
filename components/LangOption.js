import React from "react";
import i18nConfig from "../i18n.json";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const { locales } = i18nConfig;

const LangOption = () => {
  const router = useRouter();
  console.log(router);
  const { t, lang } = useTranslation();
  return (
    <div>
      <select
        onChange={(e) => {
          router.push(router.asPath, null, {
            locale: e.target.value,
          });
        }}
      >
        <option> {t(`common:language-name-${lang}`)}</option>
        {locales.map((lng) => {
          if (lng === lang) return null;

          return (
            <option value={lng} key={lng}>
              {t(`common:language-name-${lng}`)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LangOption;
