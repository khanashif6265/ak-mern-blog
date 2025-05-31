// import React from 'react';
// import { Button } from './ui/button';
// import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '@/helpers/firebase';
// import { RouteIndex } from '@/helpers/RouteName';
// import { showToast } from '@/helpers/showToast';
// import { getEvn } from '@/helpers/getEnv';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUser } from '@/redux/user/user.slice';

// const GoogleLogin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       // Sign in with Google
//       const googleResponse = await signInWithPopup(auth, provider);
//       const user = googleResponse.user;

//       // Prepare request body
//       const bodyData = {
//         name: user.displayName,
//         email: user.email,
//         avatar: user.photoURL
//       };

//       // Send to backend for JWT & database storage
//       const response = await fetch(`${getEvn('VITE_API_BASE_URL')}/auth/google-login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include', // for cookies
//         body: JSON.stringify(bodyData)
//       });

//       const data = await response.json();

//       // Handle error response
//       if (!response.ok) {
//         return showToast('error', data.message);
//       }

//       // Save user in redux
//       dispatch(setUser(data.user));
//       showToast('success', data.message);

//       // Redirect to homepage
//       navigate(RouteIndex);

//     } catch (error) {
//       showToast('error', error.message || 'Something went wrong');
//     }
//   };

//   return (
//     <Button variant="outline" className="w-full" onClick={handleLogin}>
//       <FcGoogle className="mr-2" />
//       Continue With Google
//     </Button>
//   );
// };

// export default GoogleLogin;

import React from 'react'
import { Button } from './ui/button'
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/helpers/firebase';
import { RouteIndex } from '@/helpers/RouteName';
import { showToast } from '@/helpers/showToast';
import { getEvn } from '@/helpers/getEnv';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/user/user.slice';

const GoogleLogin = () => {
    const dispath = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async () => {
        try {
            const googleResponse = await signInWithPopup(auth, provider)
            const user = googleResponse.user
            const bodyData = {
                name: user.displayName,
                email: user.email,
                avatar: user.photoURL
            }
            const response = await fetch(`${getEvn('VITE_API_BASE_URL')}/auth/google-login`, {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(bodyData)
            })
            const data = await response.json()
            if (!response.ok) {
                return showToast('error', data.message)
            }
            dispath(setUser(data.user))
            navigate(RouteIndex)
            showToast('success', data.message)
        } catch (error) {
            showToast('error', error.message)
        }
    }
    return (
        <Button variant="outline" className="w-full" onClick={handleLogin} >
            <FcGoogle />
            Continue With Google
        </Button>
    )
}

export default GoogleLogin