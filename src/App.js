import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification/Notification";

import { sendNotification } from "./store/actions";

function App() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [mode, setMode] = useState("success");

  const list = useSelector((state) => state.notificationList);

  const handleSend = (text, mode) => {
    let notificationObj = {
      id:
        Math.floor(Math.random() * 100) + "" + Math.floor(Math.random() * 100),
      text: text,
      mode: mode,
      modeProp: getModeProps(mode),
    };
    dispatch(sendNotification(notificationObj));
    setText("");
  };

  const getModeProps = (mode) => {
    switch (mode) {
      case "success":
        return {
          bgColor: "#90be6d",
          icon: "check-circle",
        };
      case "fail":
        return { bgColor: "#f94144", icon: "times-circle" };
      case "warn":
        return { bgColor: "#ffb627", icon: "exclamation-triangle" };
      case "normal":
        return { bgColor: "#219ebc", icon: "" };
      default:
        return { bgColor: "#fff", icon: "" };
    }
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input_container"
        placeholder="Enter your message"
      />
      <select value={mode} onChange={handleModeChange} className="picker_container">
        <option value="success">Success</option>
        <option value="fail">Fail</option>
        <option value="warn">Warn</option>
        <option value="normal">Normal</option>
      </select>
      <button className="btn" onClick={() => handleSend(text, mode)}>Send Notification</button>
      <Notification notificationList={list} />
    </div>
  );
}

export default App;
