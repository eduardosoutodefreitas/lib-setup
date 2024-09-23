/// <reference types="react" />
import { ButtonProps } from "../../Button";
import "./variables.scss";
export interface TriggerProps extends ButtonProps {
    children: any;
    isOpen?: boolean;
}
declare const Trigger: import("react").ForwardRefExoticComponent<TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Trigger;
