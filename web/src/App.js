import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form action="">
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              type="text"
              name="github_username"
              id="github_username"
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              type="text"
              name="techs"
              id="techs"
              required
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="text"
                name="latitude"
                id="latitude"
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="text"
                name="longitude"
                id="longitude"
                required
              />
            </div>
          </div>
          
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49238044?v=4" alt="Nouani"/>
              <div className="user-info">
                <strong>Nouani</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>IT student/monitor at Technical High School of Campinas - Unicamp</p>
              <a href="https://github.com/Nouani">Acessar perfil no GitHub</a>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49238044?v=4" alt="Nouani"/>
              <div className="user-info">
                <strong>Nouani</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>IT student/monitor at Technical High School of Campinas - Unicamp</p>
              <a href="https://github.com/Nouani">Acessar perfil no GitHub</a>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49238044?v=4" alt="Nouani"/>
              <div className="user-info">
                <strong>Nouani</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>IT student/monitor at Technical High School of Campinas - Unicamp</p>
              <a href="https://github.com/Nouani">Acessar perfil no GitHub</a>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/49238044?v=4" alt="Nouani"/>
              <div className="user-info">
                <strong>Nouani</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>IT student/monitor at Technical High School of Campinas - Unicamp</p>
              <a href="https://github.com/Nouani">Acessar perfil no GitHub</a>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
