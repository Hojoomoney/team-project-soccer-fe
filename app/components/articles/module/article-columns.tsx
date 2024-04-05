import { GridColDef } from "@mui/x-data-grid";

export default function ArticlesColumns() : GridColDef[]{

    return [
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'id',
            headerName : 'No.',
            renderCell(){
                return <></>
            }
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'title',
            headerName : '제목',
            renderCell(){
                return <></>
            }
        },
        {
            flex : 0.04,
            minWidth : 30,
            sortable : false,
            field : 'content',
            headerName : '내용',
            renderCell(){
                return <></>
            }
        }
    ]

}