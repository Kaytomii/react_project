import {Link, Outlet} from "react-router";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const Layout = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <header className="bg-gray-900 text-white p-4 flex justify-between">
                <nav className="flex gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
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
        </>
    );
};

export default Layout;
