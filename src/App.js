import "./App.css";
import Nav from "./frontend/nav/Nav";
import { Stack } from "@mui/material";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./frontend/layout/Dashboard";
// import CreateMaster from "./frontend/sideComponent/create/CreateMaster";
// import MasterList from "./frontend/sideComponent/list/MasterList";
// import Settings from "./frontend/sideComponent/setting/Setting";
// import LotteryEdit from "./frontend/sideComponent/lottery/lotteryedit/LotteryEdit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Dashboard />
        {/* <Routes>
          <Route path="/create-master" element={<CreateMaster />} />
          <Route path="/list" element={<MasterList />} />
          <Route path="/loterymgmt" element={<LotteryMgmt />} />
          <Route path="/setting" element={<Settings />} />
        </Routes> */}
      </BrowserRouter>
      {/* <LotteryEdit /> */}
    </div>
  );
}

export default App;
