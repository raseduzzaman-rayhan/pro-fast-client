import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { FaUser } from 'react-icons/fa'; // Avatar icon-er jonno
import { HiArrowUp } from 'react-icons/hi'; // Green up-arrow-er jonno
import { Link } from 'react-router';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white font-sans p-6 sm:p-8 flex flex-col items-start">

            {/* Header section */}
            <h1 className="text-black text-[38px] font-black tracking-tight leading-none mb-2">
                Create an Account
            </h1>
            <p className="text-gray-800 text-[15px] font-normal mb-5">
                Register with Profast
            </p>

            {/* Profile Avatar Placeholder with Up Arrow using React Icons */}
            <div className="relative w-14 h-14 bg-[#f0f2f5] rounded-full flex items-center justify-center mb-6">
                <FaUser className="w-6 h-6 text-gray-400" />
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm flex items-center justify-center">
                    <HiArrowUp className="w-3 h-3 text-[#a3e635] stroke-[4]" />
                </div>
            </div>

            {/* Registration Form */}
            <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>

                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-[#1e293b] text-sm font-semibold mb-1.5">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: true })}
                        placeholder="Name"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-base text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                    {errors.name && <p className='text-red-500 text-xs mt-1'>Name is required</p>}
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-[#1e293b] text-sm font-semibold mb-1.5">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true })}
                        placeholder="Email"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-base text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                    {errors.email && <p className='text-red-500 text-xs mt-1'>Email is required</p>}
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="block text-[#1e293b] text-sm font-semibold mb-1.5">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', {
                            required: true,
                            minLength: 6
                        })}
                        placeholder="Password"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-base text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
                    />
                    {errors.password?.type === 'required' && <p className='text-red-500 text-xs mt-1'>Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500 text-xs mt-1'>Password must be at least 6 characters</p>}
                </div>

                {/* Register Submission Button */}
                <button
                    type="submit"
                    className="w-full bg-[#d0ec6c] hover:bg-[#c2e257] text-gray-900 font-bold py-3 px-4 rounded-lg text-[15px] transition-colors shadow-sm mt-2 cursor-pointer"
                >
                    Register
                </button>
            </form>

            {/* Login Link text */}
            <p className="w-full text-gray-500 text-[15px] font-normal text-left mt-4">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-[#a0cc44] hover:underline font-medium transition-colors"
                >
                    Login
                </Link>
            </p>

            {/* "Or" Separator */}
            <div className="w-full text-center text-gray-400 text-sm font-normal my-3">
                Or
            </div>

            {/* Google OAuth Button */}
            <button
                type="button"
                className="w-full bg-[#eef1f6] hover:bg-[#e2e7f0] text-gray-900 font-bold py-3 px-4 rounded-lg text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
                <FcGoogle className="text-xl shrink-0" />
                <span>Register with google</span>
            </button>
        </div>
    );
};

export default Register;