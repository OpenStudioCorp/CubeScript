
import React, { useState, useEffect } from 'react';

const Errors = ({ ErrorName }) => {
  const [errorContent, setErrorContent] = useState(null);

  useEffect(() => {
    const fetchErrorContent = async () => {
      const response = await fetch('/path/to/error/content.json');
      const data = await response.json();
      const error = data.errors.find((error) => error.name === ErrorName);
      setErrorContent(error);
    };

    fetchErrorContent();
  }, [ErrorName]);

  return (
    <div className="error-page">
      <div className="sidebar">
        <h2>Errors</h2>
        <ul>
          {errorContent &&
            data.errors.map((error) => (
              <li key={error.name}>
                <a href={`#${error.name}`}>{error.name}</a>
              </li>
            ))}
        </ul>
      </div>
      <div className="main">
        {errorContent && (
          <>
            <h1>{errorContent.name}</h1>
            <p>{errorContent.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Errors;
