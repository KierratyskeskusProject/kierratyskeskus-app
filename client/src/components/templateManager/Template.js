import React from 'react';
import PropTypes from 'prop-types';
import { TemplateRow } from './TemplateRow';

const Template = ({
  template,
  handleEditClick,
  handleDeleteClick,
  id,
  name,
  isEditing,
  loading,
}) => (
  <div className="template">
    <div className="template__head">
      {`Template ${name}`}
    </div>
    <div className="template__body">
      {template.length === 0 ? '' : template.content.blocks.map(item => (
        <TemplateRow
          key={item.key}
          text={item.text.toString()}
          styles={item.inlineStyleRanges}
        />
      ))}
    </div>
    {isEditing ? '' : (
      <div className="template__footer">
        <button
          className="btn button__edit success"
          type="submit"
          onClick={() => handleEditClick(id)}
          disabled={loading}
        >
        Edit
        </button>
        <button
          className="btn button__delete danger"
          type="submit"
          onClick={() => handleDeleteClick(id)}
          disabled={loading}
        >
        Delete
        </button>
      </div>)}
  </div>
);

Template.defaultProps = {
  name: 'Default',
};

Template.propTypes = {
  template: PropTypes.shape({
    content: PropTypes.shape({
      blocks: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  isEditing: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export { Template };
