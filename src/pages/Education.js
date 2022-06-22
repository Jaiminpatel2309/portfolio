import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Education</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card border-primary  mb-5">
                                <div className="card-body bg-secondary ">
                                    <h5 className="card-title fw-bold">Master of Engineering <span className="h6">from Silver Oak University</span></h5>
                                    <p className="mb-0">APR 2020 - APR 2021</p>
                                    <small>I complete My Master of Engineering in Silver Oak University.in this Time I Learn About JAVA,PYTHON,C++ Languages.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card border-primary  mb-3">
                                <div className="card-body bg-secondary">
                                    <h5 className="card-title fw-bold">Master of Engineering <span className="h6">from Silver Oak University</span></h5>
                                    <p className="mb-0">APR 2020 - APR 2021</p>
                                    <small>I complete My Master of Engineering in Silver Oak University.in this Time I Learn About JAVA,PYTHON,C++ Languages</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;