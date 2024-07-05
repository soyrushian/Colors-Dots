const styles = {
    reset: "\x1b[0m",
    reverse: "\x1b[7m",
    font: {
        bold: "\x1b[1m",
        italic: "\x1b[4m",
        dark: "\x1b[2m",
        blink: "\x1b[5m",
        hidden: "\x1b[8m"
    },
    text: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        gray: "\x1b[90m",
        crimson: "\x1b[38m"
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        gray: "\x1b[100m",
        crimson: "\x1b[48m"
    }
};

export default function getStyle(key) {
  const parts = key.split("-"); // Split the key into parts: ["text", "black"]
  let currentLevel = styles; // Start at the root of the object

  for (const part of parts) {
    if (currentLevel.hasOwnProperty(part)) {
      currentLevel = currentLevel[part]; // Move to the next level
    } else {
      return ""; // Key not found
    }
  }

  return currentLevel;
}
  