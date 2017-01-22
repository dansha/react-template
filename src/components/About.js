import React from 'react';

const Portfolio = (props) => {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">About</h2>
                        <h3 className="section-subheading text-muted">This is how we started</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="timeline">
                            <li>
                                <div className="timeline-image">
                                    <img className="img-circle img-responsive" src="img/about/1.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>...-2015</h4>
                                        <h4 className="subheading">Managed huge projects in one of israel biggest integrators</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted text-center">Managed huge projects in one of israel's top 5 system intgrators<br/>We identified the need for a solid proven devlopment methodolgy</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="img-circle img-responsive" src="img/about/2.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2015-2016</h4>
                                        <h4 className="subheading">A team is built</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">Working at a startup the team was built and shaped  </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-image">
                                    <img className="img-circle img-responsive" src="img/about/3.jpg" alt="" />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2016</h4>
                                        <h4 className="subheading">Transition to development team</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">As we found we like to work togather we formed dev experts so we can continue to do what we love</p>
                                    </div>
                                </div>
                            </li>
                           
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>Be Part
                      <br />Of Our
                      <br />Story!</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Portfolio;