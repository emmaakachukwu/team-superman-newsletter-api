const app = require("./src/app");
const news = require("./src/routes/news");

app.listen(8000, () => {
  console.log("running on port 8000");
  console.log("--------------------------");
});

app.use('/api', news);