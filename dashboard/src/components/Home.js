import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";


const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/dashboard-user", { withCredentials: true })
      .then((res) => {
        setUser(res.data.user); // or setUser(res.data)
      })
      .catch((err) => {
        console.error("Authentication failed:", err);
        navigate("http://localhost:3000/login"); // fallback route if not logged in
      });
  }, []);

  if (!user) return (
    <div>Loading...</div>
  );
  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;
