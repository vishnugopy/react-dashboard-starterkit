import React, { useEffect, useState } from "react";
import {
  Container,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { apprenantService, promoService } from "../../services";

const Dashboard = () => {
  const [error, setError] = useState(null);
  const [promos, setPromos] = useState([]);
  const [students, setStudents] = useState([]);

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
      <Container className="promocontainer">
        <h2>Promos</h2>
        <List>
          {promos.map((promo, index) => (
            <ListItem key={index} > 
              <ListItemText primary={promo.name}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>

      <Container className="studentcontainer">
      <h2>Apprenants</h2>
        <List>
          {students.map((student, index) => (
            <ListItem key={index} > 
              <ListItemText primary={student.firstname} secondary={student.lastname}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
    </Container>
  );
};

export default Dashboard;
