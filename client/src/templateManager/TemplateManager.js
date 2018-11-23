import React,{Component} from 'react'
import './template.css';
import { Editor } from '@tinymce/tinymce-react';

//import CategoryReactSelect from './components/CategoryReactSelect';

class TemplateManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      template: '<h3>Template preview</h3>',
      categories: [],
    };
  }

  updateContent = (e, editor) => {
    let newContent = editor.getContent();
    this.setState({template: newContent})
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>Template manager</p>
        </header>

        <div className="aside">

        </div>

        <div className="content">
          <div className="split">
            <Editor
              initialValue=""
              init={{
                plugins: 'link',
                toolbar: '| bold italic | alignleft aligncenter alignright',
                height: "410",

              }}
              onKeyUp={this.updateContent}
            />
          </div>

          <div className="split">
            <div className="resultCon">
              <p dangerouslySetInnerHTML={{__html: this.state.template}} />
            </div>
          </div>

        </div>

        <div className="settingsCon">
          <div className="split">
            {/*<CategoryReactSelect/>*/}
          </div>

          <div className="split">
            <button className="saveBtn">
              Save template
            </button>
          </div>
          <div className="clear"></div>
        </div>

      </div>
    );
  }
}

export default TemplateManager;
