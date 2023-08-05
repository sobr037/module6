import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && latinName) {
      const newCat = { name, latinName, image };
      onAddCat(newCat);
      setName('');
      setLatinName('');
      setImage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="latinName">Latin Name:</label>
        <input
          type="text"
          id="latinName"
          value={latinName}
          onChange={(e) => setLatinName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;