import { GridColDef } from "@mui/x-data-grid";
import { Link, Typography } from "@mui/material"
import { BoardColumn } from "../model/board-column";
import { PG } from "../../common/enums/PG";

interface CellType{
    row : BoardColumn
}

export default function BoardColumns() : GridColDef[]{

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
            field : 'boardName',
            headerName : '게시판이름',
            renderCell : ({row} : CellType) =>
                <Typography textAlign="center" sx={{fontSize:"1.5rem"}}> 
                <Link href={`${PG.BOARD}/detail/${row.id}`} >{row.boardName}</Link> 
                </Typography>
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'boardType',
            headerName : '게시판타입',
            renderCell : ({row} : CellType) =>
                <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.boardType}</Typography>
        }
    ]

}