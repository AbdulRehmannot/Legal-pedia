import { useContext, useEffect, useState } from "react";
import "./agentSidebar.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

const AgentSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <div className="agent_sidebar">
      <div className="sidebar_btn">
        {showSidebar ? (
          <ArrowBackIosIcon onClick={() => setShowSidebar(false)} />
        ) : (
          <ArrowForwardIosIcon onClick={() => setShowSidebar(true)} />
        )}
      </div>

      <div
        className={`agent_sidebar_sidebar ${
          showSidebar ? "show-sidebar" : null
        }`}
      >
        <h4 className="agent_sidebar_heading">Annotated Properties</h4>
        <div className="annotated_properties mt-2">
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AgentSidebar;
