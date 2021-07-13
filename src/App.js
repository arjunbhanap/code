function App() {
  const url = new URLSearchParams(window.location.search)
  const sku = url.get("sku")
  console.log(sku);
  return (
      <div className="App">
        <picture>
          <source srcSet={`https://assets.sainsburys-groceries.co.uk/gol/${sku}/image.webp`} alt="" type="image/webp"/>
          <source srcSet={`https://assets.sainsburys-groceries.co.uk/gol/${sku}/image.jpg`} alt="" type="image/jpeg"/>
          <img src={`https://assets.sainsburys-groceries.co.uk/gol/${sku}/image.jpg`} alt="Alt Text!"/>
        </picture>
      </div>
  );
}

export default App;
