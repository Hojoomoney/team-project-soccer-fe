export interface IArticle{
    id? : number
    title? : string
    content? : string
    regDate? : string
    modDate? : string
    writerId? : number
    boardId? : number
    message? : string
    json? : IArticle
    array? : IArticle[]
}