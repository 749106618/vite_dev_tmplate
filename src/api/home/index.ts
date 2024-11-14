import { http } from '../base.ts'
import type { Posts, Comments } from './types'

export function getPosts() {
  return http.get<Posts>('/posts')
}
export function sendComments(comment: Comments) {
  return http.post('/comments', comment)
}
