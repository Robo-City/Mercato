
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
    } else { {(password.length<8||!/\d/.test(password)||!/[!@#%^()-+\_=/[]{};':"\\|,.<>\/?]/.test(password))
      {
      setErrorMessage('Password must be at least 8 characters long and must contain letters, numbers and symbols')
      
    }
  }
  };

  return (
    <div style={{ backgroundColor: '#1e1e1e', color: '#8db600', textAlign: 'center', padding: '20px' }}>
      <h1><text>Sign Up For Mercanto</text></h1>
      <input 
placeholder="Email" 
value={email} 
onChange={(e) => setEmail(e.target.value)} 
/><br />
<input 
type="text" 
placeholder="Username" 
value={username} 
onChange={(e) => setUsername(e.target.value)} 
/><br />
<input 
type="password" 
placeholder="Password" 
value={password} 
onChange={(e) => setPassword(e.target.value)} 
/><br />
<input 
type="password" 
placeholder="Confirm Password" 
value={confirmPassword} 
onChange={(e) => setConfirmPassword(e.target.value)} 
/><br />
{errorMessage && <p><text>{errorMessage}</text></p>}
<button onClick={handleSignUp}><text>Sign Up</text></button>
</div>
);
  }

  };

export default SignUp;
