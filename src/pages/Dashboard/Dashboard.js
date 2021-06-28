import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  List,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { apprenantService, promoService } from "../../services";
import theme from '../../theme/theme.css'

const Dashboard = () => {
  const [error, setError] = useState(null);
  const [promos, setPromos] = useState([]);
  const [students, setStudents] = useState([]);

  const useStyles = makeStyles((theme) => ({
    maincontainer: {
      width: "auto",
      display: "flex",
      
    },
    sub: {
        border: '1px solid #3F51B5',  
        padding: '0',
        margin:'5px',
        borderRadius : '15px',
        overflow:'hidden'
    },
    subheading :{
        background : '#3F51B5',
        color : 'white',
        padding : '1rem',
        margin:'0'
        
    } 
  }));

  const classes = useStyles();
  const getPromos = async () => {
    const Promos = await promoService.getAll();
    setPromos(Promos.data);
    console.log(Promos.data);
  };

  const getStudents = async () => {
    const Students = await apprenantService.getAll();
    setStudents(Students.data);
    console.log(Students.data);
  };

  useEffect((props) => {
    getPromos();
    getStudents();
  }, []);

  return (
    <Container>
      {error && <p>{error}</p>}
      <h1>Dashboard</h1>
      <Container className={classes.maincontainer}>
        <Container
          maxWidth="40%"
          className={classes.sub}
        >
          <h2 className={classes.subheading}>Promos</h2>
          <List>
            {promos.map((promo, index) => (
              <ListItem key={index}>
                <ListItemText primary={promo.name}></ListItemText>
              </ListItem>
            ))}
          </List>
        </Container>

        <Container
          className="studentcontainer"
          maxWidth="40%"
          className={classes.sub}
        >
          <h2 className={classes.subheading}>Apprenants</h2>
          <List>
            {students.map((student, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={student.firstname}
                  secondary={student.lastname}
                ></ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Container>
      </Container>
    </Container>
  );
};

export default Dashboard;
