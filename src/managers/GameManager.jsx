import { createContext, useEffect, useState } from "react";
import ScreenSwitcher from "../components/ScreenSwitcher";
import ScreenTransition from "../components/ScreenTransition";
import Reflection from "../components/Reflection";
import ReflectiveCursor from "../components/ReflectiveCursor";
import delay from "../components/delay";


// All screens are unlocked if in development mode. 
const DEV = import.meta.env.DEV;
const LOCAL_STORAGE_KEYS = {
  SCREEN_INDEX: "active_screen",
  SAVESTATE: "RS_PLAYABLE_SAVEFILE",
};
const DEFAULT_STATE = {
  screens: [
    {
      locked: false,
      thumbnail: "./S1_Pippin/Background.png",
    },
    {
      locked: !DEV,
      thumbnail: "./S2_Matt/Background.png",
    },
    {
      locked: !DEV,
      thumbnail: "./S3_Rilla/Background.jpeg",
    },
    {
      locked: !DEV,
      thumbnail: "./S4_Chip/Background.jpg",
    },
    {
      locked: !DEV,
      thumbnail: "./S5_Kalervo/Background.jpeg",
    },
    {
      locked: !DEV,
      thumbnail: "./S6_Enric/Background.jpg",
    },
    {
      locked: !DEV,
      thumbnail: "./S7_Femke/Background.jpeg",
    },
    {
      locked: !DEV,
      thumbnail: "./S8_Vadim/Background.jpeg",
    },
    {
      locked: !DEV,
      thumbnail: "./S9_Shahrom/Background.png",
    },
  ],
};

