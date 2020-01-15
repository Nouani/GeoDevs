import React, { useState, useEffect } from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

function App() {
  const [devs, setDevs] = useState([]);

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

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })

    setGitHubUsername('');
    setTechs('');

    setDevs([...devs, response.data]);
    console.log(response.data);
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

          {devs.map(dev => {
            return (
              <li className="dev-item" key={dev._id}>
                <header>
                  <img src={dev.avatar_url} alt={dev.name} />
                  <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                  </div>
                  <p>{dev.bio}</p>
                  <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
                </header>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
