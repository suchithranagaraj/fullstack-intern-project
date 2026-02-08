import { useEffect, useState } from "react";

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/facts/")
      .then(res => res.json())
      .then(data => setFacts(data));
  }, []);

  return (
    <div>
      <h1>Facts</h1>
      {facts.map(f => (
        <p key={f.id}>{f.fact}</p>
      ))}
    </div>
  );
}

export default App;
