// web: 787020276670-pcd7dqjtsvvt7e655lelkr2tmaa67b15.apps.googleusercontent.com
import { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginWithGoogle = () => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );
    return (
        <>
            <div>
                {profile ? (
                    <div>
                        <h3>User Logged in</h3>
                        <p>Email Address: {profile.email}</p>
                        <br />
                        <button onClick={logOut}>Log out</button>
                    </div>
                ) : (
                    <button onClick={() => login()}>Sign in with Google 🚀 </button>
                )}
            </div>
        </>
    )
};

export default LoginWithGoogle;