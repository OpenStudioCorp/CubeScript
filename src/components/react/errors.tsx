
import React, { useState, useEffect } from "react";

interface Error {
  id: number;
  message: string;
}

const ErrorPage: React.FC = () => {
  const [errors, setErrors] = useState<Error[]>([]);
  const [selectedError, setSelectedError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("/api/errors")
      .then((response) => response.json())
      .then((data) => setErrors(data));
  }, []);

  const handleSelectError = (error: Error) => {
    setSelectedError(error);
  };

  return (
    <div className="error-page">
      <div className="sidebar">
        <h2>Errors</h2>
        <ul>
          {errors.map((error) => (
            <li key={error.id} onClick={() => handleSelectError(error)}>
              {error.message}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {selectedError ? (
          <div>
            <h2>Error {selectedError.id}</h2>
            <p>{selectedError.message}</p>
          </div>
        ) : (
          <p>Select an error to view details.</p>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
