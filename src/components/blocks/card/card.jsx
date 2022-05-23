import React from "react";
import { CardPanel, CardImage, CardTitle } from "./styled";
import { TitleSize } from "../../ui/title/title";
import OptionCard from "../../ui/option-card/option-card";
import ProductDescription from "../../ui/product-description/product-description";
import ProductOptions from "../../ui/product-options/product-options";

const Card = ({ product }) => {
  const tabList = [
    {
      title: "Описание",
      content: (
        <ProductDescription
          description={product.description}
          price={product.price}
          weight={product.weight}
        />
      )
    },
    {
      title: "Характеристики",
      content: <ProductOptions properties={product.specifications} />
    },
    {
      title: "Свойства",
      content: <ProductOptions properties={product.properties} />
    }
  ];
  return (
    <CardPanel>
      <CardImage
        width="248"
        height="248"
        max-width="248"
        src={product.image}
        alt="изображение продукта."
      />
      <div>
        <CardTitle level="3" size={TitleSize.CARD} marginBottom={16}>
          {product.title}
        </CardTitle>
        <OptionCard tabList={tabList} />
      </div>
    </CardPanel>
  );
};

export default Card;
