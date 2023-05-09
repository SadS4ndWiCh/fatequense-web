import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cn } from "~/lib/utils";

import { Skeleton as UISkeleton } from "./ui/skeleton";

export const Root = forwardRef<
  ElementRef<"article">,
  ComponentPropsWithoutRef<"article">
>(({ children, className }, ref) => (
  <article
    ref={ref}
    className={cn("flex flex-col items-center gap-2", className)}
  >
    {children}
  </article>
));

Root.displayName = "DetailCardRoot";

export const Header = forwardRef<
  ElementRef<"header">,
  ComponentPropsWithoutRef<"header">
>(({ children, className }, ref) => (
  <header ref={ref} className={cn("flex gap-2", className)}>
    {children}
  </header>
));

Header.displayName = "DetailCardHeader";

export const HeaderIcon = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(({ children, className }, ref) => (
  <div ref={ref} className={cn("h-fit w-fit rounded-md p-4", className)}>
    {children}
  </div>
));

HeaderIcon.displayName = "DetailCardHeaderIcon";

export const HeaderContent = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(({ children, className }, ref) => (
  <div ref={ref} className={cn(className)}>
    {children}
  </div>
));

HeaderContent.displayName = "DetailCardHeaderContent";

export const Content = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(({ children, className }, ref) => (
  <div ref={ref} className={cn(className)}>
    {children}
  </div>
));

Content.displayName = "DetailCardContent";
