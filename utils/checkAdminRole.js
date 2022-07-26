/**
 * Gives permission to perform an action if the user is an admin
 */
exports.checkAdminRole = (req, res, next) => {
  if (req.user && req.user.role === 'admin') return next();

  next(new Error('You do not have permission to perform this action'));
};
