import React from 'react';

const ResultList = ({ results }) => (
  results.length ? (
    <ul>
    {results.map(result => <li>{result.description}</li>)}
  </ul>
  ) : null
);

export default ResultList;