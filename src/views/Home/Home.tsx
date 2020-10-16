import React from "react";
import { Link } from "react-router-dom";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  })
);

interface HomeProps {}

export default function Home({}: HomeProps) {
  const classes = useStyles();

  return (
    <div>
      {exercises.map((ex, i) => (
        <List className={classes.root}>
          <ListItem>
            <ListItemText className="flex-initial m-4" primary={ex.createdAt} />
            <ListItemText
              className="flex-initial m-4"
              primary={<Link to="/nomad-movie">{ex.title}</Link>}
              secondary={ex.description}
            />
          </ListItem>
          {exercises.length - 1 !== i && <Divider variant="inset" component="li" />}
        </List>
      ))}
    </div>
  );
}

const exercises = [
  {
    title: "Nomad movie app",
    description: "simple movie list app using YTS API",
    createdAt: "2019-01-02",
  },
  {
    title: "React Betiful DND",
    description: "React Beautiful Drag And Drop by Attlassian",
    createdAt: "2020-01-02",
  },
];
