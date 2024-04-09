import { GridColDef } from "@mui/x-data-grid";
import { Link, Typography } from "@mui/material"
import { ArticleColumn } from "../model/article-column";
import { PG } from "../../common/enums/PG";

interface CellType{
    row : ArticleColumn
}

export default function ArticlesColumns() : GridColDef[]{

    return [
        {
            flex : 0.01,
            minWidth : 5,
            sortable : false,
            field : 'id',
            headerName : 'No.',
            renderCell : ({row} : CellType) =>
                <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.id}</Typography>
        },
        {
            flex : 0.04,
            minWidth : 20,
            sortable : false,
            field : 'title',
            headerName : '제목',
            renderCell : ({row} : CellType) =>
                <Typography textAlign="center" sx={{fontSize:"1.5rem"}}> <Link href={`${PG.ARTICLE}/detail/${row.id}`} > 
                {row.title}
                </Link>
                </Typography>
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'content',
            headerName : '내용',
            renderCell : ({row} : CellType) =>
                <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.content}</Typography>
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'writerId',
            headerName : '작성자ID',
            renderCell : ({row} : CellType) =>
                <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.writerId}</Typography>
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'boardId',
            headerName : '게시판ID',
            renderCell : ({row} : CellType) =>
                <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.boardId}</Typography>
        }
    ]

}