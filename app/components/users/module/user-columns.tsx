import { Link, Typography } from "@mui/material"
import {GridRowId, GridColDef} from "@mui/x-data-grid"
import { UserColumn } from "../model/user-column"
import { PG } from "../../common/enums/PG"
import {MyTypography} from "../../common/style/cell"

interface CellType{
    row : UserColumn
}

export default function UserColumns() : GridColDef[] {

    return([
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'id',
            headerName : 'No.',
            renderCell : ({row} : CellType) => MyTypography(row.id, "1.2rem")
            
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'username',
            headerName : '아이디',
            renderCell : ({row} : CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.2rem"}}><Link href={`${PG.USER}/detail/${row.id}`} > 
             {row.username}
            </Link>
            </Typography>
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'password',
            headerName : '비밀번호',
            renderCell : ({row} : CellType) => MyTypography(row.password, "1.2rem")
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'email',
            headerName : '이메일',
            renderCell : ({row} : CellType) => MyTypography(row.email, "1.2rem")
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'name',
            headerName : '이름',
            renderCell : ({row} : CellType) => MyTypography(row.name, "1.2rem")
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'phone',
            headerName : '전화번호',
            renderCell : ({row} : CellType) => MyTypography(row.phone, "1.2rem")
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'job',
            headerName : '직업',
            renderCell : ({row} : CellType) => MyTypography(row.job, "1.2rem")
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'regDate',
            headerName : '생성일',
            renderCell : ({row} : CellType) => MyTypography(row.regDate, "1.2rem")
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'modDate',
            headerName : '변경일',
            renderCell : ({row} : CellType) => MyTypography(row.modDate, "1.2rem")
        }

    ])
}