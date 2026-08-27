"use client"

import * as React from "react"
import { Toast as ToastPrimitive } from "@base-ui/react/toast"

import { cn } from "@/lib/utils"
import { XIcon, CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

/**
 * The shadcn Base UI toast, restyled to this system the way `dialog.tsx` is.
 *
 * The stacking mechanics — the transform, scale and swipe custom properties —
 * are the primitive's and are kept verbatim. What changed is everything the
 * system has an opinion about: a slip of paper white held by a hairline ring
 * instead of a shadowed card (nothing here is flat-at-rest by accident), the
 * near-square radius the dialog uses, body copy rather than shadcn's `text-sm`
 * defaults, and controls drawn in the site's own icon-action idiom rather than
 * `components/ui/button.tsx`, which does not reflect this system.
 */

const toast = ToastPrimitive.createToastManager()

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider {...props} />
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
  return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />
}

/** Held to the page gutter — 24px, opening to 40px from `lg` — so a toast
 *  lines up with the content it is speaking about rather than the screen. */
function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        "pointer-events-none fixed inset-x-6 bottom-6 z-50 mx-auto w-auto max-w-sm outline-none sm:right-6 sm:left-auto sm:mx-0 sm:w-full lg:right-10 lg:bottom-10",
        className
      )}
      {...props}
    />
  )
}

function Toast({ className, ...props }: ToastPrimitive.Root.Props) {
  return (
    <ToastPrimitive.Root
      data-slot="toast"
      className={cn(
        "group/toast pointer-events-auto absolute right-0 bottom-0 z-[calc(1000-var(--toast-index))] w-full origin-bottom rounded-xl bg-popover text-popover-foreground ring-1 ring-foreground/10 will-change-transform outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-2",
        "[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]",
        "h-(--height) [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] [transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms]",
        "after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
        "data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]",
        "data-limited:opacity-0 data-starting-style:[transform:translateY(150%)]",
        "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)]",
        "data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
        "data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        "data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
        "data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        className
      )}
      {...props}
    />
  )
}

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
  return (
    <ToastPrimitive.Content
      data-slot="toast-content"
      className={cn(
        "flex h-full items-start gap-3 overflow-hidden p-4 transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn("text-[0.9375rem] leading-snug font-medium", className)}
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: ToastPrimitive.Description.Props) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn(
        "text-[0.8125rem] leading-relaxed text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/** The system's text control, not shadcn's outline button. */
function ToastAction({
  className,
  render = <button type="button" />,
  ...props
}: ToastPrimitive.Action.Props) {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      render={render}
      className={cn(
        "shrink-0 text-[0.6875rem] font-medium tracking-[0.16em] uppercase transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-4",
        className
      )}
      {...props}
    />
  )
}

/** The 40px icon action the navigation bar uses, at the toast's smaller step. */
function ToastClose({
  className,
  children,
  render = <button type="button" />,
  ...props
}: ToastPrimitive.Close.Props) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      aria-label="Fechar o aviso"
      render={render}
      className={cn(
        "relative -mt-1 -mr-1 flex size-8 shrink-0 items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-oak-deep focus-visible:outline-2 focus-visible:outline-offset-2 [&_svg]:size-4",
        className
      )}
      {...props}
    >
      {children ?? (
        <XIcon aria-hidden="true" strokeWidth={1.5} />
      )}
    </ToastPrimitive.Close>
  )
}

/** Sage is the factual register, so every status but the failing one sits in
 *  it. Only an error reaches for `destructive`. */
function ToastIcon({ type }: { type: string | undefined }) {
  let icon: React.ReactNode = null

  if (type === "success") {
    icon = (
      <CircleCheckIcon aria-hidden="true" strokeWidth={1.5} />
    )
  }

  if (type === "info") {
    icon = (
      <InfoIcon aria-hidden="true" strokeWidth={1.5} />
    )
  }

  if (type === "warning") {
    icon = (
      <TriangleAlertIcon aria-hidden="true" strokeWidth={1.5} />
    )
  }

  if (type === "error") {
    icon = (
      <OctagonXIcon className="text-destructive" aria-hidden="true" strokeWidth={1.5} />
    )
  }

  if (type === "loading") {
    icon = (
      <Loader2Icon className="animate-spin" aria-hidden="true" strokeWidth={1.5} />
    )
  }

  if (!icon) {
    return null
  }

  return (
    <span
      data-slot="toast-icon"
      className="mt-0.5 shrink-0 text-sage [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
    >
      {icon}
    </span>
  )
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager()

  return toasts.map((toastItem) => (
    <Toast key={toastItem.id} toast={toastItem}>
      <ToastContent>
        <ToastIcon type={toastItem.type} />
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <ToastTitle />
          <ToastDescription />
        </div>
        <ToastAction />
        <ToastClose />
      </ToastContent>
    </Toast>
  ))
}

function Toaster({
  children,
  toastManager = toast,
  ...props
}: ToastPrimitive.Provider.Props) {
  return (
    <ToastProvider toastManager={toastManager} {...props}>
      {children}
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}

const createToastManager = ToastPrimitive.createToastManager
const useToastManager = ToastPrimitive.useToastManager

export {
  Toaster,
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  toast,
  useToastManager,
}
