import React from "react";
import avtar from "./../images/logo.png";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="container pt-5 d-flex flex-column align-items-center">
                <img src={avtar} width={200} alt="Jaimin Patel" />
                <h1>Jaimin Patel</h1>
                <h4>(Web Developer)</h4>
                <p className="text-center border-bottom pb-3">Hi I am Jaimin Patel and I am pursuing B.tech from Silver oak University in Ahemdabad. I am currently learning about Web Development and looking forward to become an expentional full stack Developer.</p>
                <p className="text-center">
                    <span className="d-mobile-block">Email: jaiminpatel.2309@gmail.com</span>
                    <span className="d-none d-web-contents"> | </span>
                    <span className="d-mobile-block">Phone: +91-7984629518</span>
                </p>
                <p className="text-center">Address: 1, Shivalay Park-2 ,Near Madhav School,Vastral ,Ahmedabad.</p>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body bg-light">
                                <h5 className="card-title fw-bold pb-3">Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "50%" }}>50%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "60%" }} >60%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">PYTHON</p>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped " role="progressbar" style={{ width: "70%" }}>70%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">REACTJS</p>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: "80%" }} >80%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body bg-light">
                                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                                <span class="badge bg-primary me-3 mb-3 p-2">Play Cricket</span>
                                <span class="badge bg-secondary me-3 mb-3 p-2">Travelling</span>
                                <span class="badge bg-success me-3 mb-3 p-2">Lisining Song</span>
                                <span class="badge bg-danger me-3 mb-3 p-2">Play Mobile Game</span>
                                <span class="badge bg-warning text-dark me-3 mb-3 p-2">Warning</span>
                                <span class="badge bg-info text-dark me-3 mb-3 p-2">Info</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;