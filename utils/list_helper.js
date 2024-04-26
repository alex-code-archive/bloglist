const blog = require('../models/blog')
var _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0
  } else if (blogs.length === 1) {
    return blogs[0].likes
  } else {
    return blogs.reduce((acc, curVal) => acc + curVal.likes, 0)
  }
}

const favoriteBlog = (blogs) => {
  let mostLikes = 0
  let favorite = {}
  blogs.map((blog) => {
    if (blog.likes > mostLikes) {
      mostLikes = blog.likes
      favorite = blog
    }
  })
  return favorite
}

const mostBlogs = (blogs) => {
  const counts = _.countBy(blogs, 'author')
  const temp = Object.entries(counts).map((item) => ({
    author: item[0],
    blogs: item[1]
  }))
  return _.maxBy(temp, (item) => item.author)
}

module.exports = {
  dummy,
  favoriteBlog,
  mostBlogs,
  totalLikes
}
