import { useState } from "react"

export default function UserServicesComponent(props){
    let {city} = props;

    let [serviceNames, setServiceName] = useState(['Pony ride', 'Horseback riding']);
    let [serviceDescriptions, setServiceDescription] = useState(['Pony ride in racecourse', 'Horseback riding on the beach']);
    let [serviceImages, setServiceImage] = useState("");

    return(
        <div>
            <ul>
                {serviceNames.map((name, index) => (
                    <div key={index} style={{border: '1px solid black', margin: '10px'}}>
                        <h3>{name}</h3>
                        <p>{serviceDescriptions[index]}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}