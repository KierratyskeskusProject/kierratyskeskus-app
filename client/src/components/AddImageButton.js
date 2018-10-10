import React from 'react';
/*
class ImageButton extends Component {


  render() {
    return (
      <button className="btn addImage" type="button" onClick={()=> this.props.action}>
        <i className="fa fa-camera" aria-hidden="true" />
      </button>
    );
  }
}
*/

const ImageButton = (props) => {
  const { action } = props;
  return (
    <button className="btn addImage" type="button" onClick={action}>
      <i className="fa fa-camera" aria-hidden="true" />
    </button>
  );
};
export default ImageButton;
