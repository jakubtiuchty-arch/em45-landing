import React from "react";
import clsx from "clsx";

const variants = {
  default: "bg-emerald-600 text-white hover:bg-emerald-700",
  outline: "border-2 border-emerald-600 bg-white text-emerald-700 hover:bg-emerald-50",
} as const;

const sizes = {
  default: "h-10 px-4 text-sm",
  sm: "h-8 px-3 text-sm",
  lg: "h-11 px-6 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
};

export default function Button({
  variant = "default",
  size = "default",
  className,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const classes = clsx(
    variants[variant],
    sizes[size],
    "inline-flex items-center justify-center rounded-md",
    className
  );

  // Jeśli asChild=true, renderuj dziecko z klasami
  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as any;
    return React.cloneElement(children as any, {
      className: clsx(childProps.className, classes),
    });
  }

  // Normalny button
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}