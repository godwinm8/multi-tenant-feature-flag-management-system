import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [organizationName, setOrganizationName] = useState("");

  const [organizations, setOrganizations] = useState([]);

  const createOrganization = async () => {
    try {
      const response = await api.post("/organizations", {
        name: organizationName,
      });

      console.log(response.data);

      alert("Organization Created");

      setOrganizationName("");

      await getOrganizations();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const getOrganizations = async () => {
    try {
      const response = await api.get("/organizations");

      setOrganizations(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrganizations();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="page-container">
      <div className="card">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Super Admin Dashboard</h1>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>

        <h2>Create Organization</h2>

        <input
          className="input-field"
          type="text"
          placeholder="Enter organization name"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        />

        <button className="primary-btn" onClick={createOrganization}>
          Create Organization
        </button>

        <div className="organization-list">
          <h2>Organizations</h2>

          {organizations.length === 0 ? (
            <p>No organizations found.</p>
          ) : (
            organizations.map((organization) => (
              <div key={organization._id} className="organization-item">
                <div className="organization-name">{organization.name}</div>

                <div className="organization-id">
                  Organization ID:
                  <br />
                  {organization._id}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
