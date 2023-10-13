import React from 'react';

function UniversityForm({ universityName }) {
  return (
    <form>
      <label>
        University Name:
        <input type="text" value={universityName} readOnly />
      </label>
      <p>Name studies in {universityName}</p>
    </form>
  );
}

export default UniversityForm;
