import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        // console.log(data)
        signIn(data.Email, data.password)
            .then(result => {

                if (result.user) {
                    toast.success('Login Successfully', {
                        autoClose: 5000,
                    });
                    navigate(location?.state || '/')
                }
            })
            .catch(() => {
                toast.error('This account does not matched. Please Register First')
            })
    }



    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(location?.state || '/')
                }
            })
    }
    return (
        <div className="mt-3">

            <div className="container mx-auto  w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-200 ">
                <h1 className="text-2xl font-bold text-center">Please Login Here</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                        <input type="email" required name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600"
                            {...register("Email")}
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <div className="relative ">
                            <input type="text" required name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600"
                                {...register("password")}
                            />
                            {/* <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span> */}
                        </div>

                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-slate-400">Log In</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={() => handleSocialLogin(googleLogin)} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>


                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do not have an account? <br />
                    <Link to='/register'><button className="btn mt-2">Sign Up</button></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;