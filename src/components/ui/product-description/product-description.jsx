import React from "react";
import {
  ProductCost,
  ProductDescriptionText,
  StyledProductDescription
} from "./styled";

const ProductDescription = ({ description, price, weight }) => {
  return (
    <StyledProductDescription>
      <ProductDescriptionText>{description}</ProductDescriptionText>
      <ProductCost>
        {price} руб./ {weight} гр.
      </ProductCost>
    </StyledProductDescription>
  );
};

export default ProductDescription;
