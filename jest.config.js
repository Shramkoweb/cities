module.exports = {
  'transform': {
    '^.+\\.tsx?$': `ts-jest`,
    '^.+\\.js?$': `babel-jest`,
  },
  'snapshotSerializers': [`enzyme-to-json/serializer`],
  'testRegex': `.test.(js?|jsx?|tsx?)$`,
  'moduleFileExtensions': [
    `ts`,
    `tsx`,
    `js`,
    `jsx`,
    `json`,
    `node`
  ],
};
