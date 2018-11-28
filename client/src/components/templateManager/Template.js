import React from 'react';
import PropTypes from 'prop-types';

const Template = ({
  template,
  handleEditClick,
  handleDeleteClick,
  id,
}) => {
  const rowStyles = () => {
    const styles = ['template__item'];
    if (template !== undefined) {
      template.blocks.map((item) => {
        if (item.inlineStyleRanges !== undefined) {
          item.inlineStyleRanges.map((row) => {
            console.log('a row', row);
            switch (row.style) {
              case 'ITALIC':
                styles.push('italic');
                break;
              case 'BOLD':
                styles.push('bold');
                break;
              default:
                return styles;
            }
            return null;
          });
        }
        return null;
      });
    }
    return styles;
  };


  return (
    <div className="template">
      <div className="template__head">
        {`Template ${id}`}
      </div>
      <div className="template__body">
        {template.length === 0 ? '' : template.blocks.map(item => (
          <div
            key={item.key}
            className={`${rowStyles().join(' ')}`}
          >
            {item.text.toString()}
          </div>
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
};

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
