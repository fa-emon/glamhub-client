import { useContext } from 'react';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleWithGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);

                fetch("https://glamhub-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ name: user?.displayName, email: user?.email }),
                })
                    .then((response) => {
                        if (response.status === 409) {
                            console.log('User already exists');
                            // Handle the case where the user already exists, e.g., show a message to the user
                        } else {
                            return response.json();
                        }
                    })
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch((error) => {
                console.error('error', error);
            });
    }

    return (
        <div className='text-center'>
            <div className='mt-2'>
                <button className="btn btn-circle bg-[#DD6E8B] hover:bg-[#000000] text-white font-xl mr-2"><BsGoogle onClick={handleWithGoogleSignIn} className='text-base'></BsGoogle></button>

                {/* {These 2 are just demo} */}
                <button className="btn btn-circle bg-[#DD6E8B] hover:bg-[#000000] text-white font-xl me-2"><BsFacebook className='text-base'></BsFacebook></button>
                <button className="btn btn-circle bg-[#DD6E8B] hover:bg-[#000000] text-white font-xl"><BsGithub className='text-base'></BsGithub></button>
            </div>
        </div>
    );
};

export default SocialLogin;