import { NavLink } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="w-full max-w-7xl mx-auto bg-white font-sans">
            {/* Main Header / Welcome Message */}
            <h1 className="text-[#0c121c] text-[40px] font-bold tracking-tight leading-none mb-1.5">
                Welcome Back
            </h1>
            <p className="text-gray-400 text-[14px] font-normal mb-8">
                Login with Profast
            </p>

            {/* Authentication Form */}
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

                {/* Email Input Group */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-xs font-semibold mb-2 tracking-wide"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        {...register('email')}
                        placeholder="Email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-[#0c121c] placeholder:text-gray-300 focus:outline-none focus:border-[#cbf35c] transition-colors"
                    />
                </div>

                {/* Password Input Group */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-xs font-semibold mb-2 tracking-wide"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        {...register('password', {
                            required: true,
                            minLength: 6
                        })}
                        placeholder="Password"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-[#0c121c] placeholder:text-gray-300 focus:outline-none focus:border-[#cbf35c] transition-colors"
                    />
                    {
                        errors.password?.type === 'required' && <p className='text-red-400'>Password is required</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-400'>Password must be 6 characters</p>
                    }
                </div>

                {/* Forget Password Trigger */}
                <div className="flex justify-start pt-1">
                    <button
                        type="button"
                        className="text-gray-400 hover:text-gray-600 text-sm font-normal hover:underline underline-offset-4 tracking-wide transition-colors cursor-pointer"
                    >
                        Forget Password?
                    </button>
                </div>

                {/* Login Submission Button */}
                <button
                    type="submit"
                    className="w-full bg-[#cbf35c] hover:bg-[#bce252] text-[#022325] font-bold py-3.5 px-4 rounded-lg text-[15px] transition-all shadow-sm active:scale-[0.99] cursor-pointer mt-2"
                >
                    Login
                </button>
            </form>

            {/* Registration Call-to-action */}
            <p className="text-gray-400 text-sm font-normal text-center mt-6 tracking-wide">
                Don't have any account?{" "}
                <NavLink
                    to="/register"
                    className="text-[#99ca3c] hover:underline hover:text-[#88b533] font-medium transition-colors"
                >
                    Register
                </NavLink>
            </p>

            {/* Intermediary Section Break ("Or") */}
            <div className="relative flex py-6 items-center">
                <div className="flex-grow border-t border-transparent" />
                <span className="flex-shrink mx-4 text-gray-400 text-xs font-light tracking-wider uppercase">
                    Or
                </span>
                <div className="flex-grow border-t border-transparent" />
            </div>

            {/* OAuth Provider: Google Login Section */}
            <button
                type="button"
                className="w-full bg-[#eef1f6] text-gray-700 font-medium py-3.5 px-4 rounded-lg text-[14px] flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] cursor-pointer hover:bg-[#99ca3c]"
            >
                <FcGoogle className="text-lg shrink-0" />
                <span className="tracking-wide">Login with google</span>
            </button>
        </div>
    );
};

export default Login;