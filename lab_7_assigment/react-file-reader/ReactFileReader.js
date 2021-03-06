import React from 'react';
import uuidV4 from 'uuid4';
import PropTypes from 'prop-types';

export default class ReactFileReader extends React.Component {

  state = {
    elementId: this.props.elementId || uuidV4(),
  }

  clickInput = () => {
    let element = document.getElementById(this.state.elementId);

    element.click();
  }

  handleFiles = (event) => {
    if(this.props.base64) {
      this.convertFilesToBase64(event.target.files)
    } else {
      this.props.handleFiles(event.target.files)
    }
  }

  convertFilesToBase64 = (files) => {
    let ef = files

    if (this.props.multipleFiles) {
      let files = [];
      for (var i = 0, len = ef.length; i < len; i++) {
        let reader = new FileReader();
        let f = ef[i];

        reader.onloadend = e => {
          files.push(reader.result)

          if (files.length === ef.length) {
            this.props.handleFiles(files);
          }
        }

        reader.readAsDataURL(f);
      }
    } else {
      let f = files[0];
      let reader = new FileReader();

      reader.onloadend = function (e) {
        this.props.handleFiles(reader.result)
      }.bind(this)

      reader.readAsDataURL(f)
    }
  }

  render() {
    var hideInput = {
      width: '0px',
      opacity: '0px',
      position: 'fixed',
      left: '-99999999px',
    }

    return(
      <div className='react-file-reader'>
        <input type='file'
          onChange={this.handleFiles}
          accept={this.props.fileTypes}
          className='react-file-reader-input'
          id={this.state.elementId}
          multiple={this.props.multipleFiles}
          style={hideInput}
        />

        <div className='react-file-reader-button' onClick={this.clickInput}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

ReactFileReader.defaultProps = {
  fileTypes: 'image/*',
  multipleFiles: false,
  base64: false,
};

ReactFileReader.propTypes = {
  multipleFiles: PropTypes.bool,
  handleFiles: PropTypes.func.isRequired,
  fileTypes: PropTypes.string,
  base64: PropTypes.bool,
  children: PropTypes.element.isRequired
}
