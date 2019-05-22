import Layout from '../components/MyLayout'
import UserList from '../components/UserList'
import NavBar from '../components/NavBar';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../styles/theme';



const Users = (props) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar />
    <UserList />
  </MuiThemeProvider>
)


export default Users