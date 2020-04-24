import React from 'react';
import { Person, Tune, Home, Settings, PowerSettingsNew } from '@material-ui/icons';
import Button from '../../../common/Button';
import { IconButton } from "@material-ui/core";

export default ({}) => {
  return (
    <>
      <Button className="btn btn-secondary" icon={<Person />} text="incluir usuário" />
      <div className="d-flex align-items-center">
        <div className="divider">
          <span> | </span>
        </div>
        <IconButton aria-label="início">
          <Home />
        </IconButton>
        <IconButton aria-label="configurações">
          <Settings />
        </IconButton>
        <IconButton aria-label="desligar">
          <PowerSettingsNew />
        </IconButton>
      </div>
    </>
  )
}
