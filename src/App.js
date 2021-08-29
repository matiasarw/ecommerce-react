import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="topnav">
          <a class="active" href="#home">Inicio</a>
          <a href="#news">Tienda</a>
          <a href="#contact">Nosotros</a>
          <a href="#about">Contacto</a>
        </div>
      </header>

      <body>
        <div class="contenedor">
          <div class="centrarlo">
            <h1>MWTech</h1>
          </div>
          <img src="banner.png"/>
        </div>
      </body>



    </div>


  );
}

export default App;
