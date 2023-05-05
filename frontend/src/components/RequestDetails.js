import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function RequestDetails(props) {
  const history = useHistory();
  const { status } = props;

  const [cancelled, setCancelled] = useState(false);

  const handleCancel = () => {
    setCancelled(true);
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <h1 style={{ paddingBottom: "20px" }}>Request Details</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid black",
          margin: "10px",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        <h3>Request Details</h3>
        <h4
          style={{
            color:
              status === "Rejected"
                ? "red"
                : status === "Approved"
                ? "green"
                : "black",
          }}
        >
          Status: {status}
        </h4>
      </div>
      {!cancelled && (status === "Approved" || status === "Pending") && (
        <button
          className="btn btn-danger"
          onClick={handleCancel}
          style={{ marginTop: "20px" }}
        >
          Cancel Request
        </button>
      )}
      <button
        className="btn btn-secondary"
        onClick={handleBack}
        style={{ marginTop: "20px", marginLeft: "10px" }}
      >
        Back
      </button>
    </div>
  );
}
