import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        fontFamily: theme.typography.fontFamily
    }
}));

export default function MainMenu () {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState (null);

    const handleClick = (event) => {
        setAnchorEl (event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl (null);
    };

    return (
        <div>
            <IconButton edge="start"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.menuButton}
                color="inherit"
                aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/list" className={classes.link}>
                        Listagem de Karangos
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/new" className={classes.link}>
                        Cadastrar Novo Karango
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}