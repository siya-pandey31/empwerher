import React, { useContext } from 'react';
import './CSS/Category.css';
import { Context } from '../Context/Context';

const Category = ({ banner, category }) => {
  const { all_product } = useContext(Context);  

  return (
    <div>
      {banner && <img src={banner} alt={`${category} banner`} />}
      <h1>{category}</h1>
      {}
    </div>
  );
};

export default Category;
