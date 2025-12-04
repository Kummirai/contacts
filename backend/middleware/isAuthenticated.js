const isAuthenticated = (req, res, next) => {
  // Check if user is authenticated
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to route
  }

  console.log(`User not authenticated!`);
  // User is not authenticated
  return res.status(401).json({
    success: false,
    message: "Please log in first!",
    authenticated: false,
  });
};

export default isAuthenticated;
