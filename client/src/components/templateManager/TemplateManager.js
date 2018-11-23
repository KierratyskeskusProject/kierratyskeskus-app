import React, { Component } from 'react';
import './template.css';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class TemplateManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      templates: [],
    };
  }

  componentDidMount() {
    const templatesInStorage = JSON.parse(localStorage.getItem('templates'));
    this.setState({
      templates: templatesInStorage == null ? '' : templatesInStorage,
    });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  saveContent = (content) => {
    const { templates } = this.state;
    console.log('templates & content', templates, content);
    window.localStorage.setItem('templates', JSON.stringify([...templates, content]));
  }

  handleSaveClick = (editorState) => {
    const { templates } = this.state;
    const contentState = convertToRaw(editorState.getCurrentContent());
    this.saveContent(contentState);
    this.setState({
      templates: [...templates, contentState],
    });
  }

  render() {
    const { templates, editorState } = this.state;
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
            <div className="resultCon">
              {templates.length === 0 ? '' : templates.map(
                item => item.blocks.map((template) => {
                  console.log(template); return (
                    <div key={template.key}>
                      {template.text.toString()}
                      <br />
                      <br />
                    </div>
                  );
                }),
              )}
            </div>
          </div>
        </div>
        <div className="settingsCon">
          <div className="split--half" />
          <div className="split--half">
            <button
              type="submit"
              className="saveBtn"
              onClick={() => this.handleSaveClick(editorState)}
            >
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
