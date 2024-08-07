const express = require('express');
const {
    mainView, aboutUsView, rulesView, privacyPolicyView, sendReviewsMenuView, displayAllReviews, deleteUser,
    deleteReview, PersonalAreaView, changeImage, sendReview, allReviewsView, getTokenView, moreDetailsView,
    youAreBannedView, requestUnban, requestErrorView, reviewErrorView, readyMadeSitesView, downloadFile,
    fileInfoView, htmlSitesView, javascriptSitesView, fullstackSitesView, nodeJsSitesView, reactJsSitesView,
    favoritesView
} = require('../controller/IndexController');
const AuthRouter = require('./AuthRouter');
const AdminRouter = require('./admin');
const {changePassword} = require("../controller/AuthController");
const {verifyToken} = require('../middlewares/authorization');
const {authenticateJWT} = require('../middlewares/jwtAuth');
const {accessToken} = require('../middlewares/updateAccessToken');
const {refreshToken} = require('../middlewares/updateRefreshToken');
const router = express.Router();

router.get('/', mainView);
router.get('/aboutUs', aboutUsView);
router.get('/rules', rulesView);
router.get('/privacyPolicy', privacyPolicyView);
router.get('/allReviews', displayAllReviews, allReviewsView);
router.get('/accessToken', getTokenView);
router.get('/sendReviews/:id', authenticateJWT, sendReviewsMenuView);
router.get('/PersonalArea', authenticateJWT, PersonalAreaView);
router.get('/moreDetails',  moreDetailsView);
router.get('/youAreBanned', authenticateJWT, youAreBannedView);
router.get('/requestError', requestErrorView);
router.get('/reviewError', reviewErrorView);
router.get('/readyMadeSites', readyMadeSitesView);
router.get('/readyMadeSites/html-css-js', htmlSitesView);
router.get('/readyMadeSites/javascript', javascriptSitesView);
router.get('/readyMadeSites/nodeJs', nodeJsSitesView);
router.get('/readyMadeSites/reactJs', reactJsSitesView);
router.get('/readyMadeSites/fullstack', fullstackSitesView);
router.get('/readyMadeSites/favorites', favoritesView);
router.get('/fileInfo/:id', fileInfoView);

router.post('/sendReviews/:id', authenticateJWT, sendReview);
router.post('/upload/:id', authenticateJWT, verifyToken, changeImage);
router.post('/deleteAccount/:id', authenticateJWT, deleteUser, verifyToken, accessToken);
router.post('/deleteReview/:id', authenticateJWT, deleteReview);
router.post('/changePassword/:id', authenticateJWT, changePassword);
router.post('/accessToken', accessToken);
router.post('/refreshToken', refreshToken);
router.post('/requestUnban/:id', authenticateJWT, requestUnban);
router.post('/downloadFile/:id', authenticateJWT, downloadFile);

router.use('/auth', AuthRouter);
router.use('/admin', AdminRouter);

module.exports = router;
