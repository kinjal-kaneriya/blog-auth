import { FaFacebookF, FaLinkedinIn, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", {
                name,
                email,
                password,
            });

            alert(res.data.message);
            setName("");
            setEmail("");
            setPassword("");
            navigate("/signin");
        }
        catch (err) {
            alert(err.response.data.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md text-center">

                {/* Title */}
                <h1 className="text-3xl font-bold mb-6" style={{ color: "#3AABA7" }}>
                    Create Account
                </h1>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mb-6">
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer">
                        <FaFacebookF className="text-black text-sm" />
                    </div>

                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer">
                        <FaGooglePlusG className="text-black text-md" />
                    </div>

                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full cursor-pointer">
                        <FaLinkedinIn className="text-black text-sm" />
                    </div>
                </div>

                {/* OR Text */}
                <p className="text-sm text-gray-400 mb-6">
                    or use your email for registration
                </p>

                {/* Inputs */}
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-100 px-4 py-3 mb-4 outline-none"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 px-4 py-3 mb-4 outline-none"
                />

                <div className="relative mb-6">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-100 px-4 py-3 pr-12 outline-none"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <p className="text-center text-gray-400 mt-6 text-sm">
                    Already have an account?{" "}
                    <Link
                        to="/signin"
                        className="text-[#3AABA7] font-semibold hover:underline"
                    >
                        Sign in
                    </Link>
                </p>

                {/* Button */}
                <button
                    onClick={handleSignup}
                    className="w-45 rounded-full py-3 text-white font-semibold mt-3 bg-[#3AABA7] cursor-pointer"
                >
                    SIGN UP
                </button>
            </div>
        </div>
    );
};

export default Signup;
