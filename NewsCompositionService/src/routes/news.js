const router = require("express").Router();
const saveNews = require("./../controllers/news");

router.post('/save-news', saveNews);

module.exports = router;