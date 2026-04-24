import { useEffect, useRef, type ReactNode, type RefObject } from 'react';

const FOCUSABLE_SELECTORS = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    'details > summary',
].join(', ');

interface FocusTrapProps {
    children: ReactNode;
    onEscape: () => void;
    triggerRef?: RefObject<HTMLElement | null>;
}

export function FocusTrap({ children, onEscape, triggerRef }: FocusTrapProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const getFocusable = () =>
            Array.from(
                container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
            ).filter((el) => !el.closest('[aria-hidden="true"]'));

        const firstFocusable = getFocusable()[0];
        firstFocusable?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            const focusable = getFocusable();
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.key === 'Escape') {
                event.preventDefault();
                onEscape();
                triggerRef?.current?.focus();
                return;
            }

            if (event.key !== 'Tab' || focusable.length === 0) {
                return;
            }

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
            }

            if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            triggerRef?.current?.focus();
        };
    }, [onEscape, triggerRef]);

    return <div ref={containerRef}>{children}</div>;
}