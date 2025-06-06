aerial-mod
==========

[![Build](https://github.com/oradwell/aerial-mod/actions/workflows/javascript.yml/badge.svg)](https://github.com/oradwell/aerial-mod/actions/workflows/javascript.yml)

Modified version of HTML5 UP Aerial Template

See it in action:
[www.radwell.codes](http://www.radwell.codes)

## Modifications

* Removed most of the animations
* Removed background overlay
* Changed background image
* Added grunt tasks for:
  * Code minimise (CSS, HTML, JS)
  * SASS compile
  * JS inline
* Added on hover background colour change for links
* Added on hover tooltips for links
* Greatly improved [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) rating of the template by:
  * Re-ordering external JS / CSS file includes (Rules: Prioritize visible content, Eliminate render-blocking JavaScript and CSS in above-the-fold content)
  * Minimise all the files (Rules: Minify CSS, Minify JavaScript)

## Installation

### Pre-requisites

- [Node.js](https://nodejs.org/en/download)
- [Sass](https://github.com/sass/dart-sass)

### Install the dependencies

```
npm install
```

### Build

Run:

```
npm run build
```

## Credits

Source template: [Aerial](http://html5up.net/uploads/demos/aerial/)
by [HTML5 UP](http://html5up.net/)
