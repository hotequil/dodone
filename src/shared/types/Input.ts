import { BaseComponent } from "./Generic";

export interface InputProps extends BaseComponent{
  label: string
  placeholder: string
  name: string
  value: any
  set: Function
  required?: boolean
  maxlength?: number
}
