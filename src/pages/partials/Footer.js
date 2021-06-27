import React, {useContext} from 'react';
import useStyles from '../../theme/partials.css';
import { appStore } from '../../store';

const Footer = (props) => {
    const store = useContext(appStore);
    const classes = useStyles(store)();

    return (
        <footer className={classes.footer} style={{ background: store.theme.partials }} >
            <p className={classes.text}>@copyright 2021</p>
        </footer>
    )
}

export default Footer;