var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button.tsx
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { jsx, jsxs } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary hover:bg-primary/90 disabled:opacity-50",
        secondary: "bg-secondary text-on-secondary hover:bg-secondary/90 disabled:opacity-50",
        danger: "bg-error text-on-error hover:bg-error/90 disabled:opacity-50",
        outline: "border border-outline-variant text-on-surface-variant hover:bg-surface-container-low disabled:opacity-50",
        ghost: "text-on-surface-variant hover:bg-surface-container disabled:opacity-50"
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Button = forwardRef(
  ({ variant, size, loading, children, disabled, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        disabled: disabled || loading,
        className: cn(buttonVariants({ variant, size }), className),
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxs("svg", { className: "mr-2 h-4 w-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
            /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
          ] }),
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Alert.tsx
import { forwardRef as forwardRef2, useState } from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var alertVariants = cva2("rounded-md border p-4", {
  variants: {
    variant: {
      info: "bg-info-container border-info text-on-info-container",
      success: "bg-success-container border-success text-on-success-container",
      warning: "bg-warning-container border-warning text-on-warning-container",
      danger: "bg-error-container border-error text-on-error-container"
    }
  },
  defaultVariants: {
    variant: "info"
  }
});
var Alert = forwardRef2(
  ({ variant, title, dismissible, children, className, ...props }, ref) => {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return /* @__PURE__ */ jsx2(
      "div",
      {
        ref,
        role: "alert",
        className: cn(alertVariants({ variant }), className),
        ...props,
        children: /* @__PURE__ */ jsxs2("div", { className: "flex", children: [
          /* @__PURE__ */ jsxs2("div", { className: "flex-1", children: [
            title && /* @__PURE__ */ jsx2("h4", { className: "mb-1 text-sm font-semibold", children: title }),
            /* @__PURE__ */ jsx2("div", { className: "text-sm", children })
          ] }),
          dismissible && /* @__PURE__ */ jsx2(
            "button",
            {
              onClick: () => setVisible(false),
              className: "ml-4 text-current opacity-50 hover:opacity-100",
              children: "\xD7"
            }
          )
        ] })
      }
    );
  }
);
Alert.displayName = "Alert";

// src/components/Badge.tsx
import { forwardRef as forwardRef3 } from "react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var badgeVariants = cva3(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-surface-container-high text-on-surface-variant",
        success: "bg-success-container text-on-success-container",
        warning: "bg-warning-container text-on-warning-container",
        danger: "bg-error-container text-on-error-container",
        info: "bg-info-container text-on-info-container"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Badge = forwardRef3(
  ({ variant, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      "span",
      {
        ref,
        className: cn(badgeVariants({ variant }), className),
        ...props,
        children
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/Chip.tsx
import { forwardRef as forwardRef4 } from "react";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var chipVariants = cva4(
  "inline-flex items-center px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-default",
  {
    variants: {
      variant: {
        filled: "bg-secondary-container text-on-secondary-container hover:bg-primary-fixed-dim",
        tonal: "bg-surface-container text-on-surface-variant hover:bg-surface-container-high",
        outline: "border border-outline-variant text-on-surface-variant hover:bg-surface-container-low"
      },
      active: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      { variant: "filled", active: true, className: "bg-primary text-on-primary shadow-md" },
      { variant: "tonal", active: true, className: "bg-primary-fixed text-on-primary-fixed-variant font-semibold" },
      { variant: "outline", active: true, className: "border-primary text-primary font-semibold" }
    ],
    defaultVariants: {
      variant: "filled",
      active: false
    }
  }
);
var Chip = forwardRef4(
  ({ variant, active, onClick, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      "span",
      {
        ref,
        role: onClick ? "button" : void 0,
        tabIndex: onClick ? 0 : void 0,
        onClick,
        className: cn(
          chipVariants({ variant, active }),
          onClick && "cursor-pointer",
          className
        ),
        ...props,
        children
      }
    );
  }
);
Chip.displayName = "Chip";

// src/components/Container.tsx
import { forwardRef as forwardRef5 } from "react";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx5 } from "react/jsx-runtime";
var containerVariants = cva5("mx-auto px-6", {
  variants: {
    size: {
      default: "max-w-7xl",
      narrow: "max-w-4xl"
    }
  },
  defaultVariants: {
    size: "default"
  }
});
var Container = forwardRef5(
  ({ size, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx5(
      "div",
      {
        ref,
        className: cn(containerVariants({ size }), className),
        ...props,
        children
      }
    );
  }
);
Container.displayName = "Container";

// src/components/Divider.tsx
import { forwardRef as forwardRef6 } from "react";
import { cva as cva6 } from "class-variance-authority";
import { jsx as jsx6 } from "react/jsx-runtime";
var dividerVariants = cva6("bg-outline-variant/15", {
  variants: {
    orientation: {
      horizontal: "w-full h-px",
      vertical: "h-full w-px"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
var Divider = forwardRef6(
  ({ orientation, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx6(
      "div",
      {
        ref,
        role: "separator",
        "aria-orientation": orientation ?? "horizontal",
        className: cn(dividerVariants({ orientation }), className),
        ...props
      }
    );
  }
);
Divider.displayName = "Divider";

// src/components/HeroBadge.tsx
import { forwardRef as forwardRef7 } from "react";
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx7 } from "react/jsx-runtime";
var heroBadgeVariants = cva7(
  "inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-secondary-container text-on-secondary-container",
        primary: "bg-primary-container text-on-primary-container",
        tertiary: "bg-tertiary-container text-on-tertiary-container"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var HeroBadge = forwardRef7(
  ({ variant, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx7(
      "span",
      {
        ref,
        className: cn(heroBadgeVariants({ variant }), className),
        ...props,
        children
      }
    );
  }
);
HeroBadge.displayName = "HeroBadge";

// src/components/IconButton.tsx
import { forwardRef as forwardRef8 } from "react";
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx8 } from "react/jsx-runtime";
var iconButtonVariants = cva8(
  "flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-high active:scale-90 transition-all duration-200",
  {
    variants: {
      size: {
        sm: "min-h-[36px] min-w-[36px]",
        md: "min-h-[44px] min-w-[44px]",
        lg: "min-h-[52px] min-w-[52px]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var IconButton = forwardRef8(
  ({ size, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx8(
      "button",
      {
        ref,
        className: cn(iconButtonVariants({ size }), className),
        ...props,
        children
      }
    );
  }
);
IconButton.displayName = "IconButton";

// src/components/Input.tsx
import { forwardRef as forwardRef9 } from "react";
import { cva as cva9 } from "class-variance-authority";
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
var inputVariants = cva9(
  "w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        default: "border-outline-variant focus:ring-primary",
        error: "border-error focus:ring-error"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Input = forwardRef9(
  ({ label, error, variant, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    const resolvedVariant = error ? "error" : variant;
    return /* @__PURE__ */ jsxs3("div", { children: [
      label && /* @__PURE__ */ jsx9(
        "label",
        {
          htmlFor: inputId,
          className: "mb-1 block text-sm font-medium text-on-surface-variant",
          children: label
        }
      ),
      /* @__PURE__ */ jsx9(
        "input",
        {
          ref,
          id: inputId,
          className: cn(inputVariants({ variant: resolvedVariant }), className),
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx9("p", { className: "mt-1 text-sm text-error", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/components/Modal.tsx
import { forwardRef as forwardRef10, useEffect, useRef, useImperativeHandle } from "react";
import { cva as cva10 } from "class-variance-authority";
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var modalVariants = cva10(
  "fixed inset-0 m-auto rounded-lg border-none bg-surface-container-lowest p-0 shadow-xl backdrop:bg-black/50",
  {
    variants: {
      size: {
        sm: "w-full max-w-sm",
        md: "w-full max-w-lg",
        lg: "w-full max-w-2xl",
        full: "w-full max-w-[calc(100vw-2rem)]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Modal = forwardRef10(
  ({ open, onClose, title, size, className, children, ...props }, ref) => {
    const dialogRef = useRef(null);
    useImperativeHandle(ref, () => dialogRef.current);
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
      if (open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }, [open]);
    return /* @__PURE__ */ jsx10(
      "dialog",
      {
        ref: dialogRef,
        onClose,
        className: cn(modalVariants({ size }), className),
        ...props,
        children: /* @__PURE__ */ jsxs4("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxs4("div", { className: "mb-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx10("h2", { className: "text-lg font-semibold text-on-surface", children: title }),
            /* @__PURE__ */ jsx10(
              "button",
              {
                onClick: onClose,
                className: "text-outline hover:text-on-surface-variant",
                children: "\xD7"
              }
            )
          ] }),
          children
        ] })
      }
    );
  }
);
Modal.displayName = "Modal";

// src/components/ProgressBar.tsx
import { forwardRef as forwardRef11 } from "react";
import { cva as cva11 } from "class-variance-authority";
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var progressBarVariants = cva11("h-full rounded-full transition-all duration-300", {
  variants: {
    variant: {
      primary: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-error"
    },
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
var trackSizeMap = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3"
};
var ProgressBar = forwardRef11(
  ({ value, max = 100, label, variant, size, className, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, value / max * 100));
    const trackSize = trackSizeMap[size ?? "md"];
    return /* @__PURE__ */ jsxs5("div", { ref, className, ...props, children: [
      label && /* @__PURE__ */ jsx11("div", { className: "mb-1 text-sm text-on-surface-variant", children: label }),
      /* @__PURE__ */ jsx11(
        "div",
        {
          className: cn(
            "w-full overflow-hidden rounded-full bg-surface-container-high",
            trackSize
          ),
          children: /* @__PURE__ */ jsx11(
            "div",
            {
              className: cn(progressBarVariants({ variant, size })),
              style: { width: `${percentage}%` }
            }
          )
        }
      )
    ] });
  }
);
ProgressBar.displayName = "ProgressBar";

// src/components/Radio.tsx
import { forwardRef as forwardRef12 } from "react";
import { cva as cva12 } from "class-variance-authority";
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var radioGroupVariants = cva12("", {
  variants: {
    orientation: {
      horizontal: "flex gap-4",
      vertical: "flex flex-col gap-2"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
var RadioGroup = forwardRef12(
  ({ name, label, options, value, onChange, orientation, disabled, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs6("fieldset", { ref, disabled, className, ...props, children: [
      label && /* @__PURE__ */ jsx12("legend", { className: "mb-2 text-sm font-medium text-on-surface-variant", children: label }),
      /* @__PURE__ */ jsx12("div", { className: cn(radioGroupVariants({ orientation })), children: options.map((opt) => /* @__PURE__ */ jsxs6("label", { className: "flex cursor-pointer items-center gap-2", children: [
        /* @__PURE__ */ jsx12(
          "input",
          {
            type: "radio",
            name,
            value: opt.value,
            checked: value === opt.value,
            onChange: () => onChange(opt.value),
            className: "h-4 w-4 text-primary focus:ring-primary"
          }
        ),
        /* @__PURE__ */ jsx12("span", { className: "text-sm text-on-surface-variant", children: opt.label }),
        opt.description && /* @__PURE__ */ jsxs6("span", { className: "text-xs text-outline", children: [
          "(",
          opt.description,
          ")"
        ] })
      ] }, opt.value)) })
    ] });
  }
);
RadioGroup.displayName = "RadioGroup";

// src/components/Select.tsx
import { forwardRef as forwardRef13 } from "react";
import { cva as cva13 } from "class-variance-authority";
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var selectVariants = cva13(
  "w-full rounded-md border border-outline-variant px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Select = forwardRef13(
  ({ label, options, size, className, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ jsxs7("div", { children: [
      label && /* @__PURE__ */ jsx13(
        "label",
        {
          htmlFor: selectId,
          className: "mb-1 block text-sm font-medium text-on-surface-variant",
          children: label
        }
      ),
      /* @__PURE__ */ jsx13(
        "select",
        {
          ref,
          id: selectId,
          className: cn(selectVariants({ size }), className),
          ...props,
          children: options.map((opt) => /* @__PURE__ */ jsx13("option", { value: opt.value, children: opt.label }, opt.value))
        }
      )
    ] });
  }
);
Select.displayName = "Select";

// src/components/SidebarCard.tsx
import { forwardRef as forwardRef14 } from "react";
import { cva as cva14 } from "class-variance-authority";
import { jsxs as jsxs8 } from "react/jsx-runtime";
var sidebarCardVariants = cva14("rounded-xl", {
  variants: {
    variant: {
      default: "bg-surface-container-lowest p-6",
      elevated: "bg-surface-container-lowest p-6 shadow-md"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var SidebarCard = forwardRef14(
  ({ title, icon, variant, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs8(
      "div",
      {
        ref,
        className: cn(sidebarCardVariants({ variant }), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs8("h4", { className: "font-headline text-lg font-bold text-on-surface mb-6 flex items-center gap-2", children: [
            icon,
            title
          ] }),
          children
        ]
      }
    );
  }
);
SidebarCard.displayName = "SidebarCard";

// src/components/Switch.tsx
import { forwardRef as forwardRef15 } from "react";
import { cva as cva15 } from "class-variance-authority";
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
var switchVariants = cva15(
  "relative inline-flex shrink-0 rounded-full transition-colors",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-[52px]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var thumbSizeMap = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6"
};
var thumbTranslateMap = {
  sm: { on: "translate-x-4", off: "translate-x-0.5" },
  md: { on: "translate-x-5.5", off: "translate-x-0.5" },
  lg: { on: "translate-x-6", off: "translate-x-0.5" }
};
var Switch = forwardRef15(
  ({ label, checked, onChange, size, disabled, className, ...props }, ref) => {
    const resolvedSize = size ?? "md";
    const thumbSize = thumbSizeMap[resolvedSize];
    const thumbTranslate = checked ? thumbTranslateMap[resolvedSize].on : thumbTranslateMap[resolvedSize].off;
    return /* @__PURE__ */ jsxs9(
      "label",
      {
        ref,
        className: cn("flex cursor-pointer items-center gap-3", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx14(
            "button",
            {
              type: "button",
              role: "switch",
              "aria-checked": checked,
              disabled,
              onClick: () => onChange(!checked),
              className: cn(
                switchVariants({ size }),
                checked ? "bg-primary" : "bg-surface-container-highest",
                disabled && "cursor-not-allowed opacity-50"
              ),
              children: /* @__PURE__ */ jsx14(
                "span",
                {
                  className: cn(
                    "inline-block translate-y-0.5 rounded-full bg-surface-container-lowest shadow transition-transform",
                    thumbSize,
                    thumbTranslate
                  )
                }
              )
            }
          ),
          label && /* @__PURE__ */ jsx14("span", { className: "text-sm text-on-surface-variant", children: label })
        ]
      }
    );
  }
);
Switch.displayName = "Switch";

// src/components/Toast.tsx
import { forwardRef as forwardRef16, useEffect as useEffect2, useState as useState2 } from "react";
import { cva as cva16 } from "class-variance-authority";
import { jsx as jsx15 } from "react/jsx-runtime";
var toastVariants = cva16(
  "fixed right-4 top-4 z-50 rounded-md px-4 py-3 text-sm shadow-lg transition-all duration-300",
  {
    variants: {
      variant: {
        success: "bg-success text-on-success",
        danger: "bg-error text-on-error",
        info: "bg-primary text-on-primary"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
);
var Toast = forwardRef16(
  ({ variant, message, duration = 3e3, onClose, className, ...props }, ref) => {
    const [visible, setVisible] = useState2(true);
    useEffect2(() => {
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300);
      }, duration);
      return () => clearTimeout(timer);
    }, [duration, onClose]);
    return /* @__PURE__ */ jsx15(
      "div",
      {
        ref,
        className: cn(
          toastVariants({ variant }),
          visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
          className
        ),
        ...props,
        children: message
      }
    );
  }
);
Toast.displayName = "Toast";

// src/components/Table/index.ts
var Table_exports = {};
__export(Table_exports, {
  Body: () => TableBody,
  Cell: () => TableCell,
  Head: () => TableHead,
  HeaderCell: () => TableHeaderCell,
  Root: () => TableRoot,
  Row: () => TableRow,
  tableCellVariants: () => tableCellVariants,
  tableHeaderCellVariants: () => tableHeaderCellVariants,
  tableRootVariants: () => tableRootVariants,
  tableRowVariants: () => tableRowVariants
});

// src/components/Table/TableRoot.tsx
import { forwardRef as forwardRef17 } from "react";
import { cva as cva17 } from "class-variance-authority";
import { jsx as jsx16 } from "react/jsx-runtime";
var tableRootVariants = cva17("w-full text-sm", {
  variants: {
    density: {
      default: "",
      compact: "[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2",
      comfortable: "[&_th]:px-5 [&_th]:py-4 [&_td]:px-5 [&_td]:py-4"
    }
  },
  defaultVariants: {
    density: "default"
  }
});
var TableRoot = forwardRef17(
  ({ density, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx16("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx16(
      "table",
      {
        ref,
        className: cn(tableRootVariants({ density }), className),
        ...props,
        children
      }
    ) });
  }
);
TableRoot.displayName = "Table.Root";

// src/components/Table/TableHead.tsx
import { forwardRef as forwardRef18 } from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var TableHead = forwardRef18(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx17(
      "thead",
      {
        ref,
        className: cn("border-b border-outline-variant bg-surface-container-low", className),
        ...props,
        children
      }
    );
  }
);
TableHead.displayName = "Table.Head";

// src/components/Table/TableBody.tsx
import { forwardRef as forwardRef19 } from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var TableBody = forwardRef19(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx18(
      "tbody",
      {
        ref,
        className: cn("divide-y divide-outline-variant", className),
        ...props,
        children
      }
    );
  }
);
TableBody.displayName = "Table.Body";

// src/components/Table/TableRow.tsx
import { forwardRef as forwardRef20 } from "react";
import { cva as cva18 } from "class-variance-authority";
import { jsx as jsx19 } from "react/jsx-runtime";
var tableRowVariants = cva18("", {
  variants: {
    hoverable: {
      true: "hover:bg-surface-container-low",
      false: ""
    },
    selected: {
      true: "bg-primary-fixed/10",
      false: ""
    }
  },
  defaultVariants: {
    hoverable: true,
    selected: false
  }
});
var TableRow = forwardRef20(
  ({ hoverable, selected, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx19(
      "tr",
      {
        ref,
        className: cn(tableRowVariants({ hoverable, selected }), className),
        ...props,
        children
      }
    );
  }
);
TableRow.displayName = "Table.Row";

// src/components/Table/TableHeaderCell.tsx
import { forwardRef as forwardRef21 } from "react";
import { cva as cva19 } from "class-variance-authority";
import { jsx as jsx20 } from "react/jsx-runtime";
var tableHeaderCellVariants = cva19(
  "px-4 py-3 text-xs font-medium uppercase tracking-wider text-outline",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right"
      }
    },
    defaultVariants: {
      align: "left"
    }
  }
);
var TableHeaderCell = forwardRef21(
  ({ align, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx20(
      "th",
      {
        ref,
        className: cn(tableHeaderCellVariants({ align }), className),
        ...props,
        children
      }
    );
  }
);
TableHeaderCell.displayName = "Table.HeaderCell";

// src/components/Table/TableCell.tsx
import { forwardRef as forwardRef22 } from "react";
import { cva as cva20 } from "class-variance-authority";
import { jsx as jsx21 } from "react/jsx-runtime";
var tableCellVariants = cva20("px-4 py-3 text-on-surface-variant", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    align: "left"
  }
});
var TableCell = forwardRef22(
  ({ align, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx21(
      "td",
      {
        ref,
        className: cn(tableCellVariants({ align }), className),
        ...props,
        children
      }
    );
  }
);
TableCell.displayName = "Table.Cell";

// src/components/Card/index.ts
var Card_exports = {};
__export(Card_exports, {
  Body: () => CardBody,
  Footer: () => CardFooter,
  Header: () => CardHeader,
  Root: () => CardRoot,
  Title: () => CardTitle,
  cardRootVariants: () => cardRootVariants,
  cardTitleVariants: () => cardTitleVariants
});

// src/components/Card/CardRoot.tsx
import { forwardRef as forwardRef23 } from "react";
import { cva as cva21 } from "class-variance-authority";
import { jsx as jsx22 } from "react/jsx-runtime";
var cardRootVariants = cva21(
  "rounded-lg border border-outline-variant shadow-sm",
  {
    variants: {
      variant: {
        filled: "bg-surface-container-lowest",
        elevated: "bg-surface-container-lowest shadow-md",
        outlined: "bg-transparent shadow-none"
      },
      padding: {
        true: "p-6",
        false: ""
      }
    },
    defaultVariants: {
      variant: "filled",
      padding: true
    }
  }
);
var CardRoot = forwardRef23(
  ({ variant, padding, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx22(
      "div",
      {
        ref,
        className: cn(cardRootVariants({ variant, padding }), className),
        ...props,
        children
      }
    );
  }
);
CardRoot.displayName = "Card.Root";

// src/components/Card/CardHeader.tsx
import { forwardRef as forwardRef24 } from "react";
import { jsx as jsx23 } from "react/jsx-runtime";
var CardHeader = forwardRef24(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx23("div", { ref, className: cn("mb-4", className), ...props, children });
  }
);
CardHeader.displayName = "Card.Header";

// src/components/Card/CardTitle.tsx
import { forwardRef as forwardRef25 } from "react";
import { cva as cva22 } from "class-variance-authority";
import { jsx as jsx24 } from "react/jsx-runtime";
var cardTitleVariants = cva22("font-semibold text-on-surface", {
  variants: {
    size: {
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var CardTitle = forwardRef25(
  ({ size, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx24("h3", { ref, className: cn(cardTitleVariants({ size }), className), ...props, children });
  }
);
CardTitle.displayName = "Card.Title";

// src/components/Card/CardBody.tsx
import { forwardRef as forwardRef26 } from "react";
import { jsx as jsx25 } from "react/jsx-runtime";
var CardBody = forwardRef26(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx25("div", { ref, className: cn("text-on-surface-variant", className), ...props, children });
  }
);
CardBody.displayName = "Card.Body";

// src/components/Card/CardFooter.tsx
import { forwardRef as forwardRef27 } from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
var CardFooter = forwardRef27(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx26("div", { ref, className: cn("mt-4 flex items-center gap-2", className), ...props, children });
  }
);
CardFooter.displayName = "Card.Footer";
export {
  Alert,
  Badge,
  Button,
  Card_exports as Card,
  Chip,
  Container,
  Divider,
  HeroBadge,
  IconButton,
  Input,
  Modal,
  ProgressBar,
  RadioGroup,
  Select,
  SidebarCard,
  Switch,
  Table_exports as Table,
  Toast,
  alertVariants,
  badgeVariants,
  buttonVariants,
  chipVariants,
  cn,
  containerVariants,
  dividerVariants,
  heroBadgeVariants,
  iconButtonVariants,
  inputVariants,
  modalVariants,
  progressBarVariants,
  radioGroupVariants,
  selectVariants,
  sidebarCardVariants,
  switchVariants,
  toastVariants
};
//# sourceMappingURL=index.js.map