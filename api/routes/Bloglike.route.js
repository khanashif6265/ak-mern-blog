import express from 'express'
import { doLike, likeCount } from '../controllers/BlogLike.controller.js'
import { authenticate } from '../middleware/authenticate.js'

const BlogLikeRoute = express.Router()

BlogLikeRoute.post('/do-like', authenticate, doLike)

// 🔧 Split into two routes to avoid optional param crash
BlogLikeRoute.get('/get-like/:blogid', likeCount)
BlogLikeRoute.get('/get-like/:blogid/:userid', likeCount)

export default BlogLikeRoute
