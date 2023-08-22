function Pagelogin() {
    return (
        <>
    <div className="authincation h-100">
        <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
        <div className="col-md-6">
            <div className="authincation-content">
                <div className="row no-gutters">
                    <div className="col-xl-12">
                        <div className="auth-form">
							<div className="text-center mb-3">
								<a href="index.js">
                                    {/* <img src="public/images/logo-full.png" alt=""> */}

                                </a>
							</div>
                            <h4 className="text-center mb-4 text-white">Sign in your account</h4>
                            <form action="https://jobie.dexignzone.com/laravel/demo/index">
                                <div className="form-group">
                                    <label className="mb-1 text-white"><strong>Email</strong></label>
                                    <input type="email" className="form-control" value="hello@example.com"></input>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1 text-white"><strong>Password</strong></label>
                                    <input type="password" className="form-control" value="Password"></input>
                                </div>
                                <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="form-group">
                                       <div className="custom-control custom-checkbox ms-1 text-white">
											<input type="checkbox" className="custom-control-input" id="basic_checkbox_1"></input>
											<label className="custom-control-label" for="basic_checkbox_1">Remember my preference</label>
										</div>
                                    </div>
                                    <div className="form-group">
                                        <a className="text-white" href="page-forgot-password.js">Forgot Password?</a>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn bg-white text-primary btn-block">Sign Me In</button>
                                </div>
                            </form>
                            <div className="new-account mt-3">
                                <p className="text-white">Don't have an account? <a className="text-white" href="page-register.js">Sign up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
    </>
)
}
export default Pagelogin;

    
