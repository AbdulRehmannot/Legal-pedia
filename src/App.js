import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Chatbot from "./pages/chatbot/Chatbot";
import { useContext, useState } from "react";
import CommingSoon from "./components/commingSoon/CommingSoon";
import { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  const [punjabWomenDevconversation, setPunjabWomenDevconversation] = useState(
    []
  );

  const [punjRelAffairConversation, setpunjRelAffairConversation] = useState(
    []
  );

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/chat/provincial/punjab/women-dev"
          element={
            <PrivateRoute
              Component={
                <Chatbot
                  assitantKey={process.env.REACT_APP_PUNJAB_WEMEN_DEV_ASSIT_ID}
                  conversation={punjabWomenDevconversation}
                  setConversation={setPunjabWomenDevconversation}
                  id="001"
                />
              }
            />
          }
        />
        <Route
          path="/chat/provincial/punjab/auqaf-relgious-afairs"
          element={
            <PrivateRoute
              Component={
                <Chatbot
                  assitantKey={process.env.REACT_APP_PUNJAB_AUQAAF_ASSIT_ID}
                  conversation={punjRelAffairConversation}
                  setConversation={setpunjRelAffairConversation}
                  id="002"
                />
              }
            />
          }
        />

        <Route
          path="chat/*"
          element={<PrivateRoute Component={<CommingSoon />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
