import React, { Component } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
  color: #a8a8a8;
  border: 2px solid #e9e7ea;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
  font-style: italic;
  margin-bottom: 5px;
`;

class CategorySelect extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Select>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </Select>
    );
  }
}

export default CategorySelect;
