import React, { Component } from 'react';
import './template.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class TemplateManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };


  render() {
    const { editorState } = this.state;
    console.log(editorState.getCurrentContent());
    return (
      <div className="App">
        <div className="aside" />
        <div className="content">
          <div className="split--wide">
            <Editor
              editorState={editorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
          <div className="split--narrow">
            <div className="resultCon">HERE BE READY MADE TEMPLATES YARRR</div>
          </div>
        </div>
        <div className="settingsCon">
          <div className="split--half" />
          <div className="split--half">
            <button type="submit" className="saveBtn">
              Save template
            </button>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line import/prefer-default-export
export { TemplateManager };
