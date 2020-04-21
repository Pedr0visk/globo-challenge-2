import React from 'react';
import '../../../assets/scss/App.scss';
import Person from '@material-ui/icons/Person';
import Search from '@material-ui/icons/Search';
import { Container, Grid, TextField, InputAdornment, FormControl, IconButton } from "@material-ui/core";

const MainNavbar = () => {
  return (
    <header className="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed mui-fixed MuiPaper-elevation4 gb-header">
      <Container>
        <div className="gb-navbar">
          <div className="left-content navbar-nav">
            <div className="d-flex align-items-center">
              <IconButton aria-label="delete">
                <Person />
              </IconButton>
              <div className="divider">
                <span> | </span>
              </div> 
              <IconButton aria-label="delete">
                <Person />
              </IconButton>
            </div>

            <div className="search-form">
              <FormControl noValidate autoComplete="off">
              <TextField
                id="input-with-icon-textfield"
                label="Pesquisar"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              </FormControl>
            </div>
          </div>    
        </div>
      </Container>
    </header>
  )
}

export default MainNavbar;