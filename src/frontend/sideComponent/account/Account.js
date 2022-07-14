import {
  Divider,
  Stack,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const Account = () => {
  return (
    <Stack
      width={{ xs: "100%", md: "50%" }}
      margin={{ md: "auto" }}
      component={"table"}
      border={0.1}
    >
      <Typography
        padding={1}
        textAlign={"center"}
        fontSize={25}
        fontWeight={700}
      >
        Account Info
      </Typography>
      <Divider />
      <Table>
        <TableRow>
          <TableCell width={"50%"}>Username</TableCell>
          <TableCell>{/* {authUser.user_info.username} */}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell width={"50%"}>Name</TableCell>
          <TableCell>{/* {authUser.user_info.username} */}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Role</TableCell>
          <TableCell>{/* {authUser.user_info.username} */}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Za</TableCell>
          <TableCell>{/* {authUser.user_info.username} */}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Commission</TableCell>
          <TableCell>{/* {authUser.user_info.username} */}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Divider</TableCell>
          <TableCell>{/* {authUser.user_info.username} */}</TableCell>
        </TableRow>
      </Table>
    </Stack>
  );
};

export default Account;
