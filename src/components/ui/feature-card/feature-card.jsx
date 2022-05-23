import React from "react";
import Title, { TitleSize } from "../title/title";
import { FeatureWrapper, FeatureHeader, Image, FeatureOwner } from "./styled";

const FeatureCard = ({ owner, feature, image, description, isNegative }) => {
  return (
    <FeatureWrapper isNegative={isNegative}>
      <FeatureHeader>
        <Image width={56} height={56} src={image} alt={feature} />
        <div>
          <FeatureOwner isNegative={isNegative}>{owner}</FeatureOwner>
          <Title size={TitleSize.EXTRA_SMALL} as="h3">
            {feature}
          </Title>
        </div>
      </FeatureHeader>
      <p className="feature__text">{description}</p>
    </FeatureWrapper>
  );
};

export default FeatureCard;
