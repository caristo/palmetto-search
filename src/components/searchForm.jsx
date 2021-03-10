import React, { Component } from 'react';
// import styled from 'styled-components';
import { SearchButton } from './searchButton';
import { KeywordInput } from './keywordInput';
import CategorySelect from './categorySelect';
import { ImageCard } from './imageCard';


class SearchForm extends Component {
  categories = [
    'fashion', 'nature', 'backgrounds', 'science',
    'education', 'people', 'feelings', 'religion',
    'health', 'places', 'animals', 'industry',
    'food', 'computer', 'sports', 'transportation',
    'travel', 'buildings', 'business', 'music'
  ];

  render() {
    return (
      <>
        <KeywordInput />
        <CategorySelect categories={this.categories}/>
        <SearchButton />
        <ImageCard />
      </>
  
    );
  }
  
} 

export default SearchForm;
