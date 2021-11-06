module.exports = {
  displayName: "ui-atoms-layout",
  preset: "../../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../../coverage/libs/ui/organisms/layout"
}
