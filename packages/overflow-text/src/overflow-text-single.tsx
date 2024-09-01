import { Tooltip } from "antd";
import React, {
  useRef,
  forwardRef,
  useState,
  useEffect,
  ForwardRefRenderFunction,
} from "react";
import { OverflowTextComponent, OverflowTextProps } from "./interface";
import cls from "classnames";
import "./style/overflow-text.less";

const OverflowTextRender: OverflowTextComponent = (
  props: OverflowTextProps,
  ref
) => {
  const {
    tooltipProps = {},
    className,
    width = "fit-content",
    children,
    containerProps = {},
    rows: _,
    onEllipsis,
  } = props;

  let domRef = useRef<HTMLDivElement>(null);
  if (ref) {
    if (typeof ref === "function") {
      ref(domRef.current);
    } else {
      domRef = ref;
    }
  }

  const [ellipsis, setEllipsis] = useState(false);
  useEffect(() => {
    onEllipsis?.(ellipsis);
  }, [onEllipsis, ellipsis]);
  useEffect(() => {
    if (!domRef.current) return;
    const { scrollWidth, clientWidth } = domRef.current;
    setEllipsis(scrollWidth > clientWidth);
  }, [props]);

  return (
    <Tooltip title={!ellipsis ? "" : children} {...tooltipProps}>
      <div
        data-tid="m4b_overflow_text_single"
        {...containerProps}
        ref={domRef}
        style={{
          maxWidth: "100%",
          width,
          ...(containerProps.style ?? {}),
        }}
        className={cls(
          className,
          "simple-overflow-text-single",
          "simple-overflow-text"
        )}
      >
        {children}
      </div>
    </Tooltip>
  );
};

const OverflowTextSingle = forwardRef(OverflowTextRender);
OverflowTextSingle.displayName = "OverflowTextSingle";
export default OverflowTextSingle;
