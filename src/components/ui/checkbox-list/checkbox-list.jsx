import React from "react";
import Checkbox from "../checkbox/checkbox";
import { Ul } from "../styled";

const CheckboxList = ({
  selectValues,
  labelComponent,
  options,
  name,
  onChange,
  onClickLabel = () => {}
}) => {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul>
      {options.map((option, index) => (
        <li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectValues={selectValues}
            isChecked={selectValues.includes(option.value)}
            name={name}
            text={option.title}
            value={option.value}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
          />
        </li>
      ))}
    </Ul>
  );
};

export default CheckboxList;
