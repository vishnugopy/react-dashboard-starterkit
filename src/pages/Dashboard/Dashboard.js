import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import {
  apprenantService,
  promoService,
  formateurService,
  reservationService,
  salleService,
} from "../../services";
import ListItems from "../../components/list";

const Dashboard = () => {
  const useStyles = makeStyles((theme) => ({
    maincontainer: {
      width: "auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop:"50px"
    },
  }));

  const classes = useStyles();
  const [error, setError] = useState(null);
  const [students, setStudents] = useState([]);
  const [promos, setPromos] = useState([]);
  const [formateurs, setFormateurs] = useState([]);
  const [salles, setSalles] = useState([]);

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

  useEffect((props) => {
    getPromosData();
    getStudentsData();
    getFormateursData();
    getSallesData();
  }, []);

  return (
    <Container className="list-all">
      {error && <p>{error}</p>}
      <Container className={classes.maincontainer}>
        <ListItems class={classes.gridItem} title="Promos" items={promos} />
        <ListItems title="Apprenants" items={students} />
        <ListItems title="Formateurs" items={formateurs} />
        <ListItems title="Salles" items={salles} />
      </Container>
    </Container>
  );
};

export default Dashboard;
