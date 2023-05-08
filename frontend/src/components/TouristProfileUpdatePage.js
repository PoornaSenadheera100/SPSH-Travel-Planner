import CreateForm from "./CreateForm";

export default function TouristProfileUpdatePage(){

     //Function to update the data
  function updateProfile(e) {
    e.preventDefault();

    const newTourist = {
      name,
      address,
      nic,
      phone,
      email,
      password,
    };
    axios
      .put(`http://localhost:8070/tourist/update/${email}`, newTourist)
      .then(() => {
        alert("Profile updated");
        window.location.replace("http://localhost:3000/tourist/");
      })
      .catch((err) => {
        alert("Update failure occured ! ");
      });
  }

    return(<div className="container">

        <CreateForm title='Update profile' getURL='http://localhost:8070/tourist/get/email'/>

    </div>)

}