import React from 'react';
import { Search } from '@material-ui/icons';
import TextField from '../../common/TextField';
import { InputAdornment, FormControl } from "@material-ui/core";

function NavbarSearch() {
  return (
    <div className="search-form">
      <FormControl noValidate autoComplete="off">
        <TextField
          id="input-with-icon-textfield"
          label="Pesquisar"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search style={{ color: '#656565' }} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </div>
  )
}

export default NavbarSearch
