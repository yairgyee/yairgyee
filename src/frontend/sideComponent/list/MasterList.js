import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const MasterList = () => {
  //pagination

  // const hangleChangepage = (e, newpage) => {
  //   if (parseInt(newpage) >= 1) {
  //     setPage(parseInt(newpage));
  //     console.log(newpage);
  //     setCtrlEffect(true);
  //   }
  // };

  // const hangleChangPerepage = (e) => {
  //   console.log(e.target.value);
  //   setRowPerPage(parseInt(e.target.value));
  //   setCtrlEffect(true);
  //   // setPage(e);
  // };
  return (
    <>
      <Stack direction={"row"} spacing={2} padding={1}>
        {/* <FormControl sx={{ width: "150px" }} size={"small"} color={"success"}>
          <Select value={age} onChange={handleChange}>
            <MenuItem value={10}>Morning</MenuItem>
            <MenuItem value={20}>Evening</MenuItem>
            <MenuItem value={30}>Total</MenuItem>
          </Select>
        </FormControl> */}
        <TextField type={"text"} size={"small"} color={"success"} />
        <Button
          variant={"contained"}
          sx={{ bgcolor: teal[700] }}
          size={"small"}
        >
          Search
        </Button>
      </Stack>
      <Stack>
        {/* <TableContainer component={Paper} sx={{ padding: "1px" }}> */}
        <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
          <TableHead sx={{ bgcolor: teal[700] }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Username
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Divider
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Za
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ overflow: "scroll" }}>
            {/* {users.data &&
              users.data
                .filter((user, key) => {
                  // if (inputsearch === "") {
                  //   return user;
                  // }
                  return (
                    user.username
                      .toLowerCase()
                      .includes(inputsearch.toLowerCase()) ||
                    user.name.toLowerCase().includes(inputsearch.toLowerCase())
                    // user.divider.includes(inputsearch)
                  );
                })
                // .slice(page * rowperpage, page * rowperpage + rowperpage)
                .map((user, key) => {
                  return (
                    <TableRow>
                      <TableCell>{key}</TableCell>
                      <TableCell align="left">{user.username}</TableCell>
                      <TableCell align="center">{user.name}</TableCell>
                      <TableCell align="center">{user.divider}</TableCell>
                      <TableCell align="center">{user.twoDZ}</TableCell>

                      <TableCell align="center">
                        <IconButton
                          // color={}
                          size="small"
                          onClick={() => onClick(user)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton
                          // color="success"
                          size="small"
                          // onClick={() => UserContent.setDetailUser(user._id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })} */}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[2, 5, 10]}
          // count={users.count}
          // rowsPerPage={rowperpage}
          // page={page}
          component={"div"}
          // onPageChange={hangleChangepage}
          // onRowsPerPageChange={hangleChangPerepage}
          onRowsPerPageChange
        />
        {/* </TableContainer> */}
      </Stack>
    </>
  );
};

export default MasterList;
