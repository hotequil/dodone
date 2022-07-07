import PropTypes from "prop-types";
import styles from "./Section.module.css"
import { SectionProps } from "../../shared/types/SectionProps";

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired
}
