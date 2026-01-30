const COMPONENTS = [{ name: "File Explorer", component: "" }];
function App() {
  return (
    <div style={{ display: "flex", border: "1px solid black" }}>
      <div>
        <h1>Components</h1>
        {COMPONENTS.map(({ name }) => {
          return (
            <ul>
              <li>{name}</li>
            </ul>
          );
        })}
      </div>
      <div style={{ border: "1px solid black" }}>
        <h1>Components View</h1>
      </div>
    </div>
  );
}

export default App;
