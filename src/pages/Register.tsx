import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const Register = () => {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");

    const URL = import.meta.env.VITE_PATH_TO_SERVER + "/api/v1/auth/register";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            setError("Passwords do not match");
            return;
        }

        const res = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.message || "Registration failed");
            return;
        }

        login(email, data.token);
    };

    return (
        <div className="mx-auto max-w-md p-6">
            <h1 className="text-3xl font-bold mb-6">Register</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border px-4 py-2 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border px-4 py-2 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Repeat Password"
                    className="w-full border px-4 py-2 rounded"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />

                {error && <p className="text-red-500">{error}</p>}

                <button className="w-full bg-blue-600 text-white py-2 rounded">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
