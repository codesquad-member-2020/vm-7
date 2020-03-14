"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _chalk = _interopRequireDefault(require("chalk"));

var _detectPort = _interopRequireDefault(require("detect-port"));

var _user = _interopRequireDefault(require("./api/user.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// api
// import machine from './api/machine'
// utils
// server setup
let port;

async function configServer() {
  port = 3000 || (await (0, _detectPort.default)(3000));
}

configServer(); // express setup

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json()); // express routers
// app.use('/machine', machine);

app.use('/user', _user.default); // start

app.listen(port, () => console.log(`${_chalk.default.white.bgHex('#41b883').bold(`VENDING MACHINE SERVER IS RUNNING ON ${port}`)}`));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsicG9ydCIsImNvbmZpZ1NlcnZlciIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwidXNlciIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJjaGFsayIsIndoaXRlIiwiYmdIZXgiLCJib2xkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOzs7O0FBREE7QUFFQTtBQUVBO0FBRUE7QUFDQSxJQUFJQSxJQUFKOztBQUNBLGVBQWVDLFlBQWYsR0FBOEI7QUFDNUJELEVBQUFBLElBQUksR0FBRyxTQUFTLE1BQU0seUJBQVcsSUFBWCxDQUFmLENBQVA7QUFDRDs7QUFDREMsWUFBWSxHLENBRVo7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHLHVCQUFaO0FBQ0FBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLG9CQUFSO0FBQ0FELEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBV0MsVUFBWCxDQUFzQjtBQUFFQyxFQUFBQSxRQUFRLEVBQUU7QUFBWixDQUF0QixDQUFSO0FBQ0FKLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxvQkFBV0csSUFBWCxFQUFSLEUsQ0FFQTtBQUNBOztBQUNBTCxHQUFHLENBQUNDLEdBQUosQ0FBUSxPQUFSLEVBQWlCSyxhQUFqQixFLENBRUE7O0FBQ0FOLEdBQUcsQ0FBQ08sTUFBSixDQUFXVCxJQUFYLEVBQWlCLE1BQ2ZVLE9BQU8sQ0FBQ0MsR0FBUixDQUNHLEdBQUVDLGVBQU1DLEtBQU4sQ0FDQUMsS0FEQSxDQUNNLFNBRE4sRUFFQUMsSUFGQSxDQUVNLHdDQUF1Q2YsSUFBSyxFQUZsRCxDQUVxRCxFQUgxRCxDQURGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgZGV0ZWN0UG9ydCBmcm9tICdkZXRlY3QtcG9ydCc7XG5cbi8vIGFwaVxuaW1wb3J0IHVzZXIgZnJvbSAnLi9hcGkvdXNlci5qcydcbi8vIGltcG9ydCBtYWNoaW5lIGZyb20gJy4vYXBpL21hY2hpbmUnXG5cbi8vIHV0aWxzXG5cbi8vIHNlcnZlciBzZXR1cFxubGV0IHBvcnQ7XG5hc3luYyBmdW5jdGlvbiBjb25maWdTZXJ2ZXIoKSB7XG4gIHBvcnQgPSAzMDAwIHx8IChhd2FpdCBkZXRlY3RQb3J0KDMwMDApKTtcbn1cbmNvbmZpZ1NlcnZlcigpO1xuXG4vLyBleHByZXNzIHNldHVwXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuXG4vLyBleHByZXNzIHJvdXRlcnNcbi8vIGFwcC51c2UoJy9tYWNoaW5lJywgbWFjaGluZSk7XG5hcHAudXNlKCcvdXNlcicsIHVzZXIpO1xuXG4vLyBzdGFydFxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PlxuICBjb25zb2xlLmxvZyhcbiAgICBgJHtjaGFsay53aGl0ZVxuICAgICAgLmJnSGV4KCcjNDFiODgzJylcbiAgICAgIC5ib2xkKGBWRU5ESU5HIE1BQ0hJTkUgU0VSVkVSIElTIFJVTk5JTkcgT04gJHtwb3J0fWApfWAsXG4gICksXG4pOyJdfQ==