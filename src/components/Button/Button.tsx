import { memo } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "category";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = memo(({variant = "primary", className, ...rest}: ButtonProps) => {
  const buttonStyle = `${styles.button} ${styles[variant]} ${className}`;

  return <button className={buttonStyle} {...rest} />;
});

export default Button;