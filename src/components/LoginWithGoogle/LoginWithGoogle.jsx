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

    const handleLogin = () => {
        login();
        verifyUser();
    };
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    const verifyUser = async () => {
        if (!user.access_token) return;
        try {
            const response = await fetch(
                "https://localhost:44388/test",
                {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${user.access_token}` },
                }
            );
            console.log(response);
        } catch (error) {
            // Add your own error handler here
        }
    }

    useEffect(
        () => {
            if (user) {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                }).then((res) => {
                    console.log(res.data);
                    console.log(user);
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
                    <button onClick={() => handleLogin}>Sign in with Google 🚀 </button>
                )}
            </div>
        </>
    )
};

export default LoginWithGoogle;