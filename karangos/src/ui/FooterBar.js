import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        minWidth: '100%',
        position: 'fixed',
        bottom: '0',
        margin: '0',
        padding: '0',
    },
    text: {
        minWidth: '100%',
        color: 'white'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.warning.light,
        '&:hover': {
            content: theme.palette.secondary.light
        }
    },    
}));

export function FooterBar () {
    const classes = useStyles();

    return (        
        <Toolbar className={classes.footer}>
            <Typography variant="caption" align="center" className={classes.text}>
                Desenvolvido por <a href="https://github.com/gFelicio" className={classes.link}> Gustavo Felício </a>
                </Typography>
        </Toolbar>                
    )
}