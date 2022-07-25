const { validationResult } = require('express-validator');

exports.isValid = function (view) {
  return (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render(view, {
        previous: req.body,
        errors: errors.array().map((el) => ({ param: el.param, msg: el.msg }))
      });
    }

    next();
  };
};
