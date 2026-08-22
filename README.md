# Reflective Surfaces
_An alternate timeline where digitial publications are **really** digitial._

The time is 10:09, on December 1st, 2022. The day of the first Games as Research meeting.

Initially the idea was to develop custom windows and refined interactions but the more I developed it and thought of the concept we were illustrating with this paper, the less it made sense to engineer custom CSS programmings of GitHub Desktop windows and Discord chats because while a nice easter egg, it was not the argument.

Moreover, it was also _counterproductive_ because we were making a normative argument about how publications should/could be. Code is expensive. We can not engineer such a specific solution and expect people to take it up as a mode of publication. It had to remain low entry to implement or even low entry to adopt this system for their own purpose.

The way Reflective Surfaces is currently implemented, anyone can change the screenshots, comment out a few lines, change some text and illustrate their own design process. This is also the reason I'm here writing documentation - explaining what is where and why I did things the way I did them. So you, the reader, can make better assumptions when you adapt this project to something you find useful.

## Technical Documentation 
Please see the [docs](./docs/) folder.

## Getting Started 
> :warning: Please use `Yarn` with this project instead of `NPM`.

1. Clone the repository. 
2. Open a terminal in the root directory of the repository. 
3. Run `yarn install`.
4. Run `yarn start`. This should open a new browser tab with the project. 

To make a production build, run `yarn build` - the output lands in the `build/` folder. 
You can then run `yarn preview` to serve that build locally and check it before deploying.

## Dependencies 
1. React `18.2.0`
2. Vite `6` (the build tool - see [vite.config.js](./vite.config.js))
3. Node `20.10.0` or newer
4. Yarn `1.22.19`
5. [Package.JSON](./package.json)

> :information_source: This project used to be built with Create React App. CRA was retired upstream, so
> it now builds with [Vite](https://vite.dev). The commands above are unchanged. The one thing to know if
> you are adding files: **components live in `.jsx` files, not `.js`** - Vite only looks for JSX syntax in
> `.jsx`. Your `import` statements do not need the extension, so they look exactly the same as before.
