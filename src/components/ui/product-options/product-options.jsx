import React from "react";
import { Ul } from "../../ui/styled";
import { Property, PropertyValue } from "./styled";

const ProductOptions = ({ properties }) => {
  return (
    <Ul>
      {properties.map((item) => (
        <li key={item.id}>
          <Property>
            <PropertyValue>{item.property}: </PropertyValue>
            {item.value}
          </Property>
        </li>
      ))}
    </Ul>
  );
};

export default ProductOptions;
