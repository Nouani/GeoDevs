import React, { useState, useEffect } from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

function App() {
  const [github_username, setGitHubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, [])

  async function handleAddDev(e){
    e.preventDefault();

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              type="text"
              name="github_username"
              id="github_username"
              value={github_username}
              onChange={e => setGitHubUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              type="text"
              name="techs"
              id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
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
