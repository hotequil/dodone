import { BaseComponent } from "../../shared/types/Generic";
import styles from "./NotFound.module.css"

export const NotFound = ({ children }: BaseComponent) =>
  <span className={styles.notFound}>
    <span aria-hidden="true">¯\_(ツ)_/¯</span>
    <span>{children}</span>
  </span>
