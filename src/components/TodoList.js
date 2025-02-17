import Header from "./header"
import Card from "./card"
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

import "./TodoList.css"

function TodoList() {
  const navigate = useNavigate();
   // Handle logout
   async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout failed:", error.message);
      return;
    }
    navigate("/login");  // Redirect to the login page after logout
  }

    return (
     <div class="page">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <Header />
      <Card />
      
     </div>
    );
  }
  
  export default TodoList;
  