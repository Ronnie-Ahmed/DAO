import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Proposal } from "../Pages/Proposal";
import { Result } from "../Pages/Result";

import { PageNotFound } from "../Pages/PageNotFound";

export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
