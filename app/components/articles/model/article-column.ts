export interface ArticleColumn{
    id? : number  // ?는 자바의 Optional 없어도 된다라는 뜻
    title? : string
    content? : string
    writerId? : number
    boardId? : number
}