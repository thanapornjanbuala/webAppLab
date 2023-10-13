import React, { useState, useEffect } from 'react';

function App() {
  const [personName1, setPersonName1] = useState('');
  const [personName2, setPersonName2] = useState('');
  const [universityName, setUniversityName] = useState('');

  const handlePersonName1Change = (event) => {
    setPersonName1(event.target.value);
  };

  const handlePersonName2Change = (event) => {
    setPersonName2(event.target.value);
  };

  const handleUniversityNameChange = (event) => {
    setUniversityName(event.target.value);
  };

  useEffect(() => {
    if (personName2 === '') {
      setPersonName2(personName1);
    }
  }, [personName1, personName2]);

  return (
    <div>
      <h1>Forms with Names</h1>
      <div className="form-container">
        <form>
          <label htmlFor="personName1"></label>
          <input
            type="text"
            id="personName1"
            placeholder="Enter Name"
            value={personName1}
            onChange={handlePersonName1Change}
          />
          <label htmlFor="universityName"> Studies in </label>
          <input
            type="text"
            placeholder="Enter University"
            value={universityName}
            onChange={handleUniversityNameChange}
          />
        </form>
      </div>

      <br />

      <div className="form-container">
        <form>
          <label htmlFor="personName2"></label>
          <input
            type="text"
            id="personName2"
            placeholder="Enter Name"
            value={personName2}
            onChange={handlePersonName2Change}
          />
          <label htmlFor="universityName"> Studies in </label>
          <input
            type="text"
            placeholder="Enter University"
            value={universityName}
            onChange={handleUniversityNameChange}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
