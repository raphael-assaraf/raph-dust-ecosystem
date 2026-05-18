import * as React from "react";
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

/*
 * ContentMessage — Sparkle's inline notice box with color-coded variants.
 * Use for inline tips, warnings, errors, success messages inside content.
 */

const VARIANTS = {
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-900",
    iconColor: "text-blue-500",
    icon: InformationCircleIcon,
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-900",
    iconColor: "text-green-600",
    icon: CheckCircleIcon,
  },
  warning: {
    bg: "bg-golden-50",
    border: "border-golden-200",
    text: "text-golden-900",
    iconColor: "text-golden-600",
    icon: ExclamationCircleIcon,
  },
  error: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-900",
    iconColor: "text-rose-500",
    icon: XCircleIcon,
  },
} as const;

interface ContentMessageProps {
  variant?: keyof typeof VARIANTS;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  /** Override the default icon for this variant. */
  icon?: React.ComponentType<{ className?: string }>;
}

export function ContentMessage({
  variant = "info",
  title,
  children,
  className,
  icon,
}: ContentMessageProps) {
  const v = VARIANTS[variant];
  const Icon = icon ?? v.icon;
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl border px-4 py-3",
        v.bg,
        v.border,
        v.text,
        className
      )}
    >
      <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", v.iconColor)} />
      <div className="min-w-0 flex-1 text-sm">
        {title && <div className="font-semibold">{title}</div>}
        {children && <div className={cn(title && "mt-1")}>{children}</div>}
      </div>
    </div>
  );
}
