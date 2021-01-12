import React from "react";
import { login } from "../../services/auth";

interface prop {}

const LoginPage: React.FC<any> = (props) => {
  return (
    <div>
      <h1>Landing Page</h1>
      <button
        onClick={() => {
          login(() => {
            props.history.push('/layout1');
          });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
