import React, { forwardRef } from "react";
import cx from "classnames";
import OverflowTextMultiply from "./overflow-text-multiply";
import { OverflowTextComponent, OverflowTextProps } from "./interface";
import OverflowTextSingle from "./overflow-text-single";
import "./style/overflow-text.less";

const OverflowTextRender: OverflowTextComponent = (
  props: OverflowTextProps,
  ref
) => {
  const { rows = 1, multiply } = props;
  return rows > 1 || multiply ? (
    <OverflowTextMultiply {...props} ref={ref} />
  ) : (
    <OverflowTextSingle {...props} ref={ref} />
  );
};

const OverflowText = forwardRef(OverflowTextRender);
OverflowText.displayName = "OverflowText";
export default OverflowText;
