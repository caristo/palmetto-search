import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchButton } from './searchButton';
import { KeywordInput } from './keywordInput';
import CategorySelect from './categorySelect';
import { ImageCard } from './imageCard';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const HalfColumn = styled.div`
  width: 40%;
`;

const LinkIcon = styled.span`
  margin-left: 30px;
  width: 100px;
  text-align: right;
  color: blue;
`;

const SearchResults = styled.li`
  font-weight: bold;
  list-style-type: none;
  margin: 20px 0;
  a {
    text-decoration: none;
    display: inline-flex;
    min-width: 115px;
  }
`;

const Divider = styled.div`
  margin: 35px 50px;
  border: 1px solid #f3f1f4;
  height: 500px;
`;

class SearchForm extends Component {
  state = {
    searchText: '',
    amount: 10,
    category: '',
    apiUrl: 'https://pixabay.com/api',
    apiKey: '1462867-dcccddb8e882bf2a2eb34e96f',
    images: [],
    savedSearch: [],
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
  ].sort();

  /*
   * Captures value entered by user in keyword field
   *
   */
  handleKeywordChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  /*
   * Captures value selected by user in category field
   *
   */
  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  /*
   * Changes keyword and category based on previous selection
   *
   */
  getSavedSearch = (index) => {
    this.setState({
      searchText: this.state.savedSearch[index][0],
      category: this.state.savedSearch[index][1],
    });
  };

  /*
   * Calls API with values keyword and category
   *
   */
  searchApi = () => {
    axios
      .get(
        `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&category=${this.state.category}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          images: res.data.hits,
        });
        this.state.savedSearch.push({
          searchID: Math.floor(Math.floor(100000000 + Math.random() * 900000000)),
          searchURL: [this.state.searchText, this.state.category],
        });
      });
  };

  render() {
    return (
      <>
        <HalfColumn>
          <KeywordInput value={this.state.searchText} onChange={this.handleKeywordChange} />
          <CategorySelect categories={this.categories} onSelect={this.handleCategoryChange} />
          <SearchButton click={this.searchApi} />
          {this.state.images.map((image, index) => {
            return <ImageCard key={index} image={image} />;
          })}
        </HalfColumn>
        <Divider />
        <HalfColumn>
          <h2>Saved</h2>
          {this.state.savedSearch.map((search, index) => {
            return (
              <SearchResults>
                <a>#{search.searchID} </a>
                <LinkIcon>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </LinkIcon>
              </SearchResults>
            );
          })}
        </HalfColumn>
      </>
    );
  }
}

export default SearchForm;
