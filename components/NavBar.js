import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const ElevationScroll = props => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const NavBar = props => (
    <>
    <ElevationScroll {...props}>
    <AppBar position="fixed" color="primary">
        <Toolbar>
            <IconButton color="inherit" aria-label="Back">
                <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="inherit">
                Photos
          </Typography>
        </Toolbar>
    </AppBar>
    </ElevationScroll>
    <Toolbar />
    </>
)

export default NavBar