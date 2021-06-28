import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  Container,
  List,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const ListItems = (props) => {

    const useStyles = makeStyles((theme) => ({
        sub: {
          width: "32%",
          border: "1px solid #3F51B5",
          padding: "0",
          margin: "5px",
          borderRadius: "15px",
          overflow: "hidden",
        },
        subheading: {
          background: "#3F51B5",
          color: "white",
          padding: "1rem",
          margin: "0",
        },
      }));
    
      const classes = useStyles();

    return (
        <Container  className={classes.sub}>
            <h2 className={classes.subheading}>{props.title}</h2>
            
            <List>
                {props.items.map((item, i) => {
                    return (
                        <ListItem key={i}>
                            <ListItemText primary={item.name || item.firstname}/>
                        </ListItem>
                    )
                })}
            </List>
        </Container>
    )
}

export default ListItems;