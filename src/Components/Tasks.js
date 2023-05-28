import { ReactSession } from "react-client-session";
import React, { useState, useEffect } from "react";
import { TaskRounded } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from "@mui/icons-material/Edit";
import Alert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircle from "@mui/icons-material/CheckCircle";
export function Tasks() {
 

  const [open, setOpen] = React.useState(false);
  const token = ReactSession.get("token");
  const [tasks, setTasks] = useState([]);
  console.log(token);

  useEffect(() => {
    fetch("http://localhost:4000/tasks", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json; charset=UTF-8",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("we are here");
        console.log(data);
        setTasks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  console.log(tasks);
  return (
    <div className="area tasksList">
      {tasks.map((task) => (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Alert severity={task.completed ? "success" : "error"}>
              {task.description}
            </Alert>
          </CardContent>
          <CardActions>
            {task.completed ? (
              <Button
                size="small"
                variant="outlined"
                startIcon={<CancelIcon />}
              >
                Mark Not Completed
              </Button>
            ) : (
              <Button
                size="small"
                variant="outlined"
                startIcon={<CheckCircle />}
              >
                Mark completed
              </Button>
            )}

            <Button size="small" variant="outlined" startIcon={<EditIcon />}>
              Edit
            </Button>
            <Button size="small" variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
