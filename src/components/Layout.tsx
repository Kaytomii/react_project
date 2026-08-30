import {Outlet} from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import AuthModal from "@/components/AuthModal";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";

const Layout = () => {
    const { user, logout } = useContext(AuthContext);

    const [openRegister, setOpenRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    return (
        <>
            <header className="bg-gray-900 text-white p-4 flex justify-between">
                <nav className="flex gap-4">
                    <button onClick={() => setOpenRegister(true)}>Register</button>
                    <button onClick={() => setOpenLogin(true)}>Login</button>
                </nav>

                <div>
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span>Welcome, {user}</span>
                            <button
                                onClick={logout}
                                className="bg-red-600 px-3 py-1 rounded"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <span>Not logged in</span>
                    )}
                </div>
            </header>

            <main className="p-6">
                <Outlet />
            </main>

            {/* Register Modal */}
            <AuthModal open={openRegister} close={() => setOpenRegister(false)}>
                <RegisterForm close={() => setOpenRegister(false)} />
            </AuthModal>

            {/* Login Modal */}
            <AuthModal open={openLogin} close={() => setOpenLogin(false)}>
                <LoginForm close={() => setOpenLogin(false)} />
            </AuthModal>
        </>
    );
};

export default Layout;
