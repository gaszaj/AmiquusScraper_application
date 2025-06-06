import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "@/components/theme-provider";

interface ReCAPTCHAWidgetProps {
  onChange: (token: string | null) => void;
}

export default function ReCAPTCHAWidget({ onChange }: ReCAPTCHAWidgetProps) {
  const { theme } = useTheme();

  // fallback to 'light' if 'system' to keep recaptcha happy
  const resolvedTheme = theme === "system"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : theme;

  return (
    <ReCAPTCHA
      sitekey="6Lf6BFMrAAAAADsao1SE1yVvAFyzLOJjUuHSxIAY"
      onChange={onChange}
      theme={resolvedTheme}
      className="mx-auto"
    />
  );
}
