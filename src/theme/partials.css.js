import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: theme.spacing(1.5)
        },
        footer: {
            marginTop: "15%",
            bottom:"0",
            background: theme.palette.primary.light,
            color: theme.palette.common.white,
            padding: theme.spacing(1.5),
        },
        text: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
    }),
);

export default useStyles;