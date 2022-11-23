const withAuth = (req, res, next) => {
// If not logged in continue to login page
    if(!req.session.user_id) {
        res.redirect("/login");
// Continue if logged in
    } else {
        next();
    }
};

module.exports = withAuth;