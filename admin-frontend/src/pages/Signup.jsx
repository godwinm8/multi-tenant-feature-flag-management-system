import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !organizationId) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/signup", {
        name,
        email,
        password,
        organizationId,
      });

      console.log(response.data);

      alert("Signup Successful");

      setName("");
      setEmail("");
      setPassword("");
      setOrganizationId("");

      window.location.href = "/login";
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1>Organization Admin Signup</h1>

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <input
              className="input-field"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              className="input-field"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              className="input-field"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              className="input-field"
              type="text"
              placeholder="Enter Organization ID"
              value={organizationId}
              onChange={(e) => setOrganizationId(e.target.value)}
            />
          </div>

          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? "Signing Up..." : "Signup"}
          </button>

          <div className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
