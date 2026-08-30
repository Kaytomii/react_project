import { createPortal } from "react-dom";

const modalNode = document.getElementById("modal");

const AuthModal = ({ open, close, children }: {
    open: boolean;
    close: () => void;
    children: React.ReactNode;
}) => {
    if (!open) return null;

    return createPortal(
        <div>
            <div className="fixed inset-0 bg-black/50" onClick={close} />

            <div className="fixed left-1/2 top-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl">
                <button
                    className="absolute right-3 top-3 text-2xl"
                    onClick={close}
                >
                    &times;
                </button>

                {children}
            </div>
        </div>,
        modalNode!
    );
};

export default AuthModal;
