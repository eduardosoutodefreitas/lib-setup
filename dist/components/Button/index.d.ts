import { ButtonHTMLAttributes, ReactNode } from "react";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    variant?: "primary" | "text" | "secondary" | "outline" | "success" | "danger";
    size?: "small" | "medium" | "large";
    className?: string;
};
export declare const Button: ({ children, variant, size, type, disabled, loading, className, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
