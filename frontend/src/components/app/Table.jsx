import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const getMuiTheme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            borderLeft: "1px solid #E6E6E8", 
            borderTop: "1px solid #E6E6E8",
            
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid #E6E6E8",
            borderRight: "1px solid #E6E6E8",
          },
        },
      },
  
      MUIDataTableHeadCell: {
        styleOverrides: {
          root: {
            fontSize: "1rem !important",
            fontWeight: "500 !important",
            fontFamily: '"Mariupol", sans-serif !important', 
          },
        },
      },
  
      MUIDataTableBodyCell:{
          styleOverrides: {
              root: {
                  fontFamily: '"Mariupol", sans-serif !important', 
              }
          }
      },
      
    },
});


const Table = (props) => {
    
    const options = {
        selectableRows: "none",
        responsive: 'standard',
        pagination: false,
        download: false, 
        filter: false,   
        print: false,   
        search: false,  
        viewColumns: false,
        sort: false
      };


    return (
      <ThemeProvider theme={getMuiTheme}>
      <div className="table-wrapper">
        <MUIDataTable data={props.data} columns={props.columns} options={options} />
      </div>
      </ThemeProvider>
    );
};

export default Table;
