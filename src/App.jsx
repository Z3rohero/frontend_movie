import './App.css'
import {Listado} from './components/Listado'
export default function App() {
  return (
      <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>ZeroHero</h1>
        </header>

        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        
        <section id="content" className="content">
        <Listado/>
        </section>

        <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" id="search_field" />
                    <button id="search">Buscar</button>
                </form>
            </div>

            <div className="add">
                <h3 className="title">Añadir pelicula</h3>
                <form>
                    <input type="text" id="title" placeholder="Titulo" />
                    <textarea id="description" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div>
        </aside>

        <footer className="footer">
             <a></a>
        </footer>

    </div>
  
  );
}
