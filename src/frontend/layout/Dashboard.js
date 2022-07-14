import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "../sideComponent/account/Account";
import ChangePass from "../sideComponent/changePass/ChangePass";

import CreateMaster from "../sideComponent/create/CreateMaster";
import MasterList from "../sideComponent/list/MasterList";
import AdmLagerCut from "../sideComponent/lottery/admLager/AdmLagerCut";

import Lottery from "../sideComponent/lottery/Lottery";
import PoutThee from "../sideComponent/lottery/poutThee/PoutThee";
import View from "../sideComponent/view/View";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/create" element={<CreateMaster />} />
      <Route path="/member_list" element={<MasterList />} />
      <Route path="/view" element={<View />} />
      <Route path="/lottery" element={<Lottery />} />
      <Route path="/account" element={<Account />} />
      <Route path="/change_password" element={<ChangePass />} />
      <Route path="/lottery/update" element={<PoutThee />} />
      <Route path="/lottery/lager_cut" element={<AdmLagerCut />} />
    </Routes>
  );
};

export default Dashboard;
