import { useLocation } from "react-router-dom";

export default function UserViewService() {
  let location = useLocation();
  let status = location.state.status;

  return (
    <div>
      <p>{status}</p>
    </div>
  );
}
