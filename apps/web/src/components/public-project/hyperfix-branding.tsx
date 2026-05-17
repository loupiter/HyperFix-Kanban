import { useTranslation } from "react-i18next";

export function HyperFixBranding() {
  const { t } = useTranslation();

  return (
    <a
      href="https://coubeche.hypeer.cloud"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-foreground transition-colors"
    >
      {t("publicProject:branding.poweredBy")}{" "}
      <span className="font-medium">{t("common:appName")}</span>
    </a>
  );
}
