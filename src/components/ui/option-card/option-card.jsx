import React, { useState } from "react";
import { Content, TitleButton, TitleList } from "./styled";

const OptionCard = ({ tabList }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <TitleList>
        {tabList.map((item, index) => {
          if (index === activeTab) {
            return (
              <TitleButton
                active
                key={item.title}
                onClick={() => setActiveTab(index)}
                type="button"
              >
                {item.title}
              </TitleButton>
            );
          }
          return (
            <TitleButton
              key={item.title}
              onClick={() => setActiveTab(index)}
              type="button"
            >
              {item.title}
            </TitleButton>
          );
        })}
      </TitleList>
      <Content>{tabList[activeTab].content}</Content>
    </>
  );
};

export default OptionCard;
