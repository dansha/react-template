import React from 'react';

const Services = (props) => {
    return (
        <section id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Services</h2>
                        <h3 className="section-subheading text-muted">This is what we <b>like</b> to do</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Front End development</h4>
                        <p className="text-muted">Web fron end development with REACT or Angular 2</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-server fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Back end devlopment</h4>
                        <p className="text-muted">Back end devlopment in node.js/.net<br/>MongoDb/Redis/mySql and more<br/>AWS/Azure or On-Premise</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Mobile</h4>
                        <p className="text-muted">Using React-Native we can develop iOs and/or Android</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;