export interface CommentObjectInterface{
    id: number,
    projectId: number,
    title?: string,
    value: string,
    createdUserId: string,
    createdDate: Date,
}