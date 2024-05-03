import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="social-icons">
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
        </div>
        <h1> Animal Shelter</h1>
      </header>
    );
  }
}

export default Header;
