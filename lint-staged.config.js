module.exports = {
  "**/*.(ts|tsx)": () => "bunx tsc --noEmit",

  "**/*.(ts|tsx|js)": (filenames) => [
    `bunx eslint --fix ${filenames.join(" ")}`,
    `bunx prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.(md|json)": (filenames) =>
    `bunx prettier --write ${filenames.join(" ")}`,
};
