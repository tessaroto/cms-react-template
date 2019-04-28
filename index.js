const register = require('@babel/register')

register({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const TemplateEngine = require('./template-engine');

module.exports = {
	TemplateEngine
};