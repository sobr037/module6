import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';
import './BigCats.css';

const initialCats = [
  { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
  { name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
  { name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
  { name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
  { name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow_leopard.jpg' },
  { name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
];

const BigCats = () => {
  {/* Manages the list. */}
  const [cats, setCats] = useState(initialCats);

  {/* New Cat function */}
  const handleAddCat = (newCat) => {
    setCats((prevCats) => [...prevCats, newCat]);
  };

  {/* Delete Cat function */}
  const handleDeleteCat = (deletedCat) => {
    setCats((prevCats) => prevCats.filter((cat) => cat !== deletedCat));
  };

  {/* Name Sort function */}
  const handleSort = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  {/* Reverse Sort function */}
  const handleReverse = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  {/* Panthera filter Sort function */}
  const handleFilter = () => {
    const filteredCats = initialCats.filter((cat) =>
      cat.latinName.toLowerCase().includes('panthera')
    );
    setCats(filteredCats);
  };

  {/* Reset Sort function */}
  const handleReset = () => {
    setCats(initialCats);
  };

  return (
    <div className="big-cats">
      {/* Componont to add new cats */}
      <AddCatForm onAddCat={handleAddCat} />

      <div className="buttons">
        {/* Sort Buttons */}
        <button onClick={handleSort}>Sort by Name</button>
        <button onClick={handleReverse}>Reverse List</button>
        <button onClick={handleFilter}>Filter Panthera Family</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {/* Renders each cat card */}
      {cats.map((cat, index) => (
        <div key={index} className="cat-with-delete">
          <SingleCat cat={cat} onDelete={handleDeleteCat} />
        </div>
      ))}
    </div>
  );
};

export default BigCats;