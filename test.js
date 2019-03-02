const mongoose = require('mongoose')
const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

/*Post.create({
  title: 'My second blog post',
  description: 'Second blog post desciption',
  content: 'Lorem ipsum content'
}, (error, post) => {
  console.log(error, post)
})*/

Post.find({}, (error, posts) => {
  console.log(error, posts)
})

/*Post.findById("5c79294fb64503b15f09c786", (error, post) => {
  console.log(error, post)
})*/

/*Post.findByIdAndUpdate("5c79233347cdc1b0d90e3959", {
  title: 'My first blog post title lorem ipsum'
}, (error, post) => {
console.log(error, post)
})*/
