import React from 'react';

const Category = ({category, handleClick, filter}) => {
  const selected = filter === category ? 'selected' : null;
  return (
    <button onClick={handleClick} className={selected} value={category} >{category}</button> 
  );
}

export default Category;
