import React from 'react';
import { Tv, Update } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const Footer = () => {

  const iconStyle = makeStyles({
    icon: {
      fill: '#656565',
      fontSize: 18,
      margin: '0 5px 0 30px'
    }
  });
  const classes = iconStyle();

  return (
    <footer className="main-footer px-4 py-3">
      <div className="pull-left d-flex align-items-center">
        <div className="on-ar"><span>No ar</span></div>
        <Tv className={classes.icon} />
        <span className="fw-600 mx-1"> ENCONTRO</span>
        -
        <span className="fw-600 mx-1"> 10:00</span>
        <Update className={classes.icon} />
        <span className="text-italic">
          Ultima atualização em
            <span className="fw-600 mx-1">10:28</span>
        </span>
      </div>

      <div className="pull-right d-flex align-items-center">
        <span className="text-italic mr-3">
          Quinta,
          <span className="fw-600 mx-1">30</span>
          de
          <span className="fw-600 mx-1">Maio</span>
          de
          <span className="fw-600 mx-1">2019</span>
        </span>
        <span className="fs-large fw-600 cl-primary">
        // 10:30:42
        </span>
      </div>
    </footer>
  )
}

export default Footer;
