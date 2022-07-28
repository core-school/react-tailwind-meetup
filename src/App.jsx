import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center py-20">
      <img
        src="https://www.corecode.school/branding/logo_app.png"
        width="50"
        className="mx-auto my-4"
      />
      <h1 className="text-orange-500 text-2xl font-bold text-center">
        CORE Code School
      </h1>
    </div>
  );
}

export default App;
