export default function AdminRequestApproval(props) {
  let requests = [1, 2, 3, 4];

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <h1 style={{ paddingBottom: "20px", textAlign: "center" }}>
        {props.title}
      </h1>
      {requests.map((request, index) => (
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
          <h3>Request {index + 1}</h3>
          <a
            href="/admin/managerequests/view/search/single"
            className="btn btn-secondary"
            style={{ float: "right" }}
          >
            View
          </a>
          <a
            href="/tourist/requests/view"
            className="btn btn-success"
            style={{ float: "right" }}
          >
            Approve
          </a>
          <a
            href="/tourist/requests/view"
            className="btn btn-danger"
            style={{ float: "right" }}
          >
            Reject
          </a>
        </div>
      ))}
    </div>
  );
}
