import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [organizationId, setOrganizationId] = useState("");
  const [featureKey, setFeatureKey] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkFeature = async () => {
    if (!organizationId || !featureKey) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/feature-flags/check`,
        {
          organizationId,
          featureKey,
        },
      );

      setResult(response.data.enabled);
    } catch (error) {
      console.log(error);
      alert("Failed to check feature");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setOrganizationId("");
    setFeatureKey("");
    setResult(null);
  };

  return (
    <div className="app-container">
      <div className="checker-card">
        <h1 className="checker-title">Feature Flag Checker</h1>

        <p className="checker-subtitle">
          Check whether a feature is enabled or disabled for your organization.
        </p>

        <div className="form-group">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Organization ID"
            value={organizationId}
            onChange={(e) => setOrganizationId(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Feature Key"
            value={featureKey}
            onChange={(e) => setFeatureKey(e.target.value)}
          />
        </div>

        <button className="check-btn" onClick={checkFeature} disabled={loading}>
          {loading ? "Checking..." : "Check Feature"}
        </button>

        {loading && <p className="loading-text">Checking feature status...</p>}

        {result !== null && (
          <>
            <button
              className="check-btn"
              onClick={resetForm}
              style={{ marginTop: "15px" }}
            >
              Check Another Feature
            </button>
            <div
              className={`result-card ${
                result ? "result-enabled" : "result-disabled"
              }`}
            >
              {result ? "Feature is Enabled ✅" : "Feature is Disabled ❌"}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
