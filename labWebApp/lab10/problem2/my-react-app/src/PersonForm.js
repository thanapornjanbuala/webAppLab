import React, { useState } from 'react';

function PersonForm() {
  const [personName, setPersonName] = useState('');

  const handlePersonNameChange = (e) => {
    setPersonName(e.target.value);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" value={personName} onChange={handlePersonNameChange} />
      </label>
      <p>{personName} studies in ...</p>
    </form>
  );
}

export default PersonForm;
