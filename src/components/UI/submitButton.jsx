import React from 'react';

const SubmitButton = ({ onClick }) => {
  return (
    <button className="submit__button mb-5" onClick={onClick}>
      Finaliser
    </button>
  );
};

export default SubmitButton;
