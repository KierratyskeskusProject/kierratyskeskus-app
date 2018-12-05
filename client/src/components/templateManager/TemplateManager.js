import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
import _ from 'lodash';
import { Editor } from 'react-draft-wysiwyg';
import Select from 'react-select';

import { saveTemplates } from '../../redux/actions';
import { Template } from './Template';
import { Categories } from '../../data';
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
      selectedCategory: '',
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
      selectedCategory: '',
    });
  }

  handleSaveNew = () => {
    const {
      templates,
      editorState,
      selectedCategory,
    } = this.state;
    const { save, dispatch } = this.props;

    const contentState = convertToRaw(editorState.getCurrentContent());
    const id = templates.length === 0 ? 1 : templates.slice(-1)[0].id + 1;
    const categoryId = selectedCategory === '' ? 0 : selectedCategory.value.split('');
    const newTemplate = {
      name: selectedCategory.label,
      id,
      content: contentState,
      category: categoryId[0],
      subCategory: selectedCategory.value,
    };
    console.log('newtemplate', newTemplate);
    window.localStorage.setItem('templates', JSON.stringify([...templates, newTemplate]));
    dispatch(save(newTemplate));
    this.setState({
      templates: [...templates, newTemplate],
      editorState: EditorState.createEmpty(),
      selectedCategory: '',
      isEditing: false,
    });
  }

  handleSaveEdit = () => {
    const {
      templateInEdit,
      templates,
      editorState,
      selectedCategory,
    } = this.state;
    templates.map((template, key) => {
      if (template.id === templateInEdit) {
        templates[key].content = convertToRaw(editorState.getCurrentContent());
        templates[key].id = template.id;
        templates[key].name = selectedCategory.label;
        console.log('modified!', templates);
        window.localStorage.setItem('templates', JSON.stringify(templates));
      }
      return null;
    });
    this.setState({
      isEditing: false,
      editorState: EditorState.createEmpty(),
      selectedCategory: '',
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
        const convertedTemplateWithoutId = convertFromRaw(templateWithoutId.content);
        this.setState({
          editorState: EditorState.createWithContent(
            convertedTemplateWithoutId,
          ),
          isEditing: !isEditing,
          templateInEdit: id,
          selectedCategory: {
            name: template.name,
            value: template.subCategory.includes('.')
              ? template.subCategory
              : template.category,
          },
        });
      }
      return null;
    });
  }

  handleCategoryChange = (selectedCategory) => {
    this.setState({
      selectedCategory,
    });
  }

  toggleEditing() {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing,
    });
  }

  render() {
    const {
      templates,
      editorState,
      isEditing,
      selectedCategory,
    } = this.state;
    return (
      <div className="App">
        <div className="aside" />
        <div className="content">
          <div className="split--wide">
            <Select
              value={selectedCategory}
              onChange={this.handleCategoryChange}
              options={Categories}
              placeholder="Select a category"
            />
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
                (template) => {
                  console.log('a template', template);
                  return (
                    <Template
                      template={template}
                      key={template.id}
                      id={template.id}
                      handleDeleteClick={this.handleTemplateDelete}
                      handleEditClick={this.handleTemplateEdit}
                      name={template.name}
                    />
                  );
                },
              )}
            </div>
          </div>
        </div>
        <div className="settingsCon">
          <div className="split--half">
            <button
              type="submit"
              className="saveBtn"
              onClick={() => this.handleClearEditor()}
            >
                Clear Editor
            </button>
          </div>
          <div className="split--half">
            {isEditing
              ? (
                <React.Fragment>
                  <button
                    type="submit"
                    className="saveBtn"
                    onClick={() => {
                      this.toggleEditing();
                      this.handleClearEditor();
                    }}
                  >
                    Discard changes
                  </button>
                  <button
                    type="submit"
                    className="saveBtn"
                    onClick={() => this.handleSaveEdit()}
                  >
                    Save Edit
                  </button>
                </React.Fragment>
              ) : ''}
            <button
              type="submit"
              className="saveBtn"
              onClick={() => this.handleSaveNew()}
            >
              {isEditing ? 'Save New' : 'Save template'}
            </button>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  templates: state.templates,
});

const mapDispatchToProps = dispatch => ({
  save: saveTemplates,
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateManager);
