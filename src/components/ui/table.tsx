import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "~/lib/utils";

export const Root = forwardRef<
  ElementRef<"table">,
  ComponentPropsWithoutRef<"table">
>(({ children, className }, ref) => (
  <div className="relative w-full overflow-x-auto">
    <table
      ref={ref}
      className={cn(
        "w-full text-left text-sm text-gray-500 dark:text-gray-400",
        className,
      )}
    >
      {children}
    </table>
  </div>
));

Root.displayName = "TableRoot";

export const Head = forwardRef<
  ElementRef<"thead">,
  ComponentPropsWithoutRef<"thead">
>(({ children, className }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400",
      className,
    )}
  >
    {children}
  </thead>
));

Head.displayName = "TableHead";

export const Row = forwardRef<ElementRef<"tr">, ComponentPropsWithoutRef<"tr">>(
  ({ children, className }, ref) => (
    <tr ref={ref} className={cn(className)}>
      {children}
    </tr>
  ),
);

Row.displayName = "TableRow";

export const Column = forwardRef<
  ElementRef<"th">,
  ComponentPropsWithoutRef<"th">
>(({ children, className }, ref) => (
  <th ref={ref} className={cn("px-6 py-3", className)}>
    {children}
  </th>
));

Column.displayName = "TableColumn";

export const Body = forwardRef<
  ElementRef<"tbody">,
  ComponentPropsWithoutRef<"tbody">
>(({ children, className }, ref) => (
  <tbody ref={ref} className={cn(className)}>
    {children}
  </tbody>
));

Body.displayName = "TableBody";

export const Data = forwardRef<
  ElementRef<"td">,
  ComponentPropsWithoutRef<"td">
>(({ children, className }, ref) => (
  <td ref={ref} className={cn("px-6 py-4", className)}>
    {children}
  </td>
));

Data.displayName = "TableData";
