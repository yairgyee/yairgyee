import {
  AppBar,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Box } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { NavLink } from "react-router-dom";
import {
  ExpandLess,
  ExpandMore,
  ListAlt,
  StarBorder,
} from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleSliber = () => {
    setOpen(!open);
  };

  const [subopen, setSubopen] = useState(true);
  const subMember = () => {
    setSubopen(!subopen);
  };

  return (
    <Stack>
      <AppBar position={"static"}>
        <Toolbar>
          <IconButton onClick={toggleSliber}>
            <MenuIcon />
          </IconButton>
          <Typography variant={"h6"} sx={{ paddingLeft: 1 }}>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor={"left"} onClose={toggleSliber}>
        <Box display={"flex"} sx={{ marginTop: "10", width: 300 }}>
          <Stack width={"100%"}>
            <Stack
              // textAlign={"center"}
              width={"100%"}
              height={80}
              paddingY={1}
              alignItems={"center"}
              // alignContent={"center"}
            >
              <AccountCircleIcon sx={{ width: 100, height: 50 }} />
              <Typography variant={"h6"} fontStyle={"-moz-initial"}>
                Admin
              </Typography>
            </Stack>
            <Divider />
            <List>
              {/* {listItems.map((listItem, index) => (
                <ListItem button key={index}>
                  <ListItemIcon>{listItem.listIcon}</ListItemIcon>
                  <ListItemText primary={listItem.listText} />
                </ListItem>
              ))} */}
              <NavLink to="/lottery" style={{ textDecoration: "none" }}>
                <ListItem>
                  <ListItemIcon>
                    <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Lotttery" />
                </ListItem>
              </NavLink>
              <NavLink to="/view" style={{ textDecoration: "none" }}>
                <ListItem>
                  <ListItemIcon>
                    <FormatListNumberedIcon />
                  </ListItemIcon>
                  <ListItemText primary="View"></ListItemText>
                </ListItem>
              </NavLink>
              {/* <NavLink to={"/member"} style={{ textDecoration: "none" }}> */}
              <NavLink
                style={{ textDecoration: "none" }}
                to="/view"
                // onClick={() => setToggle(false)}
              >
                <ListItemButton
                  sx={{ ":hover": { bgcolor: teal[100] } }}
                  onClick={subMember}
                >
                  <ListItemIcon>
                    <ListAlt />
                  </ListItemIcon>
                  <ListItemText primary="Member" />
                  {subopen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={subopen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <NavLink
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/member_list"
                      // onClick={() => setToggle(false)}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>

                        <ListItemText primary="Member List" />
                      </ListItemButton>
                    </NavLink>
                    <NavLink
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/create"
                      // onClick={() => setToggle(false)}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>

                        <ListItemText primary="Create" />
                      </ListItemButton>
                    </NavLink>
                  </List>
                </Collapse>
              </NavLink>
              {/* </NavLink> */}
              <NavLink to={"/account"} style={{ textDecoration: "none" }}>
                <ListItem>
                  <ListItemIcon>
                    <BuildCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Account" />
                </ListItem>
              </NavLink>
              <NavLink
                to={"/change_password"}
                style={{ textDecoration: "none" }}
              >
                <ListItem>
                  <ListItemIcon>
                    <BuildCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Change Password" />
                </ListItem>
              </NavLink>
              <ListItem>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Stack>
        </Box>
      </Drawer>
    </Stack>
  );
};

export default Nav;
