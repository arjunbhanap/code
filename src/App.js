function App() {
  return (
      <div className="App">
        <picture>
          <source srcSet="https://assets.sainsburys-groceries.co.uk/gol/8054599/image.webp" alt="" type="image/webp"/>
          <source srcSet="https://assets.sainsburys-groceries.co.uk/gol/8054599/image.jpg" alt="" type="image/jpeg"/>
          <img src="https://assets.sainsburys-groceries.co.uk/gol/8054599/image.jpg" alt="" alt="Alt Text!"/>
        </picture>
      </div>
  );
}

export default App;
