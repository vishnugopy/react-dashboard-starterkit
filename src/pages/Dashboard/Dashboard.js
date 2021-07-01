import React, { useEffect, useState, useContext } from "react";
import authContext from "../../store";
import { makeStyles } from "@material-ui/core/styles";
import {
  apprenantService,
  promoService,
  formateurService,
  reservationService,
  salleService,
} from "../../services";
import ListItems from "../../components/list";
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

const Dashboard = () => {
  const useStyles = makeStyles((theme) => ({
    maincontainer: {
      width: "auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: "5%",
      marginBottom: "15%",
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
  const [error, setError] = useState(null);
  const [students, setStudents] = useState([]);
  const [promos, setPromos] = useState([]);
  const [formateurs, setFormateurs] = useState([]);
  const [salles, setSalles] = useState([]);
  const authstore = useContext(authContext);

  const [showInputs, setShowInputs] = useState("");
  const [name, setName] = useState("");
  const [firstname, setFirstame] = useState("");
  const [lastname, setLastname] = useState("");
  const [stacks, setStacks] = useState("");
  const [capacity, setCapacity] = useState(0);

  const getStudentsData = async () => {
    const studentsData = await apprenantService.getAll();
    setStudents(studentsData.data);
  };
  const getPromosData = async () => {
    const promosData = await promoService.getAll();
    setPromos(promosData.data);
  };
  const getFormateursData = async () => {
    const formateursData = await formateurService.getAll();
    setFormateurs(formateursData.data);
  };
  const getSallesData = async () => {
    const sallesData = await salleService.getAll();
    setSalles(sallesData.data);
  };

  //functions for crud
  const handleClickAdd = () => {
    setShowInputs(!showInputs);
  };

  const handleClickDelete = async (id) => {
    let currentID = id.target.id;
    console.log(currentID);
    await apprenantService.deleteStudent(currentID);
    getStudentsData();
  };

//add
  const addPromoFunction = async () => {
    await promoService.addPromo(name);
    getPromosData();
  };
  const addStudentFunction = async () => {
    await apprenantService.addStudent(firstname, lastname);
    getStudentsData();
  };
  const addFormateurFunction = async () => {
    await formateurService.addFormateur(firstname, lastname , stacks);
    getFormateursData();
  };
  const addSallesFunction = async () => {
    await salleService.addSalle(name, capacity);
    getSallesData();
  };

  useEffect((props) => {
    getPromosData();
    getStudentsData();
    getFormateursData();
    getSallesData();
  }, []);

  return (
    <Container className="list-all">
      {error && <p>{error}</p>}
      <Button onClick={handleClickAdd}>Ajouter les donnes</Button>
      <Container className={classes.maincontainer}>
        <ListItems class={classes.gridItem} title="Promos" items={promos} />
        <ListItems
          title="Apprenants"
          items={students}
          delete={handleClickDelete}
        />
        <ListItems title="Formateurs" items={formateurs} />
        <ListItems title="Salles" items={salles}/>
      </Container>

      {showInputs && (
      <Container>
        <Box className={classes.box}>
            Add Promo
         
            <List>
              <ListItem className={classes.form}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  className={classes.inputarea}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.buttons}
                  onClick={addPromoFunction}
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
        </Box>

        <Box className={classes.box}>

        Add Apprenants

            <List>
              <ListItem className={classes.form}>
                <TextField
                  id="firstname"
                  label="First Name"
                  variant="outlined"
                  className={classes.inputarea}
                  onChange={(e) => {
                    setFirstame(e.target.value);
                  }}
                />

                <TextField
                  id="lastname"
                  label="Last Name"
                  variant="outlined"
                  className={classes.inputarea}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.buttons}
                  onClick={addStudentFunction}
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
        </Box>

        <Box className={classes.box}>
            Add Salle
            <List>
              <ListItem className={classes.form}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  className={classes.inputarea}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <TextField
                  type="number"
                  id="capacity"
                  label="Capacity"
                  variant="outlined"
                  className={classes.inputarea}
                  onChange={(e) => {
                    setCapacity(e.target.value);
                  }}
                />

                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.buttons}
                  onClick={addSallesFunction}
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
        </Box>

        <Box className={classes.box}>
    
            Add Formateurs

            <List>
              <ListItem className={classes.form}>
                <TextField
                  id="firstname"
                  label="First Name"
                  variant="outlined"
                  className={classes.inputarea}
                  onChange={(e) => {
                    setFirstame(e.target.value);
                  }}
                />
                <TextField
                  id="lastname"
                  label="Last Name"
                  variant="outlined"
                  className={classes.inputarea}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />

                <TextField
                  id="stacks"
                  label="Stacks"
                  variant="outlined"
                  className={classes.inputarea}
                  onChange={(e) => {
                    setStacks(e.target.value);
                  }}
                />

                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.buttons}
                  onClick={addFormateurFunction}
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
        </Box>
      </Container>)}
    </Container>          
  );
};

export default Dashboard;
