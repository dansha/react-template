import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <span className="copyright">Copyright © Your Website 2016</span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li><a href="#"><i className="fa fa-twitter" /></a>
                            </li>
                            <li><a href="#"><i className="fa fa-facebook" /></a>
                            </li>
                            <li><a href="#"><i className="fa fa-linkedin" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li><a href="#">Privacy Policy</a>
                            </li>
                            <li><a href="#">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;