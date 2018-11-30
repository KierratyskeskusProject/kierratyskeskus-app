import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Template } from './Template';
import './template.css';
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
    window.localStorage.setItem('templates', JSON.stringify([...templates, content]));
  }

  handleSaveClick = (editorState) => {
    const { templates } = this.state;
    const contentState = convertToRaw(editorState.getCurrentContent());
    contentState.id = templates.length === 0 ? 1 : templates.slice(-1)[0].id + 1;
    this.saveContent(contentState);
    this.setState({
      templates: [...templates, contentState],
    });
  }

  handleTemplateDelete = (id) => {
    const templatesInStorage = JSON.parse(localStorage.getItem('templates'));
    const removedTemplates = templatesInStorage.filter(template => template.id !== id);
    this.setState({
      templates: removedTemplates,
    });
    window.localStorage.setItem('templates', JSON.stringify(removedTemplates));
  }

  handleTemplateEdit = (id) => {
    console.log('Edit template with id', id);
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
                (item) => {
                  console.log('a template', item);
                  return (
                    <Template
                      template={item}
                      key={item.id}
                      id={item.id}
                      handleDeleteClick={this.handleTemplateDelete}
                      handleEditClick={this.handleTemplateEdit}
                    />
                  );
                },
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
