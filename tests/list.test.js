const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const { oneBlog, multipleBlogs } = require('../utils/blogs')

test('dummy returns one', () => {
  const blogs = []
  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    assert.strictEqual(listHelper.totalLikes([]), 0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    assert.strictEqual(listHelper.totalLikes(oneBlog), 7)
  })

  test('of a bigger list is calculated correctly', () => {
    assert.strictEqual(listHelper.totalLikes(multipleBlogs), 36)
  })
})

describe('favorite blog', () => {
  assert.deepStrictEqual(
    listHelper.favoriteBlog(multipleBlogs),
    multipleBlogs[2]
  )
})
