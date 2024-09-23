"use client";
import { ButtonProps } from "../../Button";
import { forwardRef } from "react";
import styles from "./styles.module.scss";
import "./variables.scss";
import { concatStyles } from "../../../utils/concatStyles";

export interface TriggerProps extends ButtonProps {
  children: any;
  isOpen?: boolean;
}

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, isOpen, ...props }, ref) => {
    if (typeof children === "function") {
      return children(props, ref);
    }
    return (
      <button
        ref={ref}
        className={concatStyles([styles.wrapper, isOpen ? styles.isOpen : ""])}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Trigger.displayName = "Trigger";

export default Trigger;
