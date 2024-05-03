// src/Filter.js
import React, { useState } from 'react';

const Filter = ({ categories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(categories.find((cat) => cat.name === category));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCategory(null); // Reset selected category when searching
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) => {
    return category.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h2>Filter by Category</h2>
      <input
        type="text"
        placeholder="Search categories"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={selectedCategory ? selectedCategory.name : ''} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      {selectedCategory && (
        <div>
          <h3>{selectedCategory.name}</h3>
          <p>{selectedCategory.description}</p>
          {/* Display additional data as needed */}
        </div>
      )}
      {!selectedCategory && (
        <ul>
          {filteredCategories.map((category, index) => (
            <li key={index}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
