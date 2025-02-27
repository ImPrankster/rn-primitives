import { ForceMountable } from "@rn-primitives/internal-types";

type SingleRootProps = {
  type: "single";
  value: string | undefined;
  onValueChange: (value: string | undefined) => void;
};

type MultipleRootProps = {
  type: "multiple";
  value: string[];
  onValueChange: (value: string[]) => void;
};

type AccordionContext = (SingleRootProps | MultipleRootProps) & {
  disabled?: boolean;
  collapsible?: boolean;
};

type AccordionRootProps = AccordionContext & {
  /**
   * Platform: WEB ONLY
   */
  dir?: "ltr" | "rtl";
  /**
   * Platform: WEB ONLY
   */
  orientation?: "vertical" | "horizontal";
};

interface AccordionItemProps {
  value: string;
  disabled?: boolean;
}

type AccordionContentProps = ForceMountable;

export type {
  AccordionContentProps,
  AccordionContext,
  AccordionItemProps,
  AccordionRootProps,
};
