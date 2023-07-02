const denyOtherMethods = (req, res, next) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  next();
};

module.exports = {
  denyOtherMethods,
};
