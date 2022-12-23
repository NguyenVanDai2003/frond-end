import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from "./utils/refreshToken";
import axios from "axios";


const clientId = "608991345524-glasiqpeoi0p1p9mkleu8voe32gs1fch.apps.googleusercontent.com";


function Login() {
    const instance = axios.create({ baseURL: "http://localhost:2002" });
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! current user: ", res);
        const user = {
            name: res.profileObj.name,
            email: res.profileObj.email
        }

        console.log("infor", { user })
        //save data
        let user_acc = localStorage.getItem('google_acc');

        let user_acc_json
        if (user_acc != null) {
             user_acc_json= JSON.parse(user_acc)
        } else {
            localStorage.setItem('google_acc',JSON.stringify(user) )
        }
        
        instance.post(`user/check_login?email=${user.email}`)
      
        .then(res => {
            const acc = res.data;
            console.log("acc",{ acc })
            if (acc.email==null) {
                instance.post(`user?name=${user.name}&email=${user.email}`)
                .then(res => {
                    const persons = res.data;
                    console.log({ persons })
                })
                .catch(error => console.log(error));
            }
        })
        .catch(error => console.log(error));
       

        refreshTokenSetup(res)
    }


    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return (
        <div id=" signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;




