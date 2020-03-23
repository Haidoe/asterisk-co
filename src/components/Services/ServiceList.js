import React from "react";
import ProjectManagement from "./ProjectManagement";
import OperationalConsulting from "./OperationalConsulting";
import CorporateStrategy from "./CorporateStrategy";

const ServiceList = () => {
  return (
    <main>
      <ProjectManagement />
      <OperationalConsulting />
      <CorporateStrategy />
    </main>
  );
};

export default ServiceList;
