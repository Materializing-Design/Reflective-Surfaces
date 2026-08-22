# Reflective Surfaces

Although this is written in React, I tried to develop it like a game while using affordances from react and web as a platform.

In react there is a concept of components Mounting - this is when they are first rendered. The component is only re-rendered when its state changes. So any variable defined like `[newVariable, setNewVariable] = useState(default_value)` in any component is a state object. And anytime state updates the component is re-rendered. For more on how rendering and mounting/unmounting works, have a look at the react docs on the topic [here (intro to react components)](https://react.dev/learn/your-first-component), [here (reacting to input with state)](https://react.dev/learn/reacting-to-input-with-state) and [here (thinking in react)](https://react.dev/learn/thinking-in-react).

The way state and components work, it is essential to have a globally persistent state that can be shared among all components. This is the key purpose of the `GameManager`. In reactive terms, the `GameManager` is what we call a [`Context`](https://react.dev/learn/passing-data-deeply-with-context). It is defined once in [GameManager.jsx](../src/managers/GameManager.jsx), initialized once in [index.jsx](../src/index.jsx) and then EVERY component in the [react tree](https://react.dev/learn/understanding-your-ui-as-a-tree) can use this context by adding these lines:

```
// Add these at the top of the file
import {useContext} from "react";
import GameManager from "../managers/GameManager"; // make sure this location is correct, it will depend on the location of the file you add this to.
```
```
// Add this to the body of your component
const GameMan = useContext(GameManager);
```

Now you can use any value that the `GameManager` exports in the `value` object, in `GameManager.Provider`.

- All screens are in the [src/all-screens](../src/all-screens) directory and expected to manage their own data. Screen switching depends on the `activeScreen` state in the `GameManager` but the switching is done by the [ScreensManager](../src/managers/ScreensManager.jsx) component.
  - TitleScreen, CreditsScreen, and TheEnd are special screens in the sense that they dont use the [Screen](../src/components/Screen.jsx) component - which all other screens do. This is because:
  - The `Screen` component is a generalized implementation of what a desktop looks like, which takes a `state` parameter. This parameter describes the desktop and the assets required (and their locations): what the background image is, what windows are on the screen, where to find these windows, which of these windows is open or minimized, which operating system is this screen for, etc.
  - The `state` also defines the portals locations and what kind of portal it is. (next screen, previous screen, Hyperlink, audio, etc. -- more below)
  - **Be noted** the `DEFAULT_STATE` object defined in every screen is itself not state (since there is no `useState` there) but just a javascript object. This object is passed to the `Screen` component as a `prop` ([see more here](https://react.dev/learn/passing-props-to-a-component)) which then USES it to define the actual state. The actual state is defined inside the generalized `Screen` component.
- Windows on the screen are rendered using the [Window](../src/components/Window.jsx) component. It is in this file that all possible interactions for each window are defined. Each window can be resized (aspect-ratio fixed), moved, and have portals on it. They require a `config` prop that defines their state and behavior. 
- In the `state` object for each screen, there is an array of windows, containing a description of each `window` as they are shown on the screen, including the window sprite (i.e. image file, since these are all screenshots).
- It is within this `window` description that you will also find the portals. That is to say, each window then carries a `map` object that defines the behavior of the portals on that window, on that screen.
- Portal interactions are handled in the [Window.jsx](../src/components/Window.jsx) file, in the `regionClicked` function.
  - Whenever a portal is defined in the screenstate, the portal also gets a `title` property. This property is suffixed with the behavior expected when clicking on this portal.
  - The types of interactions possible on clicking this are, again, defined in the `regionClicked` function. So currently it only supports `--next`, `--previous`, `--hyperlink`, and `--play`. The names are self-explanatory but:
    - `next` is a portal to the next screen,
    - `previous` to the previous.
    - `hyperlink` takes the user to an external link --- the link is defined where the portal is defined in the `url` property.
    - And `play` is about playing an audio. Currently only [Screen4](../src/all-screens/screen4.jsx) has this with Chip's voice note.
  - You can add more kinds of interactions in the `regionClicked` function by expecting other kinds of suffixes.
  - If you want to change the nomenclature, doing so in the `regionClicked` function should suffice. Dont forget to change it then in the `DEFAULT_STATE` object in each screen.
  - For a list of all portals, see the [portals](./portals.md) doc.
- The [ReflectiveCursor](../src/components/ReflectiveCursor.jsx) is a custom cursor that grows larger whenever it runs on top of an interactable item like a control or a portal. **To add this behavior to any object, just add the CSS Class `refsurf-control` to it.**
- The game narrative messages and help messages are managed through the `GameManager` and the message is displayed using the [Reflection](../src/components/Reflection.jsx) Component.
- There is a ScreenSwitcher (also called FastPort in other places in the narrative) that allows you to directly switch between screens that you have already unlocked. On the mac it is the first icon on the right side of the action bar at the top. On Windows this is the taskview icon next to the search bar.
- All stylesheets for each file are in the [src/stylesheets](../src/stylesheets/) directory with the same name as the file (except the stylesheet for index.css).
- The [ScreenTransition.jsx](../src/components/ScreenTransition.jsx) defines black screen that is faded in and out when transitioning between desktops. This is triggered by the `GameManager`. 
- The CustomWindow component is not used anywhere. This was supposed to be the basis of the custom file manager and other custom windows but I never got to it. Im leaving it in so perhaps someone can extend this some day. 
- All icons used are expected to be vectors and are found in the [apple-icons](../src/components/apple-icons/) and [windows-icons](../src/components/windows-icons/) directories. Since they are also react components, they can also get access to the `GameManager` component, should they need it.  
- Custom hooks are a react construct you can learn more about [here](https://react.dev/learn/reusing-logic-with-custom-hooks).
- A note on file extensions: every component file uses the `.jsx` extension. This is a Vite requirement — it only looks for JSX syntax inside `.jsx` files, so a component in a plain `.js` file will fail to build. Imports stay extensionless (`import Screen from "../components/Screen"`), so you never have to write the extension yourself; just remember to *name* new component files `.jsx`.
- The `index.html` lives in the project root (not in `public/`) because that is where Vite expects its entry point. Everything in [public](../public/) — all the desktop screenshots and the [Icons](../public/Icons/) — is copied to the root of the build untouched, which is why the screens can refer to them with paths like `./S1_Pippin/Background.png`.
