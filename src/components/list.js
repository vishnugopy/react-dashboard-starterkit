import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  apprenantService,
  promoService,
  formateurService,
  reservationService,
  salleService,
} from "../services";
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
      flexGrow: 1,
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
    }
  }));

  const classes = useStyles();

  const [showInputs, setShowInputs] = useState("");

 

  return (
    <Container className={classes.sub}>
      <h2 className={classes.subheading}>{props.title}</h2>

      <List>
        {props.items.map((item, i) => {
          return (
            <ListItem key={i}>
              <ListItemText
                id={item.id}
                primary={item.name || item.firstname}
                secondary={item.lastname || item.capacity}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  id={item.id}
                  onClick={props.delete}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default ListItems;
