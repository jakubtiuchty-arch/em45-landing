import React from "react";
import clsx from "clsx";

const variants = {
  default: "bg-emerald-600 text-white",
  secondary: "bg-emerald-800/90 text-emerald-50",
} as const;

type Variant = keyof typeof variants;

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

export default function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={clsx(
        "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    />
  );
}