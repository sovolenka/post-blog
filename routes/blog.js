const express = require("express");
const router = express.Router();
const Post = require("../models/postModel");
const path = require("path");

let viewsPath = path.join(__dirname, "../views");
let createPagePath = (page) => path.join(viewsPath, `${page}.ejs`);

router.get("/", async (_, res) => {
  res.render("index", { title: "Головна сторінка" });
});

router.get("/add-post", async (_, res) => {
  const viewPath = createPagePath("update-post");
  console.log(viewPath);
  const post = { title: "", author: "", description: "" };
  res.render(viewPath, {
    post,
    title: "Додайте новий пост",
    buttonName: "Додати",
  });
});

router.post("/add-post", async (req, res) => {
  console.log(req.body);
  let { title, author, description } = req.body;
  let newPost = new Post({ title, author, description });
  newPost
    .save()
    .then(() => res.redirect("/posts"))
    .catch((_) => console.log("Saving error! "));
});

router.get("/posts", async (_, res) => {
  Post.find()
    .then((posts) =>
      res.render(createPagePath("posts"), { posts, title: "Всі пости" })
    )
    .catch((_) => console.log("Finding error! "));
});

// delete post
router.post("/delete-post/:id", async (req, res) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id)
    .then(() => res.redirect("/posts"))
    .catch((_) => console.log("Deleting error!"));
});

router.get("/edit-post/:id", async (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then((post) =>
      res.render(createPagePath("update-post"), {
        post,
        title: "Редагуйте свій пост",
        buttonName: "Редагувати",
      })
    )
    .catch((_) => console.log("Editing error!"));
});

router.post("/edit-post/:id", async (req, res) => {
  const id = req.params.id;
  const { title, author, description } = req.body;
  Post.findByIdAndUpdate(id, { title, author, description })
    .then(() => res.redirect("/posts"))
    .catch((_) => console.log("Updating error!"));
});

module.exports = router;
