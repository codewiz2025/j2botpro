import React from 'react';

const NoEmailSignup = () => {
    const handleSignup = () => {
        // Logic for signup without email verification
        console.log('Signed up successfully without email verification!');
    };

    return (
        <div>
            <h1>Signup Without Email Verification</h1>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default NoEmailSignup;
