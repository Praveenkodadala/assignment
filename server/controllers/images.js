const TodoItem = require('../models').Image;

const Image = require("../models/index").Image;

module.exports = {
  create(req, res) {
    return Image
      .create({
        content: req.body.content,
        commentMe:req.body.commentMe,
        userId: req.body.userId,             //removed params
      })
      .then(image => res.status(201).send(image))
      .catch(error => res.status(400).send(error));
  },

};
