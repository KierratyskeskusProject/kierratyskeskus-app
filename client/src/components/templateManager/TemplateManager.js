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
import {
  saveTemplates,
  deleteTemplate,
  saveEditedTemplate,
} from '../../redux/actions';
import { Template } from './Template';
import { Categories } from '../../data';
import './template.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class TemplateManager extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    isEditing: false,
    templateInEdit: null,
    selectedCategory: '',
    loading: false,
  };

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
      editorState,
      selectedCategory,
    } = this.state;
    const {
      save,
      dispatch,
    } = this.props;
    const contentState = convertToRaw(editorState.getCurrentContent());
    const id = Date.now();
    const categoryId = selectedCategory === ''
     || selectedCategory.value === undefined
      ? 0
      : selectedCategory.value.split('');
    const newTemplate = {
      name: selectedCategory.label,
      id,
      content: contentState,
      category: categoryId[0],
      subCategory: selectedCategory.value,
    };
    dispatch(save(JSON.stringify(newTemplate)));
    this.setState({
      editorState: EditorState.createEmpty(),
      selectedCategory: '',
      isEditing: false,
    });
    this.toggleLoading();
  }

  handleSaveEdit = () => {
    const {
      templateInEdit,
      editorState,
      selectedCategory,
    } = this.state;
    const {
      templates: { templates },
      update,
      dispatch,
    } = this.props;

    templates.forEach((templateString) => {
      const template = JSON.parse(templateString);

      if (template.id === templateInEdit) {
        console.log(selectedCategory);
        const categoryId = selectedCategory === ''
        || selectedCategory.value === undefined
          ? 0
          : selectedCategory.value.split('');
        const editedTemplate = {
          content: convertToRaw(editorState.getCurrentContent()),
          id: template.id,
          name: selectedCategory.label,
          category: categoryId[0],
          subCategory: selectedCategory.value,
        };
        dispatch(update(editedTemplate));
      }
    });
    this.setState({
      isEditing: false,
      editorState: EditorState.createEmpty(),
      selectedCategory: '',
    });
    this.toggleLoading();
  }

  handleTemplateDelete = (id) => {
    const {
      remove,
      dispatch,
    } = this.props;
    dispatch(remove(id));
    this.toggleLoading();
  }

  handleTemplateEdit = (id) => {
    const { isEditing } = this.state;
    const { templates: { templates } } = this.props;

    templates.forEach((template) => {
      const templateJSON = JSON.parse(template);
      if (templateJSON.id === id) {
        const templateWithoutId = _.omit(templateJSON, 'id');
        const convertedTemplateWithoutId = convertFromRaw(templateWithoutId.content);
        this.setState({
          editorState: EditorState.createWithContent(
            convertedTemplateWithoutId,
          ),
          isEditing: !isEditing,
          templateInEdit: id,
          selectedCategory: {
            label: templateJSON.name,
            value: templateJSON.subCategory && templateJSON.subCategory.includes('.')
              ? templateJSON.subCategory
              : templateJSON.category,
          },
        });
      }
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

  toggleLoading() {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  render() {
    const {
      editorState,
      isEditing,
      selectedCategory,
      loading,
    } = this.state;
    const { templates: { templates } } = this.props;
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
                  const templateJSON = JSON.parse(template);
                  return (
                    <Template
                      template={templateJSON}
                      key={templateJSON.id}
                      id={templateJSON.id}
                      handleDeleteClick={this.handleTemplateDelete}
                      handleEditClick={this.handleTemplateEdit}
                      name={templateJSON.name}
                      isEditing={isEditing}
                      loading={loading}
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
              disabled={loading}
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
                    disabled={loading}
                  >
                    Discard changes
                  </button>
                  <button
                    type="submit"
                    className="saveBtn"
                    onClick={() => this.handleSaveEdit()}
                    disabled={loading}
                  >
                    Save Edit
                  </button>
                </React.Fragment>
              ) : ''}
            <button
              type="submit"
              className="saveBtn"
              onClick={() => this.handleSaveNew()}
              disabled={loading}
            >
              {isEditing ? 'Save New' : 'Save Template'}
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
  remove: deleteTemplate,
  update: saveEditedTemplate,
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateManager);
