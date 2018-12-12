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
        className="btn button__edit"
        type="submit"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Edit"
        onClick={() => handleEditClick(id)}
      >
        <i className="fa fa-edit" />
      </button>
      <button
        className="btn button__delete"
        type="submit"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Delete"
        onClick={() => handleDeleteClick(id)}
      >
        <i className="fa fa-trash" />
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
