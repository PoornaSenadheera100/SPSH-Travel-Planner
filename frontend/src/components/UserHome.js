import Button from 'react-bootstrap/Button';

export default function UserHome(){
    return(
        <div class="container">
            <div class="button-row">
                <button class="btn btn-dark" style={{marginBottom: '10px', width: '15%'}}>My Profile</button><br/>
                <button class="btn btn-dark" style={{marginBottom: '10px', width: '15%'}}>My Requests</button><br/>
            </div>
            <div class="form-group">
                <label>Enter Location</label><br/>
                <input type="text" id="location" placeholder="Eg: Nuwara Eliya"></input>
            </div>
        </div>
    )
}