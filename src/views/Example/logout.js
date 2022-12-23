import { GoogleLogout } from 'react-google-login';

const clientId = "608991345524-glasiqpeoi0p1p9mkleu8voe32gs1fch.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        console.log("Log out successfull!");
        localStorage.clear()
    }
    return (< div id="signOutButton" >
        <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
        />
    </div >
    )


}


export default Logout;
