import * as Switch from "@radix-ui/react-switch";
import React from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import * as Slot from "@rn-primitives/slot";
import type {
  PressableRef,
  SlottablePressableProps,
  SlottableViewProps,
  ViewRef,
} from "@rn-primitives/internal-types";
import type { SwitchRootProps } from "./types";

const Root = React.forwardRef<
  PressableRef,
  SlottablePressableProps & SwitchRootProps
>(
  (
    {
      asChild,
      checked,
      onCheckedChange,
      disabled,
      onPress: onPressProp,
      onKeyDown: onKeyDownProp,
      ...props
    },
    ref,
  ) => {
    function onPress(ev: GestureResponderEvent) {
      onCheckedChange(!checked);
      onPressProp?.(ev);
    }

    function onKeyDown(ev: React.KeyboardEvent) {
      onKeyDownProp?.(ev);
      if (ev.key === " ") {
        onCheckedChange(!checked);
      }
    }

    const Component = asChild ? Slot.Pressable : Pressable;
    return (
      <Switch.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        asChild
      >
        <Component
          ref={ref}
          disabled={disabled}
          onPress={onPress}
          // @ts-expect-error Web only
          onKeyDown={onKeyDown}
          {...props}
        />
      </Switch.Root>
    );
  },
);

Root.displayName = "RootWebSwitch";

const Thumb = React.forwardRef<ViewRef, SlottableViewProps>(
  ({ asChild, ...props }, ref) => {
    const Component = asChild ? Slot.View : View;
    return (
      <Switch.Thumb asChild>
        <Component ref={ref} {...props} />
      </Switch.Thumb>
    );
  },
);

Root.displayName = "RootWebSwitch";

export { Root, Thumb };
