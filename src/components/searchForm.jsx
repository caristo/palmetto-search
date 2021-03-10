import React, { Component } from 'react';
// import axios from 'axios';
import { SearchButton } from './searchButton';
import { KeywordInput } from './keywordInput';
import CategorySelect from './categorySelect';
import { ImageCard } from './imageCard';

class SearchForm extends Component {
  state = {
    searchText: '',
    amount: 10,
    category: '',
    apiUrl: 'https://pixabay.com/api',
    apiKey: '1462867-dcccddb8e882bf2a2eb34e96f',
    images: [],
  };

  categories = [
    'fashion',
    'nature',
    'backgrounds',
    'science',
    'education',
    'people',
    'feelings',
    'religion',
    'health',
    'places',
    'animals',
    'industry',
    'food',
    'computer',
    'sports',
    'transportation',
    'travel',
    'buildings',
    'business',
    'music',
  ];

  render() {
    return (
      <>
        <KeywordInput value={this.state.searchText} />
        <CategorySelect categories={this.categories} />
        <SearchButton />
        <ImageCard />
      </>
    );
  }
}

export default SearchForm;
