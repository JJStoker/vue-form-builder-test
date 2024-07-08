export interface Step {
  id: string
  title: string
  description: string
  type: StepType
  options?: StepOption[]

  value?: number | string | boolean
}

export enum StepType {
  SELECT = 'select',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  DATE = 'date',
  TIME = 'time',
  DATETIME = 'datetime',
  TEXTAREA = 'textarea',
  NUMBER = 'number'
}

export interface StepOption {
  value: string
  label: string
}
