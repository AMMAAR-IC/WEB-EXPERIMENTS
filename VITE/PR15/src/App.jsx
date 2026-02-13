import Child from "./Child";

function App() {
  function showMessage() {
    alert("hello from baccha" + message);
  }
  return (
    <div>
      <h1>Baap Component</h1>
      <Child sendData={showMessage} />
    </div>
  );
}

export default App;