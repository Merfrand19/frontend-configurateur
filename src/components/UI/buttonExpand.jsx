import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const ButtonExpand = ({ setIsVisualExpanded, isVisualExpanded }) => {
  const toggle = () => {
    setIsVisualExpanded(!isVisualExpanded);
    console.log('isVisualExpanded:', !isVisualExpanded);
  };

  return (
    <button
      onClick={toggle}
      className="mb-5 mr-4 border border-solid border-white flex items-center gap-2 p-2 text-white bg-black/30"
    >
      {isVisualExpanded ? <p>Retour</p> : <p>Voir plus grand</p>}
      <Icon.ArrowsAngleExpand color="white" size={20} />
    </button>
  );
};

export default ButtonExpand;
