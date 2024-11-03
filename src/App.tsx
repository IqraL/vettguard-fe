import React from "react";
import { InterviewSupport } from "./InterviewSupport";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{
        display:"grid",
        gridTemplateColumns: "1fr 2fr 1fr",
      }}>
        <div></div>
        <InterviewSupport />
        <div></div>
      </div>
    </div>
  );
}

export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif", // Change this to a font of your choice
        fontSize: "2em", // Adjust the size as needed
        fontWeight: "bold", // Optional: add boldness
        color: "#333", // Change color to make it visually appealing
        marginTop: "20px", // Optional: add some spacing
        textDecoration: "underline",
      }}
    >
      VettGuard
    </div>
  );
};
export default App;
