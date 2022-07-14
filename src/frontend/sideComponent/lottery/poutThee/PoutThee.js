import { Close } from "@mui/icons-material";
import {
  Alert,
  Button,
  FormControlLabel,
  IconButton,
  Stack,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { green, grey, red, teal } from "@mui/material/colors";
import React from "react";

const PoutThee = () => {
  return (
    <>
      {/* <Topbar title="Edit Lottery" /> */}

      <Stack
        direction="column"
        justifyContent={"center"}
        margin={"auto"}
        maxWidth={500}
        // alignItems={"center"}
        spacing={1}
        padding={1}
        // boxShadow={1}
      >
        {/* {success && ( */}
        <Alert
          severity="success"
          sx={{
            color: "green",
            // fontWeight: "bold",
            bgcolor: green[200],
          }}
          action={
            <IconButton
              aria-label="close"
              color="success"
              size="small"
              // onClick={() => {
              //   setSuccess(false);
              // }}
            >
              <Close fontSize="12" />
            </IconButton>
          }
        >
          Lottery Updated !
        </Alert>
        {/* )}
        {error && ( */}
        <Alert
          severity="error"
          sx={{
            color: "red",
            // fontWeight: "bold",
            bgcolor: red[200],
          }}
          action={
            <IconButton
              aria-label="close"
              color="error"
              size="small"
              // onClick={() => {
              //   setError(false);
              // }}
            >
              <Close fontSize="12" />
            </IconButton>
          }
        >
          Error
        </Alert>
        {/* )} */}

        <Stack boxShadow={1} minWidth={500}>
          <Stack spacing={1.5} padding={1}>
            <Typography variant={"caption"} component={"label"} fontSize={16}>
              Pout Tee
            </Typography>
            <FormControlLabel
              control={
                <TextField
                  color={"success"}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="pout_tee"
                  sx={{ bgcolor: teal[50] }}
                  //   value={lottery.pout_tee}
                  //   onChange={onChangeHandler}
                />
              }
            />
          </Stack>
          <Stack spacing={1.5} padding={1}>
            <Typography variant={"caption"} component={"label"} fontSize={16}>
              Hot Tee
            </Typography>
            <FormControlLabel
              control={
                <TextField
                  color={"success"}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="hot_tee"
                  sx={{ bgcolor: teal[50] }}
                  //   value={lottery.hot_tee}
                  //   onChange={onChangeHandler}
                />
              }
            />
          </Stack>
          <Stack spacing={1.5} padding={1}>
            <Typography variant={"caption"} component={"label"} fontSize={16}>
              Pate
            </Typography>
            <FormControlLabel
              control={
                <TextField
                  color={"success"}
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="pate"
                  sx={{ bgcolor: teal[50] }}
                  //   value={lottery.pate}
                  //   onChange={onChangeHandler}
                />
              }
            />
          </Stack>
          <Stack spacing={1.5} padding={1}>
            <FormControlLabel
              // sx={{ fontWeight: "bold", border: 1 }}
              control={
                <Switch
                  //   checked={lottery.play}
                  //   onChange={handleChange}
                  name="play"
                  size="large"
                  color="secondary"
                  // sx={{ width: "100px" }}
                />
              }
              label="Play"
              labelPlacement="start"
            />
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          marginTop={6}
          justifyContent={"flex-end"}
          paddingRight={1}
        >
          <Button
            variant={"none"}
            sx={{ color: teal[500], bgcolor: grey[200] }}
          >
            Cancle
          </Button>

          <Button
            variant={"contained"}
            sx={{ bgcolor: teal[500], color: grey[200] }}
            // onClick={updateLottery}
          >
            Update
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default PoutThee;
