"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const router = (0, _express.Router)();
router.get('/test', (req, res) => {
  try {
    console.log('test');
  } catch (error) {
    console.log('test');
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvdXNlci5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsc0JBQWY7QUFFQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxFQUFvQixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUNoQyxNQUFJO0FBQ0ZDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDRCxHQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDRDtBQUVGLENBUEQ7ZUFTZUwsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyfSBmcm9tICdleHByZXNzJztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcblxucm91dGVyLmdldCgnL3Rlc3QnLCAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpICBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpXG4gIH1cbiAgXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19