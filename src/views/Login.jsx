import React from 'react'
import './login.css'
function Login() {
    return (
        <div className='login'>
            <div className="logo"> <img src="assets/img/logo.png" alt="logo" /> <strong>ME</strong>LON </div>
            <div className="box">
                <div className="content">
                    <form className="form-vertical login-form" action="index.html" method="post">
                        <h3 className="form-title">Sign In to your Account</h3>
                        <div className="alert fade in alert-danger" style={{ display: 'none' }}> <i className="icon-remove close" data-dismiss="alert" /> Enter any username and password. </div>
                        <div className="form-group">
                            <div className="input-icon"> <i className="icon-user" /> <input type="text" name="username" className="form-control" placeholder="Username" autofocus="autofocus" data-rule-required="true" data-msg-required="Please enter your username." /> </div>
                        </div>
                        <div className="form-group">
                            <div className="input-icon"> <i className="icon-lock" /> <input type="password" name="password" className="form-control" placeholder="Password" data-rule-required="true" data-msg-required="Please enter your password." /> </div>
                        </div>
                        <div className="form-actions"> <label className="checkbox pull-left"><input type="checkbox" className="uniform" name="remember" /> Remember me</label> <button type="submit" className="submit btn btn-primary pull-right"> Sign In <i className="icon-angle-right" /> </button>
                        </div>
                    </form>
                    <form className="form-vertical register-form" action="index.html" method="post" style={{ display: 'none' }}>
                        <h3 className="form-title">Sign Up for Free</h3>
                        <div className="form-group">
                            <div className="input-icon"> <i className="icon-user" /> <input type="text" name="username" className="form-control" placeholder="Username" autofocus="autofocus" data-rule-required="true" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-icon"> <i className="icon-lock" /> <input type="password" name="password" className="form-control" placeholder="Password" id="register_password" data-rule-required="true" /> </div>
                        </div>
                        <div className="form-group">
                            <div className="input-icon"> <i className="icon-ok" /> <input type="password" name="password_confirm" className="form-control" placeholder="Confirm Password" data-rule-required="true" data-rule-equalto="#register_password" /> </div>
                        </div>
                        <div className="form-group">
                            <div className="input-icon"> <i className="icon-envelope" /> <input type="text" name="Email" className="form-control" placeholder="Email address" data-rule-required="true" data-rule-email="true" /> </div>
                        </div>
                        <div className="form-group spacing-top"> <label className="checkbox"><input type="checkbox" className="uniform" name="remember" data-rule-required="true" data-msg-required="Please accept ToS first." /> I
                            agree to the <a href="javascript:void(0);">Terms of Service</a></label> <label htmlFor="remember" className="has-error help-block" generated="true" style={{ display: 'none' }} /> </div>
                        <div className="form-actions"> <button type="button" className="back btn btn-default pull-left"> <i className="icon-angle-left" /> Back </button> <button type="submit" className="submit btn btn-primary pull-right"> Sign Up <i className="icon-angle-right" /> </button>
                        </div>
                    </form>
                </div>
                <div className="inner-box">
                    <div className="content"> <i className="icon-remove close hide-default" /> <a href="#" className="forgot-password-link">Forgot Password?</a>
                        <form className="form-vertical forgot-password-form hide-default" action="login.html" method="post">
                            <div className="form-group">
                                <div className="input-icon"> <i className="icon-envelope" /> <input type="text" name="email" className="form-control" placeholder="Enter email address" data-rule-required="true" data-rule-email="true" data-msg-required="Please enter your email." /> </div>
                            </div> <button type="submit" className="submit btn btn-default btn-block"> Reset your Password </button>
                        </form>
                        <div className="forgot-password-done hide-default"> <i className="icon-ok success-icon" /> <span>Great. We
                            have sent you an email.</span> </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
