import React, { useState } from "react";
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
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ListItems = (props) => {
  const useStyles = makeStyles((theme) => ({
    sub: {
      flexGrow:1,
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
    form: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    box: {
      padding: "1%",
      margin: "1%",
    },
    inputarea: {
      width: "100%",
      marginTop: "1%",
      marginBottom: "1%",
    },
    buttons: {
      marginRight: "1%",
    },
  }));

  const classes = useStyles();

  const [showInputs, setShowInputs] = useState("");
  const [name, setName] = useState("");
  const [firstname, setFirstame] = useState("");
  const [lastname, setLastname] = useState("");
  const [capacity, setCapacity] = useState(0);
  
  console.log(capacity);
  console.log(name);
  console.log(firstname);
  console.log(lastname);

  const handleClickAdd = () => {
    setShowInputs(!showInputs);
  };

  const handleClickDelete = (e) => {
    console.log(e.target.id);
  };

  return (
    <Container className={classes.sub}>
      <h2 className={classes.subheading}>{props.title}</h2>

      <List>
        {props.items.map((item, i) => {
          return (
            <ListItem key={i} >
              <ListItemText
              id={item.id}
                primary={item.name || item.firstname}
                secondary={item.lastname || item.capacity}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" id={item.id} onClick={handleClickDelete}>
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
        {showInputs && (
          <List>
            <ListItem className={classes.form}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                className={classes.inputarea}
                onChange={(e)=>{setName(e.target.value)}}
              />
              <TextField
                id="firstname"
                label="First Name"
                variant="outlined"
                className={classes.inputarea}
                onChange={(e)=>{setFirstame(e.target.value)}}
              />

              <TextField
                id="lastname"
                label="Last Name"
                variant="outlined"
                className={classes.inputarea}
                onChange={(e)=>{setLastname(e.target.value)}}
              />

               <TextField
               type="number"
                id="capacity"
                label="Capacity"
                variant="outlined"
                className={classes.inputarea}
                onChange={(e)=>{setCapacity(e.target.value)}}
              />

              <Button
                variant="outlined"
                color="primary"
                className={classes.buttons}
              >
                SEND
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClickAdd}
              >
                CANCEL
              </Button>
            </ListItem>
          </List>
        )}
      </Box>
    </Container>
  );
};

export default ListItems;
