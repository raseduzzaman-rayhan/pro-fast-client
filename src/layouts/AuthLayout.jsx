import { Outlet } from "react-router";
import imgLogin from "../assets/authImage.png";
import ProfastLogo from "../pages/shared/ProfastLogo/ProfastLogo";

const AuthLayout = () => {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col font-sans overflow-hidden">

            {/* Main Split Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full">

                {/* Left Side: Logo & Authentication Form Area */}
                <div className="flex flex-col justify-between p-4 w-full max-w-[540px] mx-auto lg:mx-0 lg:max-w-none">

                    {/* Top Section: Custom Brand Logo */}
                    <div className="w-full flex justify-start items-center mb-8">
                        <ProfastLogo />
                    </div>

                    {/* Middle Section: Render Form dynamically via React Router's Outlet */}
                    <div className="flex-1 flex flex-col justify-center w-full max-w-[420px] mx-auto py-12 lg:py-0">
                        <Outlet />
                    </div>

                    {/* Empty footer space to maintain balanced vertical flexbox tracking */}
                    <div className="hidden lg:block h-8" />
                </div>

                {/* Right Side: Light Green Presentation Banner with Artwork */}
                <div className="hidden lg:flex bg-[#f4fbf3] items-center justify-center p-12 relative">
                    <div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
                        <img
                            src={imgLogin}
                            alt="Profast Delivery Illustration"
                            className="w-full h-full object-contain pointer-events-none drop-shadow-sm"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthLayout;