import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IInput {
  type: 'input';
  label: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  default?: string;
  password?: boolean;
  icon?: IconProp;
}

export interface ICheckbox {
  type: 'checkbox';
  disabled?: boolean;
  readonly?: boolean;
  label: string;
  checked?: boolean;
}

export interface ISelect {
  type: 'select';
  disabled?: boolean;
  readonly?: boolean;
  label: string;
  default?: string;
  options?: { value: string; label?: string }[];
}

export interface INumber {
  type: 'number';
  disabled?: boolean;
  readonly?: boolean;
  label: string;
  placeholder?: string;
  default?: number;
  icon?: IconProp;
  min?: number;
  max?: number;
}

export interface ISlider {
  type: 'slider';
  disabled?: boolean;
  readonly?: boolean;
  label: string;
  default?: number;
  min?: number;
  max?: number;
  step?: number;
}
