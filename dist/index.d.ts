import { ClassValue } from 'clsx';
import * as react from 'react';
import { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, ReactNode, ThHTMLAttributes, TdHTMLAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

declare function cn(...inputs: ClassValue[]): string;

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "danger" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    loading?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const alertVariants: (props?: ({
    variant?: "danger" | "info" | "success" | "warning" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    title?: string;
    dismissible?: boolean;
}
declare const Alert: react.ForwardRefExoticComponent<AlertProps & react.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: ({
    variant?: "danger" | "info" | "success" | "warning" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

declare const chipVariants: (props?: ({
    variant?: "outline" | "filled" | "tonal" | null | undefined;
    active?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ChipProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof chipVariants> {
}
declare const Chip: react.ForwardRefExoticComponent<ChipProps & react.RefAttributes<HTMLSpanElement>>;

declare const containerVariants: (props?: ({
    size?: "default" | "narrow" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ContainerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
}
declare const Container: react.ForwardRefExoticComponent<ContainerProps & react.RefAttributes<HTMLDivElement>>;

declare const dividerVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface DividerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
}
declare const Divider: react.ForwardRefExoticComponent<DividerProps & react.RefAttributes<HTMLDivElement>>;

declare const heroBadgeVariants: (props?: ({
    variant?: "primary" | "default" | "tertiary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface HeroBadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof heroBadgeVariants> {
}
declare const HeroBadge: react.ForwardRefExoticComponent<HeroBadgeProps & react.RefAttributes<HTMLSpanElement>>;

declare const iconButtonVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    'aria-label': string;
}
declare const IconButton: react.ForwardRefExoticComponent<IconButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const inputVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    label?: string;
    error?: string;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

declare const modalVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ModalProps extends Omit<HTMLAttributes<HTMLDialogElement>, 'title'>, VariantProps<typeof modalVariants> {
    open: boolean;
    onClose: () => void;
    title: string;
}
declare const Modal: react.ForwardRefExoticComponent<ModalProps & react.RefAttributes<HTMLDialogElement>>;

declare const progressBarVariants: (props?: ({
    variant?: "primary" | "danger" | "success" | "warning" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ProgressBarProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressBarVariants> {
    value: number;
    max?: number;
    label?: string;
}
declare const ProgressBar: react.ForwardRefExoticComponent<ProgressBarProps & react.RefAttributes<HTMLDivElement>>;

declare const radioGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface RadioOption {
    value: string;
    label: string;
    description?: string;
}
interface RadioGroupProps extends Omit<HTMLAttributes<HTMLFieldSetElement>, 'onChange'>, VariantProps<typeof radioGroupVariants> {
    name: string;
    label?: string;
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}
declare const RadioGroup: react.ForwardRefExoticComponent<RadioGroupProps & react.RefAttributes<HTMLFieldSetElement>>;

declare const selectVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>, VariantProps<typeof selectVariants> {
    label?: string;
    options: {
        value: string;
        label: string;
    }[];
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

declare const sidebarCardVariants: (props?: ({
    variant?: "default" | "elevated" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SidebarCardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarCardVariants> {
    title: string;
    icon?: ReactNode;
}
declare const SidebarCard: react.ForwardRefExoticComponent<SidebarCardProps & react.RefAttributes<HTMLDivElement>>;

declare const switchVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SwitchProps extends Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'>, VariantProps<typeof switchVariants> {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLLabelElement>>;

declare const toastVariants: (props?: ({
    variant?: "danger" | "info" | "success" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClose'>, VariantProps<typeof toastVariants> {
    message: string;
    duration?: number;
    onClose: () => void;
}
declare const Toast: react.ForwardRefExoticComponent<ToastProps & react.RefAttributes<HTMLDivElement>>;

declare const tableRootVariants: (props?: ({
    density?: "default" | "compact" | "comfortable" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TableRootProps extends HTMLAttributes<HTMLTableElement>, VariantProps<typeof tableRootVariants> {
}
declare const TableRoot: react.ForwardRefExoticComponent<TableRootProps & react.RefAttributes<HTMLTableElement>>;

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
}
declare const TableHead: react.ForwardRefExoticComponent<TableHeadProps & react.RefAttributes<HTMLTableSectionElement>>;

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
}
declare const TableBody: react.ForwardRefExoticComponent<TableBodyProps & react.RefAttributes<HTMLTableSectionElement>>;

declare const tableRowVariants: (props?: ({
    hoverable?: boolean | null | undefined;
    selected?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TableRowProps extends HTMLAttributes<HTMLTableRowElement>, VariantProps<typeof tableRowVariants> {
}
declare const TableRow: react.ForwardRefExoticComponent<TableRowProps & react.RefAttributes<HTMLTableRowElement>>;

declare const tableHeaderCellVariants: (props?: ({
    align?: "left" | "center" | "right" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TableHeaderCellProps extends Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'>, VariantProps<typeof tableHeaderCellVariants> {
}
declare const TableHeaderCell: react.ForwardRefExoticComponent<TableHeaderCellProps & react.RefAttributes<HTMLTableCellElement>>;

declare const tableCellVariants: (props?: ({
    align?: "left" | "center" | "right" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TableCellProps extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'>, VariantProps<typeof tableCellVariants> {
}
declare const TableCell: react.ForwardRefExoticComponent<TableCellProps & react.RefAttributes<HTMLTableCellElement>>;

type index$1_TableBodyProps = TableBodyProps;
type index$1_TableCellProps = TableCellProps;
type index$1_TableHeadProps = TableHeadProps;
type index$1_TableHeaderCellProps = TableHeaderCellProps;
type index$1_TableRootProps = TableRootProps;
type index$1_TableRowProps = TableRowProps;
declare const index$1_tableCellVariants: typeof tableCellVariants;
declare const index$1_tableHeaderCellVariants: typeof tableHeaderCellVariants;
declare const index$1_tableRootVariants: typeof tableRootVariants;
declare const index$1_tableRowVariants: typeof tableRowVariants;
declare namespace index$1 {
  export { TableBody as Body, TableCell as Cell, TableHead as Head, TableHeaderCell as HeaderCell, TableRoot as Root, TableRow as Row, type index$1_TableBodyProps as TableBodyProps, type index$1_TableCellProps as TableCellProps, type index$1_TableHeadProps as TableHeadProps, type index$1_TableHeaderCellProps as TableHeaderCellProps, type index$1_TableRootProps as TableRootProps, type index$1_TableRowProps as TableRowProps, index$1_tableCellVariants as tableCellVariants, index$1_tableHeaderCellVariants as tableHeaderCellVariants, index$1_tableRootVariants as tableRootVariants, index$1_tableRowVariants as tableRowVariants };
}

declare const cardRootVariants: (props?: ({
    variant?: "filled" | "elevated" | "outlined" | null | undefined;
    padding?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardRootProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardRootVariants> {
}
declare const CardRoot: react.ForwardRefExoticComponent<CardRootProps & react.RefAttributes<HTMLDivElement>>;

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
}
declare const CardHeader: react.ForwardRefExoticComponent<CardHeaderProps & react.RefAttributes<HTMLDivElement>>;

declare const cardTitleVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof cardTitleVariants> {
}
declare const CardTitle: react.ForwardRefExoticComponent<CardTitleProps & react.RefAttributes<HTMLHeadingElement>>;

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
}
declare const CardBody: react.ForwardRefExoticComponent<CardBodyProps & react.RefAttributes<HTMLDivElement>>;

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
}
declare const CardFooter: react.ForwardRefExoticComponent<CardFooterProps & react.RefAttributes<HTMLDivElement>>;

type index_CardBodyProps = CardBodyProps;
type index_CardFooterProps = CardFooterProps;
type index_CardHeaderProps = CardHeaderProps;
type index_CardRootProps = CardRootProps;
type index_CardTitleProps = CardTitleProps;
declare const index_cardRootVariants: typeof cardRootVariants;
declare const index_cardTitleVariants: typeof cardTitleVariants;
declare namespace index {
  export { CardBody as Body, type index_CardBodyProps as CardBodyProps, type index_CardFooterProps as CardFooterProps, type index_CardHeaderProps as CardHeaderProps, type index_CardRootProps as CardRootProps, type index_CardTitleProps as CardTitleProps, CardFooter as Footer, CardHeader as Header, CardRoot as Root, CardTitle as Title, index_cardRootVariants as cardRootVariants, index_cardTitleVariants as cardTitleVariants };
}

export { Alert, type AlertProps, Badge, type BadgeProps, Button, type ButtonProps, index as Card, Chip, type ChipProps, Container, type ContainerProps, Divider, type DividerProps, HeroBadge, type HeroBadgeProps, IconButton, type IconButtonProps, Input, type InputProps, Modal, type ModalProps, ProgressBar, type ProgressBarProps, RadioGroup, type RadioGroupProps, Select, type SelectProps, SidebarCard, type SidebarCardProps, Switch, type SwitchProps, index$1 as Table, Toast, type ToastProps, alertVariants, badgeVariants, buttonVariants, chipVariants, cn, containerVariants, dividerVariants, heroBadgeVariants, iconButtonVariants, inputVariants, modalVariants, progressBarVariants, radioGroupVariants, selectVariants, sidebarCardVariants, switchVariants, toastVariants };
