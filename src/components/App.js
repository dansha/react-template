import React, { Component } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div >
        <TopNav />
        <div className="main" >
          {this.props.children}
        </div>
        <Footer />
        <script src="../../public/vendor/jquery/jquery.min.js"></script>
        <script src="../../public/vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
        <script src="../../public/js/jqBootstrapValidation.js"></script>
        <script src="../../public/js/contact_me.js"></script>
        <script src="../../public/js/agency.js"></script>
      </div>
    );
  }
}

export default App;
