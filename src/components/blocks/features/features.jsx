import React from "react";
import { StyledFeatures, FeaturesList, FeaturesItem } from "./styled";

import Title, { TitleSize } from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";
import Button from "../../ui/button/button";
import { AppRoute } from "/src/const";

const Features = ({ features }) => {
  return (
    <StyledFeatures>
      {features && features.length ? (
        <>
          <Title size={TitleSize.MEDIUM} as="h2">
            Почему фермерские продукты лучше?
          </Title>
          <FeaturesList>
            {features.map((feature) => (
              <FeaturesItem key={feature.id}>
                <FeatureCard {...feature} />
              </FeaturesItem>
            ))}
          </FeaturesList>
        </>
      ) : null}
      <Button link={AppRoute.BUY}>Купить</Button>
    </StyledFeatures>
  );
};

export default Features;
