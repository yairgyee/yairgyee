import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const View = () => {
  return (
    <Stack
      width={{ xs: "100%" }}
      margin={{ md: "auto" }}
      //   component={"table"}
      boxShadow={1}
      spacing={1}
      padding={1}
      // marginX={0}
    >
      <Stack
        direction={"row"}
        spacing={1}
        padding={2}
        justifyContent={"space-between"}
      >
        {/* <TextField type={"date"} />
        <TextField type={"date"} /> */}
        <FormControlLabel label={"All"} control={<Checkbox />} />
        <Button variant="contained" size="small" color={"success"}>
          Send Lager
        </Button>
      </Stack>
      {/* <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div> */}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>
                {" "}
                <Checkbox></Checkbox>{" "}
              </TableCell>
              <TableCell>id</TableCell>
              <TableCell align="center">date</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {lager.map((lag, key) => (
              <Row
                // id={lag._id}
                // date={lag._date}
                // totalAmount={lag.totalAmount}
                lag={lag}
              />
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default View;
