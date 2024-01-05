import React, { useEffect } from "react";

const TgWebApp = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    TgWebApp.ready();
  }, []);

  const handleClick = () => {
    TgWebApp.close();
  };

  return (
    <div className="">
      work
      <button onClick={handleClick}>Open Google</button>
    </div>
  );
}

export default App;
