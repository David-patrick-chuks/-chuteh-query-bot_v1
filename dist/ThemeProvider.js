"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/ThemeProvider.jsx

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "theme-provider"
  }, children);
};
var _default = exports["default"] = ThemeProvider; // Default export