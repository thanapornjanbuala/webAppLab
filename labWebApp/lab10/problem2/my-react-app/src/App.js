import React, { useState } from 'react';
import PersonForm from './PersonForm';
import UniversityForm from './UniversityForm';

function App() {
  const [universityName, setUniversityName] = useState('');

  return (
    <div className="App">
      <PersonForm />
      <UniversityForm universityName={universityName} />
    </div>
  );
}

export default App;
