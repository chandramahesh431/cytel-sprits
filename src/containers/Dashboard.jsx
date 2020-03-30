import React from "react";
import Header from "../components/Header";
import ProjectTable from "../components/Table";
import "../containers/Dashboard.css";
import Typography from "@material-ui/core/Typography";

const dashboard = props => {
  return (
    <div className="flex-container">
      <div>
        <Header></Header>
      </div>
      <div>
        <div className="flex-container-nest">
          <div>
            <Typography>Projects</Typography>
          </div>
          <div>
            {" "}
            <ProjectTable></ProjectTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
