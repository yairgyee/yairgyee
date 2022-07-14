import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AdmLagerCut = () => {
  return (
    <Stack>
      <Stack flexDirection={"row"} flexWrap={"wrap"} padding={1}>
        <Button variant={"contained"} size={"small"}>
          MaxSell
        </Button>
      </Stack>
      {Array.from(Array(100), (_, x) => x).map((x, key) => {
        return (
          <Stack padding={1}>
            <Typography>{x}</Typography>
            <Typography>200000</Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default AdmLagerCut;
