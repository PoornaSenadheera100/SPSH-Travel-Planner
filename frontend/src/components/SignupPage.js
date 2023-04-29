import CreateForm from "./CreateForm";

export default function SignupPage() {
  const title = "Create New Account";

  return (
    <div className="container">
      <CreateForm title={title} />
    </div>
  );
}
