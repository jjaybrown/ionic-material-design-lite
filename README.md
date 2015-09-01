**Status:** In Development
**Next Release:** RC-1 - 14th September 2015

[![Stories in Ready](https://badge.waffle.io/delta98/ionic-material-design-lite.png?label=ready&title=Ready)](https://waffle.io/delta98/ionic-material-design-lite)
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

`$ionicMaterialConfigProvider.enableForAllPlatforms();`

Otherwise only Android will use the Material Design (Lite) styles.

## Installation

**Until RC-1 is released you will need to include the following additional includes above the `ionic-material-design-lite` scripts and css**

`<link rel="stylesheet" type="text/css" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">`

### Manually 
You can manually add the css and js files to your project by pasting `ionic.material-design-lite.min.css` and `ionic.material-design-lite.bundle.min.js` located in the `dist` folder into your project directory.
Refer to these files by adding a `<link>` and a `<script>` element into your HTML pages.

### CDN 
TBC

### Bower
Assuming you have `wiredep` setup for your project and `bower` you can run:

`bower install ionic-material-design-lite`

This will automatically include `ionic.material-design-lite.min.css` and `ionic.material-design-lite.bundle.min.js` into your project.

Otherwise refer to these files by adding a `<link>` and a `<script>` element into your HTML pages.

## Contribute
Everyone is welcome to fork and create pull requests.

### Guidelines
1. Use BEM Methodology (https://en.bem.info/) when writing and modifying Sass files.
2. Always write and update tests, your PR won't be accepted unless it has suitable tests written and they pass.

### Branching and Issues
Everyone is encouraged to create and resolve issues. When creating an issue ensure you provide as much detail as possible, including any supporting materials that demonstrate the issue OR if it's a feature a detailed statement as to what you are proposing, how it fits within Material Design in the context of Ionic and links to any supporting documents, libraries etc.

#### Creating a Branch and working on an issue
The project uses waffle.io to manage the issues. If a branch doesn't currently exist you should follow these steps and conventions.

1. After you have identified an issue you would like to work on you should comment and let others know who you will be working on that issue, if it is already active proceed to Step 3.
2. Create a branch with the following syntax <`feat`|`bugfix`>-short-name`#ISSUENUM` e.g. `feat-material-icons#7`. The issue should have enough detail as to make others aware of what the branch is for by using the issue number associated with it.
3. Make regular updates and notify others of your progress on the issue, likewise if you would like to be involved let the issue owner know so they can tell you how you may be able to help.

## Development
To get started, first install the necessary dependencies, from the root of the project:

`npm install && bower install`

You are good to go. But here's a helpful list of `gulp commands` to get you up to speed:

`gulp dist` - processes CSS and JS files and places them into the `dist` folder

`gulp test` - run jasmine/karma tests

`gulp coverage` - run jasmine/karma tests with coverage

`gulp scripts` - processes JS files only and minifies ready for distribution 

`gulp sass` - processes Sass files and produces CSS and minifies ready for distribution 
