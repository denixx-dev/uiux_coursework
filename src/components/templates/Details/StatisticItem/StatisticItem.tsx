import React from "react";
import * as Style from "./index.styled";

type StatisticItemProps = {
  icon: JSX.Element;
  text: number | string | undefined;
};
const StatisticItem: React.FC<StatisticItemProps> = (props) => {
  return (
    <Style.StatisticItem>
      <div>
        {props.icon} {props.text}
      </div>
    </Style.StatisticItem>

  );
};

export default StatisticItem;
