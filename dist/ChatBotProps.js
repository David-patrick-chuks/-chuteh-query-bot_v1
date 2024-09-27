"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ChatbotProps = {
  userInput: _propTypes["default"].string.isRequired,
  relevantKeywords: _propTypes["default"].arrayOf(_propTypes["default"].string),
  AboutChatBot: _propTypes["default"].string,
  model: _propTypes["default"].string,
  userAvatar: _propTypes["default"].string,
  botAvatar: _propTypes["default"].string,
  userName: _propTypes["default"].string,
  botName: _propTypes["default"].string,
  position: _propTypes["default"].oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  botIcon: _propTypes["default"].oneOfType([_propTypes["default"].element,
  // For React component
  _propTypes["default"].string // For image URL
  ])
};
var _default = exports["default"] = ChatbotProps;