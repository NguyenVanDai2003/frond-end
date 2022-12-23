import React from "react";
import '../admin/login.scss';


class Login extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="login">
                        <h2>LOGIN ADMIN</h2>
                        <hr></hr>
                        <div class="form-group">
                            <label for="">Your Email <span className="sta">*</span></label>
                            <div className="row">
                                <div className="col-md-2 f-left">
                                <i class="fa fa-envelope"></i>
                                </div>
                                <div className="col-md-10 f-right">
                                <input type="email" name="email" id="" class="form-control ip" placeholder="Input your Email..." />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="">Your Password <span className="sta">*</span></label>
                            <div className="row">
                                <div className="col-md-2 f-left">
                                <i class="fa fa-unlock"></i>
                                </div>
                                <div className="col-md-10 f-right">
                                <input type="password" name="password" id="" class="form-control ip" placeholder="Input your Password..." />
                                </div>
                            </div>
                        </div>

                        <button>Login</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;