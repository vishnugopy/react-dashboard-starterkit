import React , {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import {
  Container,
  List,
  TextField,
  ListItemSecondaryAction,
  IconButton,
  ListItem,
  ListItemText,
  Box,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ListItems = (props) => {
  const useStyles = makeStyles((theme) => ({
    sub: {
      width: "48%",
      border: "1px solid #3f51b515",
      padding: "0",
      margin: "5px",
      overflow: "hidden",
    },
    subheading: {
      background: "#3f51b520",
      color: "black",
      padding: "1rem",
      margin: "0",
    },
    form : {
      display : "flex",
      flexDirection : "row",
      flexWrap : "wrap",
    },
    box : {
      padding:"2%",
      margin:"1%",
    },
    inputarea : {
      width:"100%",
      marginTop :"1%",
      marginBottom :"1%",
    }
  }));

  const classes = useStyles();

  const [showInputs , setShowInputs] = useState(false);

  const handleClickAdd = () => {
    setShowInputs(!showInputs);
  };

  return (
    <Container className={classes.sub}>
      <h2 className={classes.subheading}>{props.title}</h2>

      <List>
        {props.items.map((item, i) => {
          return (
            <ListItem key={i}>
              <ListItemText
                primary={item.name || item.firstname}
                secondary={item.lastname || item.capacity}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <Box className={classes.box}>
       
        <Button variant="outlined" color="primary" onClick={handleClickAdd}>
            Add
          </Button>
        {showInputs&&
          <List >
          <ListItem className={classes.form}>
          <TextField id="name" label="Name" variant="outlined" className={classes.inputarea}/>
          <TextField id="name" label="Name" variant="outlined" className={classes.inputarea}/>
          <Button variant="outlined" color="primary">
            SEND
          </Button>
        </ListItem>
      </List>
        }
      
        
      </Box>
    </Container>
  );
};

export default ListItems;
