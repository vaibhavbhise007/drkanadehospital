import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export const AlertDialogPortal = AlertDialogPrimitive.Portal;

export const AlertDialogOverlay = React.forwardRef(function AlertDialogOverlay(
    { className, ...props },
    ref
) {
    return (
        <AlertDialogPrimitive.Overlay
            className={cn(
                'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                className
            )}
            {...props}
            ref={ref}
        />
    );
});

export const AlertDialogContent = React.forwardRef(function AlertDialogContent(
    { className, ...props },
    ref
) {
    return (
        <AlertDialogPortal>
            <AlertDialogOverlay />
            <AlertDialogPrimitive.Content
                ref={ref}
                className={cn(
                    'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                    className
                )}
                {...props}
            />
        </AlertDialogPortal>
    );
});

export const AlertDialogHeader = function AlertDialogHeader({
    className,
    ...props
}) {
    return (
        <div
            className={cn(
                'flex flex-col space-y-2 text-center sm:text-left',
                className
            )}
            {...props}
        />
    );
};

export const AlertDialogFooter = function AlertDialogFooter({
    className,
    ...props
}) {
    return (
        <div
            className={cn(
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                className
            )}
            {...props}
        />
    );
};

export const AlertDialogTitle = React.forwardRef(function AlertDialogTitle(
    { className, ...props },
    ref
) {
    return (
        <AlertDialogPrimitive.Title
            ref={ref}
            className={cn('text-lg font-semibold', className)}
            {...props}
        />
    );
});

export const AlertDialogDescription = React.forwardRef(
    function AlertDialogDescription({ className, ...props }, ref) {
        return (
            <AlertDialogPrimitive.Description
                ref={ref}
                className={cn('text-sm text-muted-foreground', className)}
                {...props}
            />
        );
    }
);

export const AlertDialogAction = React.forwardRef(function AlertDialogAction(
    { className, ...props },
    ref
) {
    return (
        <AlertDialogPrimitive.Action
            ref={ref}
            className={cn(buttonVariants(), className)}
            {...props}
        />
    );
});

export const AlertDialogCancel = React.forwardRef(function AlertDialogCancel(
    { className, ...props },
    ref
) {
    return (
        <AlertDialogPrimitive.Cancel
            ref={ref}
            className={cn(
                buttonVariants({ variant: 'outline' }),
                'mt-2 sm:mt-0',
                className
            )}
            {...props}
        />
    );
});
