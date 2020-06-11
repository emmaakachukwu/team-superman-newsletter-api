const newsSchema = require("./../models/newsSchema");

const saveNews = async (req, res, next) => {
    let newsContent = new newsSchema({
        news: req.body.news
    })
    if ( !newsContent.news ) {
        res.status(400).send({
            status: false,
            message: "Field is required"
        });
    } else {
        newsContent.save();
        res.status(200).send({
            status: true,
            message: "News saved successfully"
        })
    }
}

module.exports = saveNews;