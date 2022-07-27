const auth = function (req, res, next) {
  const { authorization } = req.headers;
  const token = authorization ? authorization.split(' ')[1] : null;

  if (!token || token !== 'mysecrettoken') {
    return res.status(401).json({
      error: 'You are not authorized'
    });
  }

  next();
}

module.exports = auth;