import React from "react";
import { StyledAbout, AboutWrapper } from "./styled";

import Title, { TitleSize } from "../../ui/title/title";

const About = () => {
  return (
    <StyledAbout>
      <AboutWrapper>
        <Title size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <p className="about__text">
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и&nbsp;доставляем продукты максимально
          свежими.
        </p>
      </AboutWrapper>
    </StyledAbout>
  );
};

export default About;
