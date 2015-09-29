module.exports = {
  plugins: {
    sauce: {
      browsers: [{
          browserName: 'chrome'
        }, {
          browserName: 'internet explorer'
        }, {
          browserName: 'firefox'
        }, {
          browserName: 'safari'
        }
      ],
    //   browsers: ['default'
    // browsers: [{
    //   "browserName": "internet explorer",
    //   "platform": "Windows 10",
    //   "version": "11"
    // }, {
    //   "browserName": "microsoftedge",
    //   "platform": "Windows 10",
    //   "version": ""
    // }, {
    //   "browserName": "safari",
    //   "platform": "OS X 10.10",
    //   "version": "8"
    // }, {
    //   "browserName": "chrome",
    //   "platform": "OS X 10.10",
    //   "version": "dev"
    // }, {
    //   "browserName": "firefox",
    //   "platform": "OS X 10.10",
    //   "version": "dev"
    // }]
  },
  local: {
    disabled: true,
    browsers: ['chrome']
  }
}
};
