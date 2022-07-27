/**
 * Utility for removing try/catch boilerplate
 */
exports.catchAsync = (cb) => (req, res, next) => cb(req, res, next).catch(next);
