import React, { Component } from 'react';
import {
  EditorState, convertToRaw, convertFromRaw,
} from 'draft-js';
import _ from 'lodash';
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
      isEditing: false,
      templateInEdit: null,
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

  handleClearEditor = () => {
    this.setState({
      editorState: EditorState.createEmpty(),
    });
  }

  handleSaveClick = () => {
    const { templates, editorState } = this.state;
    const contentState = convertToRaw(editorState.getCurrentContent());
    contentState.id = templates.length === 0 ? 1 : templates.slice(-1)[0].id + 1;
    window.localStorage.setItem('templates', JSON.stringify([...templates, contentState]));
    this.setState({
      templates: [...templates, contentState],
      editorState: EditorState.createEmpty(),
      isEditing: false,
    });
  }

  handleSaveEdit = () => {
    const { templateInEdit, templates, editorState } = this.state;
    templates.map((template, key) => {
      if (template.id === templateInEdit) {
        templates[key] = convertToRaw(editorState.getCurrentContent());
        templates[key].id = template.id;
        console.log('modified!', templates);
        window.localStorage.setItem('templates', JSON.stringify(templates));
      }
      return null;
    });
    this.setState({
      isEditing: false,
      editorState: EditorState.createEmpty(),
    });
  }

  handleTemplateDelete = (id) => {
    const { templates } = this.state;
    const removedTemplates = templates.filter(template => template.id !== id);
    this.setState({
      templates: removedTemplates,
    });
    window.localStorage.setItem('templates', JSON.stringify(removedTemplates));
  }

  handleTemplateEdit = (id) => {
    const { isEditing } = this.state;
    const templates = JSON.parse(window.localStorage.getItem('templates'));
    templates.map((template) => {
      if (template.id === id) {
        const templateWithoutId = _.omit(template, 'id');
        const convertedTemplateWithoutId = convertFromRaw(templateWithoutId);
        this.setState({
          editorState: EditorState.createWithContent(
            convertedTemplateWithoutId,
          ),
          isEditing: !isEditing,
          templateInEdit: id,
        });
      }
      return null;
    });
  }

  toggleEditing() {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing,
    });
  }

  render() {
    const { templates, editorState, isEditing } = this.state;
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
            <div className="settingsCon">
              <div className="split--half">
                <button
                  type="submit"
                  className="btn clearEditor"
                  onClick={() => this.handleClearEditor()}
                >
                  <i className="fa fa-times" />
                </button>
                <button
                  type="submit"
                  className="btn editorButton saveNew"
                  onClick={() => this.handleSaveClick()}
                >
                  {isEditing ? 'Save as New Template' : 'Save Template'}
                </button>
              </div>
              <div className="split--half">
                {isEditing
                  ? (
                    <React.Fragment>
                      <button
                        type="submit"
                        className="btn editorButton saveEdit"
                        onClick={() => this.handleSaveEdit()}
                      >
                    Save Changes
                      </button>
                      <button
                        type="submit"
                        className="btn editorButton discardEdit"
                        onClick={() => { this.toggleEditing(); this.handleClearEditor(); }}
                      >
                    Discard Changes
                      </button>
                    </React.Fragment>
                  ) : ''}
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
        <div className="split--narrow">
          <div className="resultCon">
            {templates.length === 0 ? '' : templates.map(
              (template) => {
                console.log('a template', template);
                return (
                  <Template
                    template={template}
                    key={template.id}
                    id={template.id}
                    handleDeleteClick={this.handleTemplateDelete}
                    handleEditClick={this.handleTemplateEdit}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line import/prefer-default-export
export { TemplateManager };
