import React, { useState, useEffect } from 'react';

function Internet() {
  const [errorInfo, setErrorInfo] = useState([]);

  useEffect(() => {
    // Fetch error information from API or data source
    // Update the errorInfo state variable with the fetched data
    // For example:
    fetch('https://CubeScript.vercel.app/libs/internet.json')
      .then(response => response.json())
      .then(data => setErrorInfo(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Errors</h1>
      <nav>
        <ul>
          <li><a rel="prefetch" href="#errors">Errors</a></li>
        </ul>
      </nav>
      <div>
        {errorInfo.map(error => (
          <div key={error.id}>
            <h2>{error.title}</h2>
            <p>{error.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internet;
