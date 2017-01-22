import React from 'react';

const Services = (props) => {
    return (
        <section id="system">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">How We Do it</h2>
                        <h3 className="section-subheading text-muted"><p>After years we found a system that works for us</p><p>Let it work for you too</p></h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-binoculars fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Transparancy</h4>
                        <p className="text-muted">We use web based systems , open for the client<br/>Our Clients get full visibility immediately</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-balance-scale fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">One Point of truth</h4>
                        <p className="text-muted">All Requeirments are gathered in one system<br/>project documents or a user story</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-tasks fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Sprints</h4>
                        <p className="text-muted">The project is divided to small sprints so we can begin working in uncertainty<br/>Gives client more visibility regarding progress</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-check-circle-o fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Built for change</h4>
                        <p className="text-muted">Life is dynamic, so are we<br/>Each module is fully test harnessed</p>
                    </div>
                    <div className="col-md-6">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-database fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Task based source control</h4>
                        <p className="text-muted">All code is stored in accessible source control system<br/>tasks are integrated with source control system</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;