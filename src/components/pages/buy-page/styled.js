import styled, { css } from "styled-components";
import { Panel } from "../../blocks/panel/panel";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox-select.svg";

export const StyledBuyPage = styled.form`
  display: flex;
  padding-left: ${(props) => props.theme.indentPage};
  position: absolute;
  top: 80px;
  bottom: 80px;
  background-color: #f7f7f7;
  padding-top: 40px;
`;

export const LeftColumn = styled.div`
  max-width: 353px;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  overflow-y: overlay;
`;

export const OrderPanel = styled(Panel)`
  margin-bottom: 22px;
  width: 353px;
  padding: 24px 20px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.paddingBottom || "12"}px;
`;

export const AddressInput = styled.input`
  background: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 48px;
  font-size: 14px;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
  margin-bottom: 20px;

  ::placeholder {
    color: ${(props) => props.theme.colorText};
  }
`;

export const PriceLabel = styled.span`
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 8px;
`;

export const PriceValue = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 32px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.p`
  position: relative;
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 30px;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.isChecked
        ? css`
            background-color: #fc9b27;
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center;
            border: 1px solid rgba(0, 0, 0, 0.1);
          `
        : css`
            background: #f7f7f7;
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
