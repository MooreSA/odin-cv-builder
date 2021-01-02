import React from 'react';

const EditToggle = (props) => {
  const { buildMode, toggleBuildMode } = props;

  if (buildMode) {
    return <button className="btn-toggle-build" type="button" onClick={toggleBuildMode}>Preview Resume </button>;
  }
  return (
    <button type="button" className="btn-toggle-build" onClick={toggleBuildMode}>Build Resume</button>
  );
};

export default EditToggle;
