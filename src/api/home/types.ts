export interface Posts {
  id: number
  title: string
  author: string
}
export interface Comments {
  body: string
  postId: string
}
