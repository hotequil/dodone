import styles from "./Button.module.css"
import { BaseComponent } from "../../shared/types/Generic";

export const Button = ({ children, ...props }: BaseComponent) => (
  <button {...props} className={`${styles.button} ${props.className || ''}`}>{children}</button>
)
