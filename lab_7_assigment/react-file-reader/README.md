# React File Reader
A flexible ReactJS component for handling file uploads with custom style inputs.

## Props
### Default Props
  - fileTypes: 'image/*'
  - multipleFiles: false
  - base64: false

### Required Props
- a child element/component
  - pass in your customized button to represent your upload input
- handleFiles
  - a function to handle the selected files from the HTML input.

### Optional Props
- base64
  - a `boolean` to convert and return the files as a base64 string
  - multipleFile selection will return an `array` of `base64` strings;
- multipleFiles
  - a `boolean` enforce single file or multiple file selection
- fileTypes
  - React File Reader supports all [HTML input accept attributes](https://www.w3schools.com/tags/att_input_accept.asp).

## Usage
### Import React File Reader
```javascript
import ReactFileReader from 'react-file-reader';
```

### Basic Use
```javascript
handleFiles = files => {
  console.log(files)
}

<ReactFileReader handleFiles={this.handleFiles}>
  <button className='btn'>Upload</button>
</ReactFileReader>
```

#### Response
[HTML5 FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)

### Base64
```javascript
<ReactFileReader base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
  <button className='btn'>Upload</button>
</ReactFileReader>
```

#### Response
###### multipleFiles={true}
```
["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA", "data:image/png;base64,i..."]
```

###### multipleFiles={false}
```
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..."
```

## Copyright
Copyright (c)2017 [Grillwork Inc](http://grillwork.io). See [LICENSE](https://github.com/GrillWork/react-file-reader/blob/master/LICENSE) for details.
