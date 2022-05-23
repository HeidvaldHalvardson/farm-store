import React from "react";
import { VisuallyHiddenInput } from "../styled/visually-hidden-input/visually-hidden-input";
import { Label } from "./styled";

const Checkbox = ({
  value,
  name,
  isChecked,
  onChange,
  labelComponent,
  text,
  onClick,
  ...props
}) => {
  const LabelComponent = labelComponent;
  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        name={name}
        checked={isChecked}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} isChecked={isChecked}>
        {text}
      </LabelComponent>
    </Label>
  );
};

export default Checkbox;
