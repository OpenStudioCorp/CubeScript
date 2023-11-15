
import React, { useState, useEffect } from 'react';

function Stuff() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4321/api/updates')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Stuff;
