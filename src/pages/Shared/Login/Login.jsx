import Lottie from "lottie-react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form";
import loginAnimation from '../../../assets/lottieAnimation/login.json'


const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signIn } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: 'User logged in successfully.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
                reset();
            })
            .catch((error) => {
                console.error('error', error);
            })
    }

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        }
        else {
            setDisabled(true);
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row-reverse w-full px-10">
                <div className="w-1/2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center mb-4 heading-font">Log in!</h1>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* {email field} */}
                            <div className="form-control all-font">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            {/* {password field} */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
                                    })}
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                {errors.password && (
                                    <span className="text-red-600">
                                        Password: 6+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special.
                                    </span>
                                )}

                            </div>

                            {/* {Captcha Field} */}
                            <div className="form-control all-font">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn bg-[#DD6E8B] hover:bg-black text-white" type="submit" value="Log in" />
                            </div>
                            <p className='text-[#DD6E8B] font-medium text-xl text-center all-font'><small>New Here? <Link to={'/register'}>Create an account.</Link></small></p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>

                <div className="w-1/2">
                    <Lottie animationData={loginAnimation} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Login;