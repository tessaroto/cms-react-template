const React = require('react')
const ReactDOM = require('react-dom/server')
const path = require('path');

class TemplateEngine {

  constructor(path){
    this.path = path;
  }

  renderToString(template, props){
    const templatePath = path.join(this.path, template);
    const Template = React.createFactory(require(templatePath).default)

    return ReactDOM.renderToString(Template(props));
  }
}

module.exports = TemplateEngine;

