// import logo from './logo.svg';
// import './App.css';
import axios from 'axios'
import React, { PureComponent } from "react";
import Files from './Files';
import CanvasDraw from './CanvasDraw';

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      files: []
    }
  }

  onFilesChange = (files) => {
    this.setState({
      files
    }, () => {
      console.log(this.state.files)
    })
  }

  onFilesError = (error, file) => {
    console.log('error code ' + error.code + ': ' + error.message)
  }

  filesRemoveOne = (file) => {
    this.refs.files.removeFile(file)
  }

  filesRemoveAll = () => {
    this.refs.files.removeFiles()
  }

  filesUpload = () => {
    const formData = new FormData()
    Object.keys(this.state.files).forEach((key) => {
      const file = this.state.files[key]
      formData.append(key, new Blob([file], { type: file.type }), file.name || 'file')
    })

    axios.post(`/files`, formData)
    .then(response => window.alert(`${this.state.files.length} files uploaded succesfully!`))
    .catch(err => window.alert('Error uploading files :('))
  }

  render() {
    return (
    <div className="sm:container sm:mx-auto">
      <div className="flex h-full">
        <div className="w-1/5 h-screen bg-purple-100 text-2xl">
          <div className="mt-10">
            <a className="font-medium text-blue-500 underline hover:text-blue-700 block" href="#">Take Picture</a>
            <a className="text-blue-500 hover:text-blue-800 block" href="#">Show all pictures</a>
          </div>
        </div>
        
        <div className="w-4/5">
          <div className="m-5 text-blue-500 text-4xl">Take Picture Page</div>

          <Files
          ref='files'
          className='files-dropzone-list'
          style={{ height: '100px' }}
          onChange={this.onFilesChange}
          onError={this.onFilesError}
          multiple
          maxFiles={10}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Drop files here or click to upload
        </Files>
        <button onClick={this.filesRemoveAll}>Remove All Files</button>
        <button onClick={this.filesUpload}>Upload</button>
        {
          this.state.files.length > 0
          ? <div className='files-list'>
            <ul>{this.state.files.map((file) =>
              <li className='files-list-item' key={file.id}>
                <div className='files-list-item-preview'>
                  <CanvasDraw
                    brushColor="black"
                    imgSrc={file.preview.url}
                  />
                </div>
                <div className='files-list-item-content'>
                  <div className='files-list-item-content-item files-list-item-content-item-1'>{file.name}</div>
                  <div className='files-list-item-content-item files-list-item-content-item-2'>{file.sizeReadable}</div>
                </div>
                <div
                  id={file.id}
                  className='files-list-item-remove'
                  onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
                />
              </li>
            )}</ul>
          </div>
          : null
        }

        </div>
      </div>
    </div>
  );
}
}
export default App