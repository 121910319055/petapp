import React from 'react';

class AdoptForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petId: '',
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
    // Handle form submission here, e.g., submit the adoption request to the server
    console.log('Adoption form submitted:', this.state);
    // You can also add validation logic before submitting the form
  };

  render() {
    return (
      <div className="form-container">
        <h2>Adopt a Pet</h2>
        <div className="form-scroll">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="petId">Pet ID:</label>
              <input type="text" id="petId" name="petId" value={this.state.petId} onChange={this.handleChange} required />
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

export default AdoptForm;
