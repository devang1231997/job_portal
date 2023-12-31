import { Link } from "react-router-dom";

function Pagelock() {
    return (
        <>
            <div className="centerlogin" style={{height: "100vh"}}>
                <div className="authincation h-100">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-md-6">
                                <div className="authincation-content">
                                    <div className="row no-gutters">
                                        <div className="col-xl-12">
                                            <div className="auth-form">
                                                <div className="text-center mb-3">
                                                    <Link to="/">
                                                        <img src="/images/logo-full.png" alt="" />
                                                    </Link>
                                                </div>
                                                <h4 className="text-center mb-4 text-white">Account Locked</h4>
                                                <form action="https://jobie.dexignzone.com/laravel/demo/index">
                                                    <div className="form-group">
                                                        <label className="text-white"><strong>Password</strong></label>
                                                        <input type="password" className="form-control" value="Password"></input>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" className="btn bg-white text-primary btn-block">Unlock</button>
                                                    </div>
                                                </form>
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
export default Pagelock;


