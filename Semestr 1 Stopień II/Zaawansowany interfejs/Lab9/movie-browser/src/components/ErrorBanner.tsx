interface ErrorBannerProps {
    message: string;
    onRetry: () => void;
}

export function ErrorBanner({ message, onRetry }: ErrorBannerProps) {
    return (
        <div className="error-banner">
            <div>
                <strong>Wystąpił błąd</strong>
                <p>{message}</p>
            </div>

            <button onClick={onRetry}>Spróbuj ponownie</button>
        </div>
    );
}