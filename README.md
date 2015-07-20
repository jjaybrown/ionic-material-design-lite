# Material Design Lite for Ionic Framework

[![Join the chat at https://gitter.im/delta98/ionic-material-design-lite](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/delta98/ionic-material-design-lite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Bring Material Design to your Ionic based applications. This simple module will update Ionic Frameworks's common components and directives to use [Google's Material Design (Lite)](http://www.getmdl.io/) for the Android platform automatically.

## Example Kitchen Sink (WIP)
Codepen: http://codepen.io/delta98/pen/eNjeWJ

## Demo
A demo has been included in the `demo` folder.

##Why another Material Design library thing?
Material Design Lite reduces a lot of the boilerplate and dependencies on external libraries and frameworks such as Polymer. Other efforts have implemented the Material Design specification badly, built it to be workflow intensive or gets outdated quickly.

This project includes the Google implementation directly allowing for a frictionless implementation and relatively quick upgrade path.

##Override styles for both platforms (iOS/Android)
You can override both iOS and Android platform styles to use Material Design (Lite) by adding a single line of config to your application.

`$mdlConfigProvider.allPlatforms = true`

Otherwise only Android will use the Material Design (Lite) styles.

## Installation

### Manually 
You can manually add the css and js files to your project by pasting `ionic.material-design-lite.min.css` and `ionic.material-design-lite.min.js` located in the `dist` folder into your project directory.
Refer to these files by adding a `<link>` and a `<script>` element into your HTML pages.

### CDN 
TBC

### Bower
Assuming you have `wiredep` setup for your project and `bower` you can run:

`bower install ionic-material-design-lite`

This will automatically include `ionic.material-design-lite.min.css` and `ionic.material-design-lite.min.js` into your project.

Otherwise refer to these files by adding a `<link>` and a `<script>` element into your HTML pages.

## Contribute
Everyone is welcome to fork and create pull requests.

### Guidelines
1. Use BEM Methodology (https://en.bem.info/) when writing and modifying Sass files.
2. Always write and update tests, your PR won't be accepted unless it has suitable tests written and they pass.

## Development
To get started, first install the necessary dependencies, from the root of the project:

`npm install && bower install`

You are good to go. But here's a helpful list of `gulp commands` to get you up to speed:

`gulp dist` - processes CSS and JS files and places them into the `dist` folder

`gulp test` - run jasmine/karma tests

`gulp coverage` - run jasmine/karma tests with coverage

`gulp scripts` - processes JS files only and minifies ready for distribution 

`gulp sass` - processes Sass files and produces CSS and minifies ready for distribution 
