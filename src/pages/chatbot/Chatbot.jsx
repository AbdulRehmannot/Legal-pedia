import "./chatbot.scss";
import AgentChatbot from "../../components/agentChatBot/AgentChatbot";
import AgentSidebar from "../../components/sidebar/AgentSidebar";
import Sidebar from "../../components/dashboard-sidebar/Sidebar";

const Chatbot = ({ assitantKey, conversation, setConversation, id }) => {
  return (
    <div className="chatbot_container">
      <Sidebar />
      <AgentChatbot
        assitantKey={assitantKey}
        conversation={conversation}
        setConversation={setConversation}
        id={id}
      />
    </div>
  );
};

export default Chatbot;
