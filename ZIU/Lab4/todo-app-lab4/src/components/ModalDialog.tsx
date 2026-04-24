import { type ReactNode, type RefObject } from 'react';
import { FocusTrap } from './FocusTrap';
import './ModalDialog.css';

interface ModalDialogProps {
    isOpen: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
    triggerRef?: RefObject<HTMLElement | null>;
}

export function ModalDialog({
                                isOpen,
                                title,
                                children,
                                onClose,
                                triggerRef,
                            }: ModalDialogProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <FocusTrap onEscape={onClose} triggerRef={triggerRef}>
                <section
                    className="modal-content"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    onClick={(event) => event.stopPropagation()}
                >
                    <header className="modal-header">
                        <h2 id="modal-title">{title}</h2>

                        <button
                            type="button"
                            className="modal-close-button"
                            onClick={onClose}
                            aria-label="Zamknij okno"
                        >
                            ×
                        </button>
                    </header>

                    {children}
                </section>
            </FocusTrap>
        </div>
    );
}