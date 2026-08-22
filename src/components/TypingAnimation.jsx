import { useState, useEffect } from "react";
import delay from "./delay";
import "../stylesheets/TypingAnimation.css";

/**
 * For usage, view TitleScreen.js
 * @param props = {base, text, onComplete}
 *      base: string
 *      text: array of strings
 *      onComplete: function to callback when done typing all sentences
 *
 *
 * Behavior: Types out the base sentence and then iterates over the `text` array, appending the text part to the base
 *           It types out a sentence, holds, then erases just the `text` part and lets the `base` part stay.
 *           then it types out the next string in the `text` array
 *           once complete, it calls the `onComplete` function from the `props` object.
 *
 * A sentence is the `base` + `text[i]` where `text[i]` is an element of the
 * For an example, look at the way the first screen when the player clicks start that types out the abstract
 * If you just want one line to be typed, pass `text` as an empty array and the sentence as the `base` parameter.
 */

const TypingP = (props) => {
  const [text, setText] = useState("");
  async function typing() {
    const typingSpeed = 30; // lower is faster.

    //type out the base text
    for (let index = 0; index <= props.base.length; index++) {
      setText(props.base.slice(0, index));
      await delay(typingSpeed);
    }

    //type the rest of stuff
    for (let line = 0; line < props.text.length; line++) {
      const element = props.text[line];
      const fullLine = props.base + element;

      // write
      for (let index = 0; index <= element.length; index++) {
        setText(props.base + element.slice(0, index));
        await delay(typingSpeed);
      }

      // delay between each line
      await delay(typingSpeed * 32);

      if (line != props.text.length - 1) {
        // erase if not the last one
        for (let i = fullLine.length; i >= props.base.length; --i) {
          setText(fullLine.slice(0, i));
          await delay(typingSpeed / 10);
        }
      }
    }
    await delay(typingSpeed * 12);
    props.onComplete();
  }

  useEffect(() => {
    typing();
  }, []);

  return <p className="intro-line">{text}</p>;
};

export default TypingP;
