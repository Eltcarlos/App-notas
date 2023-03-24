import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

const SideBarItem = ({ title = "", body, id, date, imageUrls = [] }) => {
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      setActiveNote({
        title,
        body,
        date,
        id,
        imageUrls,
      })
    );
  };

  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton onClick={onSubmit}>
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={newTitle} />
            <ListItemText secondary={body} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </div>
  );
};

export default SideBarItem;
