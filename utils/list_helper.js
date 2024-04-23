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
  const favorite = {}
  blogs.reduce((acc, curVal) => {
    console.log('INFO', acc, curVal)
    if (curVal.likes > acc.likes) {
      favorite = curVal
    }
  })
  return favorite
}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
