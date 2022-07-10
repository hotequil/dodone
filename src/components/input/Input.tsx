import { useEffect, useMemo, useState } from "react";
import { uniqueId } from "../../shared/helpers/unique-id";
import { InputProps } from "../../shared/types/Input";
import PropTypes from "prop-types";
import styles from "./Input.module.css"

export const Input = ({ label, name, value, placeholder, set, required, maxlength }: InputProps) => {
  const id = useMemo(() => uniqueId(), [])
  const [charsValidation, setCharsValidation] = useState<string>()

  useEffect(() => {
    if(!maxlength) return

    const length = maxlength - (value?.length || 0)

    setCharsValidation(`${length} ${length >= 2 ? 'chars' : 'char'} remaining`)
  }, [value])

  return (
    <div className={styles.group}>
      <label htmlFor={id} className={`${styles.label} ${required ? styles.required : ''}`}>{label}</label>
      <input type="text"
             className={styles.control}
             required={required}
             maxLength={maxlength}
             name={name}
             placeholder={placeholder}
             id={id}
             onInput={event => set(event.currentTarget.value)} />
      { maxlength && charsValidation && <span className={styles.validation}>{charsValidation}</span> }
    </div>
  )  
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  set: PropTypes.func.isRequired,
  value: PropTypes.any,
  required: PropTypes.bool,
  maxlength: PropTypes.number,
}

Input.defaultProps = {
  required: false,
}
