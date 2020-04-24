import React, { useState } from 'react';
import { Person, Security, Tune, Close, DateRange } from '@material-ui/icons';
import Button from '../../common/Button';
import ButtonGroup from '../../common/ButtonGroup';
import {
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import NavbarSearch from './NavbarSearch';
import UserActions from './NavbarNav/UserActions';

const MainNavbar = () => {

  const [filter, setFilter] = useState(false);

  const toggleFilter = (open) => e => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setFilter(open);
  }

  const filterMenu = () => (
    <div
      className="filter-menu"
      role="presentation"
      onClick={toggleFilter(false)}
      onKeyDown={toggleFilter(false)}
    >
      <div className="filter-menu-header">
        <Tune className="filter-menu-icon" />
        <span className="filter-menu-title">
          Filtros
        </span>
        <span className="close-filter"><Close style={{ fontSize: 16 }} /></span>
      </div>
      <div className="filter-menu-description">
        <p>Utilize os filtros abaixo para refinar os resultados da tabela, Clique no botão APLICAR para salvar as alterações</p>
      </div>
      <List>
        <ListItem button>
          <ListItemIcon><DateRange /></ListItemIcon>
          <ListItemText primary="TODAS AS DATAS DE INCLUSÃO" />
        </ListItem>
      </List>
      <Divider />
    </div>
  )

  return (
    <header className="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed mui-fixed MuiPaper-elevation4 gb-header">
      <Drawer anchor="right" open={filter} onClose={toggleFilter(false)}>
        {filterMenu()}
      </Drawer>
      <Container maxWidth="xl">
        <div className="gb-navbar">
          <div className="left-content navbar-nav">
            <div className="d-flex align-items-center">
              <Button className="btn tv" icon={<Person />} />
              <div className="divider">
                <span> | </span>
              </div>
              <ButtonGroup>
                <Button className="btn" icon={<Security />} />
                <Button className="btn selected" icon={<Person />} />
              </ButtonGroup>
            </div>
            <NavbarSearch />
          </div>

          <div className="right-content navbar-nav">
            <Button className="btn btn-white mr-5" onClick={toggleFilter(true)} icon={<Tune />} />
            <UserActions toggleFilter={toggleFilter} />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default MainNavbar;