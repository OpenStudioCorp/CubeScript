
import React, { useState, useEffect } from 'react';

interface Patchnote {
  id: number;
  version: string;
  date: string;
  changes: string[];
}

const Patchnotes: React.FC = () => {
  const [patchnotes, setPatchnotes] = useState<Patchnote[]>([]);

  useEffect(() => {
    const fetchPatchnotes = async () => {
      const response = await fetch('https://api.example.com/patchnotes');
      const data = await response.json();
      setPatchnotes(data);
    };

    fetchPatchnotes();
  }, []);

  return (
    <div>
      <h1>Patchnotes</h1>
      <ul>
        {patchnotes.map((patchnote) => (
          <li key={patchnote.id}>
            <h2>{patchnote.version}</h2>
            <p>{patchnote.date}</p>
            <ul>
              {patchnote.changes.map((change, index) => (
                <li key={index}>{change}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patchnotes;
