const blog = require('../models/blog')
const _ = require('lodash')

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
  const result = []
  blogs.map((blog) => {
    if (blog.author in result) {
      result.count += 1
    } else {
      result.concat({ author: blog.author, count: 1 })
    }
  })
  console.log(result)
  return _.max(result)
}

module.exports = {
  dummy,
  favoriteBlog,
  mostBlogs,
  totalLikes
}
