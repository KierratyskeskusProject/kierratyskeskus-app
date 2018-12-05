import React from 'react';
import PropTypes from 'prop-types';

const TemplateRow = ({ text, styles }) => {
  const style = ['template__item'];

  styles.map((row) => {
    switch (row.style) {
      case 'ITALIC':
        style.push('italic');
        break;
      case 'BOLD':
        style.push('bold');
        break;
      default:
        return style;
    }
    return style;
  });

  return (
    <div className={style.join(' ')}>
      {text === '' ? <br /> : text}
    </div>
  );
};

TemplateRow.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.arrayOf(
    PropTypes.shape({
      offset: PropTypes.number.isRequired,
      length: PropTypes.number.isRequired,
      style: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export { TemplateRow };
