import React from 'react';

const SingleCat = ({ cat, onDelete }) => {
  const handleDelete = () => {
    onDelete(cat); 
  };

  return (
    <div className="cat">
      <h2>{cat.name}</h2>
      <p>Latin Name: {cat.latinName}</p>
      {cat.image && <img src={cat.image} alt={cat.name} />}
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SingleCat;