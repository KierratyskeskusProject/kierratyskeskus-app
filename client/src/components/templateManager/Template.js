import React from 'react';
import PropTypes from 'prop-types';
import { TemplateRow } from './TemplateRow';

const Template = ({
  template,
  handleEditClick,
  handleDeleteClick,
  id,
}) => (
  <div className="template">
    <div className="template__head">
      {`Template ${id}`}
    </div>
    <div className="template__body">
      {template.length === 0 ? '' : template.blocks.map(item => (
        <TemplateRow
          key={item.key}
          text={item.text.toString()}
          styles={item.inlineStyleRanges}
        />
      ))}
    </div>
    <div className="template__footer">
      <button
        className="btn button__edit success"
        type="submit"
        onClick={() => handleEditClick(id)}
      >
        Edit
      </button>
      <button
        className="btn button__delete danger"
        type="submit"
        onClick={() => handleDeleteClick(id)}
      >
        Delete
      </button>
    </div>
  </div>
);

Template.propTypes = {
  template: PropTypes.shape({
    blocks: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export { Template };
