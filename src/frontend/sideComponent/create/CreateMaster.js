import { Close } from "@mui/icons-material";
import {
  Alert,
  Autocomplete,
  Button,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { green, grey, red, teal } from "@mui/material/colors";
import React from "react";

const CreateMaster = () => {
  return (
    <Stack
      // component={"form"}
      width={{ xs: "70%", md: "90%" }}
      sx={{
        // width: "90%",
        padding: "1",
        // height: "100%",
        // padding: 3,
        margin: "auto",
        // bgcolor: teal[700],
        // position: "fixed",
      }}
    >
      {/* <Stack direction={"row"} style={{ backgroundColor: "green" }}>
        1
      </Stack> */}
      <Stack direction={"column"}>
        <Stack
          // component={"header"}
          fontSize={20}
          fontWeight={"bold"}
          // textAlign={"center"}
          padding={1}
          borderBottom={1}
          borderColor={teal[100]}
          // color="white"
          // bgcolor={teal[500]}
        >
          Agent {`Create`}
        </Stack>
        <Stack>
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
            Agent create successfully
          </Alert>
          {/* )} */}
          {/* {error && ( */}
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
        </Stack>
        <Grid
          container
          columns={{ xs: 12, md: 12 }}
          // spacing={{ md: 0 }}
          // padding={{ md: 1 }}
        >
          <Grid item xs={12} md={6}>
            <Stack spacing={1.5} padding={1}>
              <Typography variant={"caption"} component={"label"} fontSize={16}>
                UserName <span style={{ color: "red" }}>*</span>
              </Typography>
              <FormControlLabel
                control={
                  <TextField
                    color={"success"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    name="username"
                    sx={{ bgcolor: teal[50] }}
                    // value={agent.username}
                    // value={userinfo.username}
                    // onChange={onChangeHandler}
                  />
                }
              />
            </Stack>
            <Stack spacing={1.5} padding={1}>
              <Typography variant={"caption"} component={"label"} fontSize={16}>
                Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <FormControlLabel
                control={
                  <TextField
                    color={"success"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    name="name"
                    sx={{ bgcolor: teal[50] }}
                    // value={agent.name}
                    // onChange={onChangeHandler}
                  />
                }
              />
            </Stack>
            <Stack spacing={1.5} padding={1}>
              <Typography variant={"caption"} component={"label"} fontSize={16}>
                Password <span style={{ color: "red" }}>*</span>
              </Typography>
              <FormControlLabel
                control={
                  <TextField
                    color={"success"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    name="password"
                    sx={{ bgcolor: teal[50] }}
                    // value={agent.password.toString()}
                    // onChange={onChangeHandler}
                  />
                }
              />
            </Stack>
            <Stack spacing={1.5} padding={1}>
              <Typography variant={"caption"} component={"label"} fontSize={16}>
                Phone Number <span style={{ color: "red" }}>*</span>
              </Typography>
              <FormControlLabel
                control={
                  <TextField
                    color={"success"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    name="phone"
                    sx={{ bgcolor: teal[50] }}
                    // value={agent.phone}
                    // onChange={onChangeHandler}
                  />
                }
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1.5} padding={1}>
              <Typography variant={"caption"} component={"label"} fontSize={16}>
                Commission <span style={{ color: "red" }}>*</span>
              </Typography>
              <FormControlLabel
                control={
                  <TextField
                    color={"success"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    name="commission"
                    sx={{ bgcolor: teal[50] }}
                    // value={agent.commission.toString()}
                    // onChange={onChangeHandler}
                  />
                }
              />
            </Stack>
            <Stack spacing={1.5} padding={1}>
              <Typography variant={"caption"} component={"label"} fontSize={16}>
                za <span style={{ color: "red" }}>*</span>
              </Typography>
              <FormControlLabel
                control={
                  <TextField
                    color={"success"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    name="twoDz"
                    sx={{ bgcolor: teal[50] }}
                    // value={agent.twoDz.toString()}
                    // onChange={onChangeHandler}
                  />
                }
              />
            </Stack>
            <Stack spacing={1.5} padding={1}>
              <Typography variant={"caption"} component={"label"} fontSize={16}>
                Divider
              </Typography>
              <FormControlLabel
                // label="Divider"
                control={
                  <Autocomplete
                    disablePortal
                    size={"small"}
                    fullWidth
                    id="selectType"
                    sx={{ bgcolor: teal[50] }}
                    // options={selectType}
                    renderInput={(params) => (
                      <TextField
                        sx={{ bgcolor: teal[50] }}
                        color={"success"}
                        {...params}
                        label="Select Type"
                      />
                    )}
                    name="divider"
                    // value={agent.divider}
                    // onChange={(e, value) =>
                    //   onSelectHandler(e, "divider", value)
                    // }
                  />
                }
              />
            </Stack>
          </Grid>
          <Grid item xs={1} md={12}>
            <Stack
              direction={"row"}
              spacing={2}
              marginTop={6}
              // width={"80%"}
              justifyContent={"flex-end"}
              padding={3}
            >
              <Button
                size="small"
                variant={"none"}
                sx={{ color: teal[500], bgcolor: grey[200] }}
              >
                Cancle
              </Button>
              {/* {agent !== "" ? ( */}
              <Button
                size="small"
                variant={"contained"}
                sx={{ bgcolor: teal[500], color: grey[200] }}
                // onClick={createAgent}
              >
                Create
              </Button>
              {/* ) : ( */}
              <Button
                size="small"
                variant={"contained"}
                sx={{ bgcolor: teal[500], color: grey[200] }}
                // onClick={createAgent}
              >
                Update
              </Button>
              {/* )} */}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default CreateMaster;
