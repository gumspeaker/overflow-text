import { ForwardRefRenderFunction, ReactNode } from "react";

/**
 * @title OverflowTextProps
 */
export interface OverflowTextProps {
  /**
   * @zh 子节点。
   * @en Children node.
   */
  children?: ReactNode;
  /**
   * @zh 显示省略的行数。
   * @en Max overflow rows.
   */
  rows?: number;
  /**
   * @zh tooltip props。
   * @en Tooltip props.
   */
  tooltipProps?: Record<string, string>;
  /**
   * @zh 块宽度。
   * @en Block width.
   */
  width?: string | number;
  /**
   * @zh 容器属性。
   * @en The props of container.
   */
  containerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  className?: string | string[];
  multiply?: boolean;
  /**
   * @zh 在省略发生改变的时候触发。
   * @en Callback when the ellipsis state changes.
   */
  onEllipsis?: (v: boolean) => void;
}

export type OverflowTextComponent = ForwardRefRenderFunction<
  HTMLDivElement,
  OverflowTextProps
>;
