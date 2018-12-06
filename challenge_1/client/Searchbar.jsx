import React from 'react';

const searchbar = ({searchTerm, submitButtonHandler, inputChangeHandler}) => (
  <form>
          <input
            type="text" 
            name="searchTerm" 
            id="searchTerm"
            value={searchTerm}
            onChange={(e) => inputChangeHandler(e, 'term')}
          />
          <button
            type="submit"
            onClick={(e) => submitButtonHandler(e)}
          >
          Search
          </button>
        </form>
)

export default searchbar;
