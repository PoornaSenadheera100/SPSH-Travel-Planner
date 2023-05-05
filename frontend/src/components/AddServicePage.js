import ElAdd from "./ElAdd";
export default function AddServicePage() {
  if (sessionStorage.getItem("sTravPlaVresVorp") === null) {
    window.location.replace("/");
  }

  return (
    <div>
      <ElAdd />
    </div>
  );
}
