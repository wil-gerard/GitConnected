"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("../middleware/auth"));
var passport_1 = __importDefault(require("passport"));
var authControllers_1 = require("../controllers/authControllers");
var router = express_1.default.Router();
var frontendSite = "https://www.gitconnect.dev";
// --- Discord ---
router.get('/auth/discord', passport_1.default.authenticate('discord'));
router.get('/auth/discord/callback', passport_1.default.authenticate('discord', {
    failureRedirect: frontendSite,
    session: true,
}), function (req, res) {
    var userDetails = req.user;
    res.redirect("".concat(frontendSite, "/profile?id=").concat(userDetails._id));
});
// --- Twitter ---
router.get('/auth/twitter', auth_1.default, passport_1.default.authorize('twitter'));
router.get('/auth/twitter/callback', auth_1.default, passport_1.default.authorize('twitter', {
    failureRedirect: frontendSite,
    session: true,
}), function (req, res) {
    res.redirect("".concat(frontendSite, "/profile"));
});
// --- GitHub ---
router.get('/auth/github', auth_1.default, passport_1.default.authorize('github'));
router.get('/auth/github/callback', auth_1.default, passport_1.default.authorize('github', {
    failureRedirect: frontendSite,
    session: true,
}), function (req, res) {
    res.redirect("".concat(frontendSite, "/profile"));
});
router.delete('/auth/logout', auth_1.default, authControllers_1.logout);
exports.default = router;
//# sourceMappingURL=authRouter.js.map