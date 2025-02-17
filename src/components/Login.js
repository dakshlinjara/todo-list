import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();



  async function handleSignIn() {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error("Login failed:", error.message);
      return;
    }
    navigate("/todo");  // Redirect to the To-Do List after login
  }

  async function handleSignUp() {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Sign up failed:", error.message);
      return;
    }
    navigate("/todo");  // Redirect to the To-Do List after sign up
  }

  // If the user is already logged in, don't show the login button
  if (isLoggedIn) {
    return null;
  }

  return (
    <div className="login-container">
      <h1>Welcome to To-Do List</h1>
      <div className="login-box">
        <h2>Login / Sign Up</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignIn}>Login</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
