import React, { useState } from "react";
import Title, { TitleSize } from "../../ui/title/title";
import {
  LeftColumn,
  StyledBuyPage,
  OrderPanel,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel
} from "./styled";
import Card from "../../blocks/card/card";
import Button from "../../ui/button/button";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import Price from "../../ui/price/price";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

const BuyPage = ({ products }) => {
  const [selectProduct, setSelectProduct] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  const handleOnClickProduct = (value, index) => {
    if (!selectProduct.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const selectProducts = selectProduct.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  const [address, setAddress] = useState("");

  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.title} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return products && products.length ? (
    <StyledBuyPage>
      <LeftColumn>
        <OrderPanel>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={27}>
            Выберите продукты
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-product"}
            options={products.map((product) => ({
              value: product.id,
              title: product.title
            }))}
            selectValues={selectProduct}
            onChange={setSelectProduct}
            onClickLabel={handleOnClickProduct}
          />
        </OrderPanel>
        <OrderPanel paddingBottom={20}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Сделать заказ
          </Title>
          <AddressInput
            value={address}
            onChange={(evt) => setAddress(evt.target.value)}
            placeholder="Введите адрес доставки"
          />
          <PriceLabel>Цена</PriceLabel>
          <PriceValue>
            <Price value={fullPrice} />
          </PriceValue>
          <Button
            onClick={handleBuyClick}
            maxWidth
            disabled={!(selectProduct.length && address)}
          >
            Купить
          </Button>
        </OrderPanel>
      </LeftColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledBuyPage>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
};

export default BuyPage;
