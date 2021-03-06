const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  notes: {type: String},
  datePub: { type: Date}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;