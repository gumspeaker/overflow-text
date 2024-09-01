import { Tooltip } from "antd";
import React, {
  useRef,
  forwardRef,
  useState,
  useEffect,
  ForwardRefRenderFunction,
} from "react";
import cx from "classnames";
import { OverflowTextProps, OverflowTextComponent } from "./interface";

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
    rows,
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
    const { scrollHeight, clientHeight } = domRef.current;
    setEllipsis(scrollHeight > clientHeight);
  }, [props]);

  return (
    <Tooltip title={!ellipsis ? "" : children} {...tooltipProps}>
      <div
        data-tid="m4b_overflow_text_multiply"
        {...containerProps}
        ref={domRef}
        style={{
          maxWidth: "100%",
          width,
          WebkitLineClamp: rows,
          ...(containerProps.style ?? {}),
        }}
        className={cx(
          "simple-overflow-text-multiply",
          "simple-overflow-text",
          className
        )}
      >
        {children}
      </div>
    </Tooltip>
  );
};

const OverflowTextMultiply = forwardRef(OverflowTextRender);
OverflowTextMultiply.displayName = "OverflowTextMultiply";
export default OverflowTextMultiply;
