import React from 'react';

class GiveAwayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: '',
      petBreed: '',
      petAge: '',
      name: '',
      email: '',
      phoneNumber: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., submit the give away request to the server
    console.log('Give away form submitted:', this.state);
    // You can also add validation logic before submitting the form
  };

  render() {
    return (
      <div className="form-container">
        <h2>Give Away a Pet</h2>
        <div className="form-scroll">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="petName">Pet Name:</label>
              <input type="text" id="petName" name="petName" value={this.state.petName} onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="petBreed">Pet Breed:</label>
              <input type="text" id="petBreed" name="petBreed" value={this.state.petBreed} onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="petAge">Pet Age:</label>
              <input type="text" id="petAge" name="petAge" value={this.state.petAge} onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default GiveAwayForm;
