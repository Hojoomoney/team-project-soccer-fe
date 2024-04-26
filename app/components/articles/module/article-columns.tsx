import { GridColDef } from "@mui/x-data-grid";
import { Button, Link, Typography } from "@mui/material"
import { ArticleColumn } from "../model/article-column";
import { PG } from "../../common/enums/PG";
import { useDispatch } from "react-redux";
import { deleteArticle } from "../service/article-service";

interface CellType {
    row: ArticleColumn
}

export default function ArticlesColumns(): GridColDef[] {

    const dispatch = useDispatch()

    return [
        {
            flex: 0.01,
            minWidth: 5,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.id}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 20,
            sortable: false,
            field: 'title',
            headerName: '제목',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> <Link href={`${PG.ARTICLE}/detail/${row.id}`} >
                    {row.title}
                </Link>
                </Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'content',
            headerName: '내용',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.content}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'writerId',
            headerName: '작성자ID',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.writerId}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardId',
            headerName: '게시판ID',
            renderCell: ({ row }: CellType) =>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {row.boardId}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'delete',
            headerName: '비고',
            renderCell: ({ row }: CellType) => 
                <div style={{ cursor: "pointer" , textDecoration: "underline"}}
            className="btn underline-offset-4 
            focus:outline-none focus:ring focus:ring-violet-300
            overflow-hidden relative w-full h-full font-bold -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
            before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-300"
                    onClick={() => {
                        confirm("article을 삭제합니다.")
                        console.log("delete article id : {}", row.id)
                        dispatch(deleteArticle(row.id))
                        location.reload(); //새로고침
                    }
                    }> Delete</div>
            
        }

    ]

}