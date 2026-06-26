import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [featureKey, setFeatureKey] = useState("");

  const [features, setFeatures] = useState([]);

  const getFeatures = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await api.get("/feature-flags", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFeatures(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeatures();
  }, []);

  const createFeature = async () => {
    if (!featureKey.trim()) {
      alert("Please enter a feature key");
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      await api.post(
        "/feature-flags",
        {
          featureKey,
          enabled: false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Feature Created Successfully");

      setFeatureKey("");

      getFeatures();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create feature");
    }
  };

  const toggleFeature = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("adminToken");

      await api.put(
        `/feature-flags/${id}`,
        {
          enabled: !currentStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      getFeatures();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFeature = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");

      await api.delete(`/feature-flags/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Feature Deleted Successfully");

      getFeatures();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Feature Flag Dashboard</h1>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="feature-form">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Feature Key"
            value={featureKey}
            onChange={(e) => setFeatureKey(e.target.value)}
          />

          <button className="primary-btn" onClick={createFeature}>
            Create Feature
          </button>
        </div>

        <div className="feature-list">
          {features.length === 0 ? (
            <p>No features available.</p>
          ) : (
            features.map((feature) => (
              <div key={feature._id} className="feature-card">
                <div className="feature-header">
                  <div>
                    <div className="feature-name">{feature.featureKey}</div>

                    <div
                      className={`feature-status ${
                        feature.enabled ? "enabled" : "disabled"
                      }`}
                    >
                      {feature.enabled ? "Enabled ✅" : "Disabled ❌"}
                    </div>
                  </div>

                  <div className="feature-actions">
                    <button
                      className={feature.enabled ? "disable-btn" : "enable-btn"}
                      onClick={() =>
                        toggleFeature(feature._id, feature.enabled)
                      }
                    >
                      {feature.enabled ? "Disable" : "Enable"}
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteFeature(feature._id)}
                    >
                      Delete
                    </button>
                  </div>
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
