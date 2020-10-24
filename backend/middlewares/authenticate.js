/**
 * Authenticate
 *
 * @usage
 * const express = require('express');
 * const { isLogin } = require('../middlewares/authenticate');
 * const router = express.Router();
 * router.get('/', isLogin, (req, res, next) => { ... });
 *
 * @package W3LabKr
 * @subpackage Node_Express_Init
 * @since Node Express Init 1.0.0
 */
const authenticate = {};

authenticate.isLogin = function (req, res, next) {
  // ...
  next();
};

authenticate.isAdmin = function (req, res, next) {
  // ...
  next();
};

module.exports = authenticate;