const GameManager = createContext(null);
const GameManagementProvider = (props) => {
  // #region State and Effect
  var chips_voicenote = new Audio("./S4_Chip/voicenote.mp3");


  const [screens, updateScreens] = useState(DEFAULT_STATE.screens);
  const [activeScreen, setActiveScreen] = useState(-1);
  const [switching, setSwitching] = useState(false);
  const [transitioningAlpha, settransitioningAlpha] = useState(0);
  const [showReflection, setShowReflection] = useState(false);
  const [reflectionMessage, setReflectionMessage] = useState();
  

  const [narrative, updateNarrative] = useState([
    //Pippin
    [
      {
        message: "Hey OVER HERE! Click this!",
        read: false,
      },
      {
        message: "You finally came through! Good, I need your help",
        read: false,
      },
      {
        message:
          "We must find our way through these designer's thoughts or I'll be lost",
        read: false,
      },
      {
        message:
          "You can move the windows and resize them. I have lain portals across the screen on some windows. They connect two designers",
        read: false,
      },
      {
        message:
          "Each portal is significant to the designer's process. So try to guess their next logical step",
        read: false,
      },
      {
        message:
          "There are also other portals, for you to find out more about the work or the designer",
        read: false,
      },
      {
        message:
          "This one seems to be on the verge of committing his thoughts to git; interesting read...",
        read: false,
      },
    ],

    //Matt
    [
      { message: "Okay, you're getting the hang of it.", read: false },
      {
        message:
          "You can revisit a previous one from the Fastport (first icon on the top right there) - try it out.",
        read: false,
      },
      { message: "Try to figure out this one, its very similar", read: false },
    ],

    //Rilla
    [
      {
        message:
          "We're making good progress, but this will be a tough one... There's a lot on the screen",
        read: false,
      },
      {
        message:
          "Some of the windows are minimized. Move to the bottom of the screen and use the dock to maximize or minimize them.",
        read: false,
      },
      {
        message:
          "The next designer has been talking to this one, maybe there's a clue in the chats...",
        read: false,
      },
    ],

    //Chip
    [
      {
        message:
          "I'm sorry to make you do this... going through people's screens and chat history...",
        read: false,
      },
      {
        message:
          "But come to think of it, its much like MDM (Method for Design Materialization).",
        read: false,
      },
      {
        message:
          "MDM is like a chat with whoever is looking at the project in the future and analyzing it for insights or theory",
        read: false,
      },
      {
        message:
          "Thats because so much is missed when we only look at the end product... But its history, the development PROCESS... ",
        read: false,
      },
      {
        message:
          "Capturing it allows for analysis, for reflection. It allows for Materialization - much like what you are helping me here with",
        read: false,
      },
      {
        message:
          "Catching design in the moment, and creating material conditions that invite reflection.",
        read: false,
      },
      {
        message: "Have a look at what ALL of the TEAM members think",
        read: false,
      },
    ],

    //Kalervo
    [
      {
        message:
          "The way I am communicating is not very characteristic of Designs, this is not how Backtalk is supposed to work, but... ",
        read: false,
      },
      {
        message: "The way you are responding is very productive.",
        read: false,
      },
      {
        message:
          "This is the kind of engagement you need ALL THE TIME with your process journalling",
        read: false,
      },
    ],

    //Enric
    [
      {
        message:
          "I know it's getting harder but you've been at this long and we're so close!",
        read: false,
      },
      {
        message:
          "But this one literally looks like a portal... you just need to find it",
        read: false,
      },
    ],

    //Femke
    [
      {
        message:
          "Unlike Git, DOCX (and other WYSIWYG systems) is very opaque - it doesnt leave many traces...",
        read: false,
      },
      {
        message:
          "Central to Reflection and Materialization in MDM is the git commit - a quanta of design work",
        read: false,
      },
      {
        message:
          "The affordability to choose what goes in a commit, its explicitness, and temporal permanence is key!",
        read: false,
      },
      {
        message:
          "But here, for instance, the AUTOSAVE feature is pretty much the anti-thesis of a git commit",
        read: false,
      },
    ],

    //Vadim
    [
      { message: "That's better...", read: false },
      {
        message:
          "This is a designer and programmer who broke his existing methods to incorporate MDM, ",
        read: false,
      },

      {
        message:
          "Lots of interesting stuff happening here. No hints for this one, you dont need any ADDed POWER-UPS, you're doing too well.",
        read: false,
      },
    ],

    //Shahrom
    [
      { message: ".............oh?", read: false },
      { message: "This is about me...", read: false },
      {
        message: "This feels so meta... Like you, I have come far too...",
        read: false,
      },
      {
        message: "Hmmm... but that repo looks way older, help me sync with it",
        read: false,
      },
    ],
  ]);

  /**
   * When a screen is first accessed,
   * The narration starts with the first message and sets this to true
   * This allows for the GameManager to continue with the narration until the last narration message.
   * Once the last message is sent this is set to false
   */
  const [narrating, setNarrating] = useState(false);

  // This is for looping the help and tips of the system. the value loops over
  // see the SendHelp function
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    try {
      if (activeScreen !== null && activeScreen > -1) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, activeScreen);
        if (activeScreen > 8) {
          resetScreenLocks();
          resetNarrative();
        }
      }
    } catch (error) {
      console.log("DEBUG:: Local storage failed.\n" + error);
    }
  }, [activeScreen]);

  useEffect(() => {
    if (narrating && !showReflection) {
      // if narrating and reflection has been hidden
      Narrate(activeScreen);
    }
  }, [narrating, showReflection]);

  // #endregion

  // #region Screen Changing

  async function transitionIn() {
    const transition_step = 0.1;
    for (let index = 0; index <= 10; index++) {
      settransitioningAlpha(transition_step * index);
      await delay(30);
    }
  }

  async function transitionOut() {
    const transition_step = 0.1;
    for (let index = 10; index >= 0; index--) {
      settransitioningAlpha(transition_step * index);
      await delay(30);
    }
  }

  async function nextScreen() {
    setNarrating(false);
    setShowReflection(false);
    chips_voicenote.pause();


    await transitionIn();
    if (activeScreen === 10) {
      setActiveScreen(0);
    } else {
      setActiveScreen(activeScreen + 1);
    }
    await transitionOut();
  }

  async function previousScreen() {
    setNarrating(false);
    setShowReflection(false);
    chips_voicenote.pause();


    await transitionIn();

    if (activeScreen === 0) {
      setActiveScreen(8);
    } else {
      setActiveScreen(activeScreen - 1);
    }

    await transitionOut();
  }

  function jumpToScreen(index) {
    if (index == null) return;

    if (index >= 0 && index <= 8) {
      transitionIn();
      setActiveScreen(index);
      if (switching) hideSwitcher();
      transitionOut();
    }
  }

  // #endregion

  // #region Switcher Methods
  function showSwitcher() {
    setSwitching(true);
    setNarrating(false);
    setShowReflection(false);
  }

  function hideSwitcher() {
    setSwitching(false);
    if (activeScreen <= 8) Narrate(activeScreen);
  }

  function unlockScreen(index) {
    // Unlocks screen in switcher
    if (index > 0 && index <= 8 && screens[index].locked) {
      const updated_screens_state = screens;
      updated_screens_state[index].locked = false;
      updateScreens(updated_screens_state);
    }
  }

  function resetScreenLocks() {
    // lock all screens when game ends
    const updated_screens_state = screens;
    //leave the 0th unlocked.
    for (let index = 1; index < screens.length; index++) {
      updated_screens_state[index].locked = true;
    }
    updateScreens(updated_screens_state);
  }
  // #endregion

  // #region Reflection Narrative and Help Tips
  async function sendReflectionMessage(msg, wait = 0) {
    if (wait > 0) {
      await delay(wait);
    }
    if (msg) {
      setReflectionMessage(msg);
    }
    setShowReflection(true);
  }

  function SendHelp() {
    const tips = [
      "Click on this bubble to close.",
      "Each window can be moved and resized",
      "Portals are distributed on each window. Use them to unlock access to designers.",
      "The cursor grows larger on portals and other interactives. Use this to search for portals",
      "Find the FastPort - it will help you move between unlocked designers.",
      "For all the Mac screens, move the cursor to the bottom of the page to view the dock.",
      "Help for windows is in the bottom-left section, the FastPort is near it too.",
      "Help for Mac is on my right. The FastPort is on my left.",
      "You can use the ESC key to close the FastPort.",
      "I am abstract, on the verge of being lost. I need your help to formulate!",
    ];

    if (!narrating) {
      // dont show help tips while it is narrating
      sendReflectionMessage(tips[tipIndex]);
      setTipIndex((tipIndex + 1) % tips.length);
    }
  }

  /**
   * narration starts with the start button on the title screen
   * It continues whenever a new screen is unlocked. Each screen calls its own.
   * Resuming loads a screen and so that screen also takes care of itself.
   *
   *
   * MSA: maybe the screen_idx parameter can be done away with and we can just use activeScreen state...
   */
  async function Narrate(screen_idx) {
    // takes screen index and narrates unread messages
    for (let msg = 0; msg < narrative[screen_idx]?.length; msg++) {
      if (!narrative[screen_idx][msg].read) {
        setNarrating(true);

        // delay to account for the message scrolling up when the user clicks on it
        // sliding out takes 200ms when step size is 0.1vh and distance is 10vh.
        await sendReflectionMessage(narrative[screen_idx][msg].message, 600);

        if (msg !== narrative[screen_idx].length - 1) {
          // Mark all messages read except the last one, since it is a hint.
          const new_narr = narrative;
          new_narr[screen_idx][msg].read = true;
          updateNarrative(new_narr);
        } else {
          setNarrating(false);
        }
        return;
      }
    }
    // if all messages of said screen have already been read, it is the end of the narration.
    setNarrating(false); // MSA: this might be unreachable code... not risking removing it last minute lol .
  }

  // Called on game over
  function resetNarrative() {
    const reset_narr = narrative;
    for (let index = 0; index < reset_narr.length; index++) {
      for (let msg = 0; msg < reset_narr[index].length; msg++) {
        reset_narr[index][msg].read = false;
      }
    }
    updateNarrative(reset_narr);
  }
  // #endregion

  return (
    <GameManager.Provider
      value={{
        // State
        activeScreen,
        //vars
        chips_voicenote,

        //Methods
        previousScreen,
        nextScreen,
        unlockScreen,
        jumpToScreen,
        showSwitcher,
        sendReflectionMessage,
        SendHelp,
        Narrate,
      }}
    >
      <Reflection
        message={reflectionMessage}
        show={showReflection}
        setShow={setShowReflection}
      />
      <ScreenTransition alpha={transitioningAlpha} />

      <ScreenSwitcher
        show={switching}
        screens={screens}
        onClick={jumpToScreen}
        close={hideSwitcher}
      />
      {props.children}
      <ReflectiveCursor />
    </GameManager.Provider>
  );
};

export default GameManager;
export { GameManagementProvider, LOCAL_STORAGE_KEYS };
