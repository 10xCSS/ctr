# `ctr` /// The CSS Framework
[![npm](https://img.shields.io/npm/l/ctr.svg)](https://github.com/ctr-lang/ctr/blob/master/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/ctr.svg)](https://www.npmjs.com/package/ctr)

__The Underlying CSS Framework that Makes [10xCSS](https://10xcss.com/) Possible__

##  Preamble Context
I wrote `ctr` a lifetime ago, and while the core principles of `ctr` remain intact, some of the specific details might not wholly align with my current perspective. Nevertheless, apart from a few dated elements, `ctr` has endured the test of time and proved its reliability over years of daily use, and most notably, it makes [10xCSS.com](https://10xcss.com/) tick.

## Description

`ctr` is a CSS framework designed to streamline the creation, iteration, and management of CSS logic, with a special focus on pseudo-classes like `hover`, `focus`, and `active`. By leveraging a DOM-like hierarchical structure and a straightforward key-value pair syntax, it offers an intuitive approach to detailed style encapsulation with various helpers such as `hover` and `before`, to eliminate many of the tedious aspects of CSS development.

Read more and explore `ctr` in action through the fully functional and live documentation at [docs.ctr-lang.com](https://docs.ctr-lang.com/), where you can experiment with ctr without needing to install anything.

## Usage

If you want to give `ctr` a test spin, I'd recommend doing so through the live docs at [docs.ctr-lang.com](https://docs.ctr-lang.com/), where you can experiment without needing to install anything. Otherwise, for an optimal experience, use Node `v10.24.1`; however, newer Node versions should also be compatible. There is a rare-ish edge case involving deeply nested states and their interactions with elements, in which the state pseudo-class (`:hover, :focus`) may be incorrectly applied to the component rather than the element. To be honest, I can't recall the exact specifics, but it's related to changes in the array sorting behavior in Node `v10.24.1+` and Immutable.js `v3.8.1`.


## Status & Bugs

The current state of `ctr` is closely linked with the success of 10xCSS, with the goal/hope that 10xCSS will generate the necessary resources and funds for the next iteration. However, this version has largely been archived. In the meantime, I'm open to addressing bugs that significantly affect usability, so if you encounter an issue you believe is important and merits attention, I encourage you to report it.


## Structure

For the time being, all `ctr` assets reside under this repository, that is the, Stylus plugin, Less plugin, YAML API, and the JavaScript API. Hopefully, the rewrite will materialize, and if that's the case, I'll separate assets out to create a much cleaner structure.


+ `/lib` -> All the magic
    * `ctr-stylus.js` -> Stylus Plugin Logic
    * `ctr-less.js` -> Less Plugin Logic
    * `ctr-js.js` -> Js API class constructor
    * `/ctr-js-nodes` -> All Js methods for the `ctr-js.js` class
    * `/ctr-js-nodes` -> The actual logic behind `ctr`
+ `/dist`
    * `ctr.styl` -> The most important file, which is both embarrassing and impressive in its own right. This Stylus file contains two Stylus Functions that act as a janky templating solution to provide the proper syntactical structure. Along the lines of mustache but for CSS. Removing this file; thus the Stylus dependency is one of the main reasons for the rewrite.
+ `__tests__` -> All the test, and it has it's own `README.md`

