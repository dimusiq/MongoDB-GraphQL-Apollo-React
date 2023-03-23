import React, { useState } from 'react';

const Auth = () => {
  const [emailInput, setEmailtInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModelHandler = () => {
    setIsLogin((prev) => !prev);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) => setEmailtInput(e.target.value)}
          value={emailInput}
        ></input>
      </form>
    </div>
  );
};

export default Auth;
