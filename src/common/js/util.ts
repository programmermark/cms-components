import { CSSResultGroup } from "lit";
import { TagType } from "../../interface/CmsTag";

/**
 * 返回type对应的颜色
 * @param type
 * @returns
 */
export const getColorByType = (type: TagType) => {
  const color = {
    primary: "#c9000d",
    gray: "#c0c4cc",
    default: "rgba(64,158,255,",
    success: "rgba(103,194,58,",
    info: "rgba(144,147,153,",
    warning: "rgba(230,162,60,",
    danger: "rgba(245,108,108,",
  };
  return color[type] as unknown as CSSResultGroup;
};
