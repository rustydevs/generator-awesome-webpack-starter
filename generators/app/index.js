'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Rusty Dev\'s ' + chalk.red('generator-awesome-webpack-starter') + ' generator!'
    ));

    const prompts = [
      //Will add prompts in future!
    //   {
    //   type: 'confirm',
    //   name: 'proceed',
    //   message: 'Would you like to scaffold on current directory?',
    //   default: true
    // }
  ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.proceed;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
    this.fs.copy(this.templatePath('webpack.prod.js'), this.destinationPath('webpack.prod.js'));
    this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'));
    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('webpack.dev.js'), this.destinationPath('webpack.dev.js'));
    this.fs.copy(this.templatePath('yarn.lock'), this.destinationPath('yarn.lock'));
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    this.fs.copy(this.templatePath('src/index.js'), this.destinationPath('src/index.js'));
    this.fs.copy(this.templatePath('src/scss'), this.destinationPath('src/scss'));
    this.fs.copy(this.templatePath('src/scss/styles.scss'), this.destinationPath('./src/scss/styles.scss'));

  }

  install() {
      this.installDependencies({bower: false});
  }
};
