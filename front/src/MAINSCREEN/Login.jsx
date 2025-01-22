// Login.js

import React, { useState } from 'react';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior

//         // Reset error message
//         setErrorMessage('');

//         // Simple validation
//         if (!email || !password) {
//             setErrorMessage('Both fields are required!');
//             return;
//         }

//         // Simulate login process (e.g., check against a database)
//         const validEmail = 'user@example.com';
//         const validPassword = 'password123';

//         if (email === validEmail && password === validPassword) {
//             // Successful login
//             alert('Login successful!');
//             // Redirect to another page or perform other actions here
//             window.location.href = '/home'; // Change this to your target route
//         } else {
//             // Login failed
//             setErrorMessage('Invalid email or password!');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//             {errorMessage && <div className="error">{errorMessage}</div>}
//         </div>
//     );
// };

// export default Login;

const Login=()=>{

    return (
        <>
        <div>
            Hello;
        </div>
        </>
    )
}
export default Login;