import React from 'react';
import PropTypes from 'prop-types';

const TemplateRow = ({ text, styles }) => {
  const generateClassNames = () => {
    const style = ['template__item'];
    if (styles !== undefined) {
      styles.map((row) => {
        console.log('a row', row);
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
        console.log('style', style);
        return style;
      });
    }
    return style;
  };

  return (
    <div className={styles.length !== 0 ? `${generateClassNames().join(' ')}` : 'template__item'}>
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
