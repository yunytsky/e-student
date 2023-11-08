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

const ExamSchedule = () => {
    const columns = [
        {
          label: 'Назва предмету',
          name: 'Title',
          options: {
          },
        },
        {
          name: 'Тип контролю',
          options: {
            print: false,
          },
        },
        {
          name: 'Дата',
          options: {
            print: false,
          },
        },
        {
          name: 'Час',
          options: {
          },
        },
        {
          name: 'Авдиторія',
          options: {
          },
        },
      ];
    
      const data = [
        ['Дискретна математика', 'Залік', '10/12/2023', "09:30", 206],
        ['Додаткові розділи C++', 'Залік', '12/12/2023', "08:30", 204],
        ["Об'єктно орієнтоване програмування", 'Екзамен', '14/12/2023', "09:30", 106],
        ['Англійська мова', 'Залік', '15/12/2023', "09:30", 206],
        ['Теорія ймовірностей', 'Екзамен', '18/12/2023', "10:30", 208],

      ];
    
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
    

    return(
        <div className="exam-schedule">
       <ThemeProvider theme={getMuiTheme}>
        <MUIDataTable data={data} columns={columns} options={options} />
      </ThemeProvider>
      </div>
    );
};

export default ExamSchedule;