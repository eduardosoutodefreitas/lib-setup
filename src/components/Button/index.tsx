import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./styles.module.scss";
import variants from "./variants.module.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "text" | "secondary" | "outline" | "success" | "danger";
  size?: "small" | "medium" | "large";
  className?: string;
};

export const Button = ({
  children,
  variant = "primary",
  size = "large",
  type = "button",
  disabled,
  loading,
  className,
  ...props
}: ButtonProps) => {
  return (
    <>
      {loading && <div className={styles.loading_overlay}> </div>}
      <button
        type={type}
        disabled={loading || disabled}
        className={[
          styles.button,
          styles[`size__${size}`],
          variants[`variant__${variant}`],
          className ? className : "",
          loading ? variants.loading : "",
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
