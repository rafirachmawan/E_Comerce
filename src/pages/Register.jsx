import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password) {
      setMessage("Username dan password harus diisi");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Registrasi berhasil! Silakan login.");
        navigate("/login");
      } else {
        setMessage(data.message || "Registrasi gagal");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error); // Log error
      setMessage("Terjadi kesalahan: " + error.message);
    }
  };

  return (
    <div>
      <h1>Registrasi</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Daftar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
