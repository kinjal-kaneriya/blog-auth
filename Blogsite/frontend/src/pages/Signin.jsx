import axios from "axios";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signin", {
                email,
                password,
            });
            if(res.data.token) {
                alert(res.data.message);
                localStorage.setItem("token", res.data.token);
                setEmail("");
                setPassword("");
                navigate("/");
            }
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
                    Sign in to Mini Blog
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
                    or use your email account
                </p>

                {/* Email Input */}
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-gray-100 px-4 py-3 mb-4 outline-none"
                />

                {/* Password Input with Eye */}
                <div className="relative mb-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
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

                {/* Forgot Password */}
                <p className="text-sm text-gray-400 mb-6 cursor-pointer">
                    Forgot Your Password?
                </p>

                <p className="text-center text-gray-400 mt-6 text-sm">
                    Create a new account?{" "}
                    <Link
                        to="/signup"
                        className="text-[#3AABA7] font-semibold hover:underline"
                    >
                        Signup
                    </Link>
                </p>


                {/* Button */}
                <button
                    onClick={handleSignin}
                    className="w-45 py-3 rounded-full text-white font-semibold mt-3 bg-[#3AABA7] cursor-pointer"
                >
                    SIGN IN
                </button>

            </div>
        </div>
    );
};

export default Signin;
