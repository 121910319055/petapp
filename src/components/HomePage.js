import React from 'react';
import AdoptionForm from './AdoptionForm';
import GiveAwayForm from './GiveAwayForm';
import AvailablePets from './AvailablePets';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdoptionForm: false,
      showGiveAwayForm: false,
      showAvailablePets: false
    };
  }

  toggleAdoptionForm = () => {
    this.setState({
      showAdoptionForm: !this.state.showAdoptionForm,
      showGiveAwayForm: false,
      showAvailablePets: false
    });
  };

  toggleGiveAwayForm = () => {
    this.setState({
      showGiveAwayForm: !this.state.showGiveAwayForm,
      showAdoptionForm: false,
      showAvailablePets: false
    });
  };

  toggleAvailablePets = () => {
    this.setState({
      showAvailablePets: !this.state.showAvailablePets,
      showAdoptionForm: false,
      showGiveAwayForm: false
    });
  };

  render() {
    return (
      <div>
        <header>
          {/* <h1>Mern Animal Shelter</h1> */}
        </header>
        <p>
          At Mern Animal Shelter, we strive to connect loving homes with pets in need. Whether you're looking to adopt a furry friend or give a pet a new loving home, you've come to the right place.
        </p>
        <main>
          <section>
            <h2>Adopt a Pet</h2>
            <button onClick={this.toggleAdoptionForm}>Adopt</button>
            <button onClick={this.toggleAvailablePets}>Show Available Pets</button>
          </section>
          <section>
            <h2>Give Away a Pet</h2>
            <button onClick={this.toggleGiveAwayForm}>Give Away</button>
          </section>
        </main>
        {this.state.showAdoptionForm && <AdoptionForm />}
        {this.state.showGiveAwayForm && <GiveAwayForm />}
        {this.state.showAvailablePets && <AvailablePets />}
        <footer>
          <p>&copy; 2024  Animal Shelter</p>
        </footer>
      </div>
    );
  }
}

export default HomePage;
