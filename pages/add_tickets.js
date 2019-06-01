import Layout from '../components/MyLayout'
import UserList from '../components/UserList'
import NavBar from '../components/NavBar';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../styles/theme';
import UserHeader from '../components/UserDetails/UserHeader';
import UserDetails from '../components/UserDetails/UserDetails';
import UserCard from '../components/UserDetails/UserCard';



const Users = (props) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar />
    <UserCard isAdd/>
  </MuiThemeProvider>
)


export default Users