import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getEvn } from './getEnv';

const firebaseConfig = {
  apiKey: getEvn('VITE_FIREBASE_API'),
  authDomain: 'ak-mern-blog.firebaseapp.com',
  projectId: 'ak-mern-blog',
  storageBucket: 'ak-mern-blog.appspot.com',
  messagingSenderId: '322334945474',
  appId: '1:322334945474:web:0e613553afd8d1abbb4b5b'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Force user to select an account every time
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export { auth, provider };
