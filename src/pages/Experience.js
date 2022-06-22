import React from "react";

function Experience() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Experience</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card border-primary  mb-5">
                                <div className="card-body bg-info">
                                    <h5 className="card-title fw-bold">Full Stack Developer <span className="h6">at Coding Gujju</span></h5>
                                    <p className="mb-0">APR 2020 - PRESENT</p>
                                    <small> I Do intership in Full Stack Developer in Coding Gujju.In This Time I Learn About HTML,CSS,REACTJS and JAVASCRIPT.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card border-primary mb-3">
                                <div className="card-body bg-info">
                                    <h5 className="card-title fw-bold">FrontEnd Developer <span className="h6">at Microsoft</span></h5>
                                    <p className="mb-0">APR 2019 - APR 2021</p>
                                    <small>I Do a Work in Microsoft As a FrontEnd Developer minimum 2 years.In this time gain more Coding Knowlege in Frontend Developer </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;