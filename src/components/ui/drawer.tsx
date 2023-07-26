'use client'

import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
} from 'react'

import { X } from 'lucide-react'
import { Drawer } from 'vaul'

import { cn } from '~/lib/utils'

export const DrawerRoot = Drawer.Root
export const DrawerTrigger = Drawer.Trigger
export const DrawerClose = Drawer.Close

type DrawerPortalProps = ComponentProps<typeof Drawer.Portal>

export const DrawerPortal = ({ className, ...props }: DrawerPortalProps) => (
  <Drawer.Portal className={cn(className)} {...props} />
)
DrawerPortal.displayName = Drawer.Portal.displayName

export const DrawerOverlay = forwardRef<
  ElementRef<typeof Drawer.Overlay>,
  ComponentPropsWithoutRef<typeof Drawer.Overlay>
>(({ className, ...props }, ref) => (
  <Drawer.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
))

DrawerOverlay.displayName = Drawer.Overlay.displayName

export const DrawerContent = forwardRef<
  ElementRef<typeof Drawer.Content>,
  ComponentPropsWithoutRef<typeof Drawer.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <Drawer.Content
      ref={ref}
      className={cn(
        'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        className,
      )}
      {...props}
    >
      {children}
      <DrawerClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DrawerClose>
    </Drawer.Content>
  </DrawerPortal>
))
DrawerContent.displayName = Drawer.Content.displayName
