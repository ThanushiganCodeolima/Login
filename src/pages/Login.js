import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="d-lg-flex half">
                <div className="bg order-1 order-md-2" style={{ backgroundImage: 'url("images/back.png")'}} />
                <div className="contents order-2 order-md-1">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7">
                                <div className="mb-4">
                                    <h3>Welcome Back👏</h3>
                                    <p className="mb-4">Today is a new day.It's your day.You shape it. Sign into start managing your projects.</p>
                                </div>
                                <form action="#" method="post">
                                    <div className="form-group first">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group last mb-3">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <div className="d-flex mb-5 align-items-center">
                                        <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                                            <input type="checkbox" defaultChecked="checked" />
                                            <div className="control__indicator" />
                                        </label>
                                        <span className="ml-auto"><a href="https://www.google.com/" className="forgot-pass">Forgot Password?</a></span>
                                    </div>
                                    <input type="button" defaultValue="Sign In" className="btn btn-block btn-primary su" />
                                    <span className="d-block text-center my-4 text-muted" id='li'>_______________Or_______________</span>
                                    <div className="social-login">

                                        <a href="https://www.google.com/" className="google btn d-flex justify-content-center align-items-center">
                                            <span className="icon-google mr-3" /> Login with  Google
                                        </a>
                                        <a href="https://www.google.com/search?q=fb+login&oq=f&gs_lcrp=EgZjaHJvbWUqDQgEEAAYgwEYsQMYgAQyBggAEEUYOTINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDINCAUQABiDARixAxiABDIGCAYQRRg9MgYIBxBFGDwyBggIEEUYPdIBCDI2MzBqMGozqAIAsAIA&sourceid=chrome&ie=UTF-8" className="facebook btn d-flex justify-content-center align-items-center">
                                            <span className="icon-facebook mr-3" /> Login with Facebook
                                        </a>
                                        
                                    </div>
                                    <h6>Don't you have an account?<a href="#" id='bl' >Sign Up</a>
                                    </h6>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login