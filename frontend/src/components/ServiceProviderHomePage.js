import Button from "react-bootstrap/Button";

export default function ServiceProviderHomePage() {
  return (
    <div className="container">
      <a
        href="/"
        style={{ float: "right" }}
        onClick={() => {
          sessionStorage.removeItem("sTravPlaVresVorp");
        }}
      >
        <Button variant="danger">Signout</Button>{" "}
      </a>
    </div>
  );
}
