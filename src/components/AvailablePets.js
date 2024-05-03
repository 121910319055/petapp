import React from 'react';

class AvailablePets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPet: null // Initially no pet is selected
    };
  }

  handleSelectPet = (pet) => {
    this.setState({ selectedPet: pet });
  };

  render() {
    const pets = [
      { name: 'Dog 1', breed: 'Labrador', age: 3, type: 'dog', imageUrl: 'dog1.jpeg' },
      { name: 'Dog 2', breed: 'Golden Retriever', age: 2, type: 'dog', imageUrl: 'dog2.jpeg' },
      { name: 'Dog 3', breed: 'German Shepherd', age: 4, type: 'dog', imageUrl: 'dog3.jpeg' },
      { name: 'Cat 1', breed: 'Persian', age: 1, type: 'cat', imageUrl: 'cat1.jpeg' },
      { name: 'Cat 2', breed: 'Siamese', age: 2, type: 'cat', imageUrl: 'cat2.jpeg' },
      { name: 'Cat 3', breed: 'Maine Coon', age: 3, type: 'cat', imageUrl: 'cat3.jpeg' }
    ];

    return (
      <div>
        <h2>Available Pets</h2>
        <div className="pet-images">
          {pets.map((pet, index) => (
            <div key={index} className="pet-card">
              <img className="pet-image" src={process.env.PUBLIC_URL + '/' + pet.imageUrl} alt={pet.name} />
              <h3>{pet.name}</h3>
              <p>{pet.breed} - Age: {pet.age}</p>
              <button onClick={() => this.handleSelectPet(pet)}>Select Pet</button>
            </div>
          ))}
        </div>
        {this.state.selectedPet && (
          <div>
            <h3>Selected Pet: {this.state.selectedPet.name}</h3>
            {/* Additional information about the selected pet can be displayed here */}
          </div>
        )}
      </div>
    );
  }
}

export default AvailablePets;
