import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDatabase } from '@/contexts/DatabaseContext';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { db } = useDatabase();
  
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Store user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: email,
        createdAt: new Date(),
        userId: user.uid,
      });
      
      console.log('User created successfully');
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to create account');
    }
  };

  return (
    <form onSubmit={handleSignUp} className="space-y-4">
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 border rounded"
        required
      />
      <button 
        type="submit" 
        className="w-full bg-primary text-white p-2 rounded"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;