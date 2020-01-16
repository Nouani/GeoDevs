import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

import './styles.css';

function DevItem({ dev }) {
    return (
        <li className="dev-item">
            <header>
                <div className="inside-block">
                    <img src={dev.avatar_url} alt={dev.name} />
                
                    <div className="user-info">
                        <strong>{dev.name}</strong>
                        <span>{dev.techs.join(', ')}</span>
                    </div>

                    <div className="icons">
                        <button className="edit-button">
                            <EditOutlinedIcon className="icon" />
                        </button>
                        <button className="remove-button">
                            <ClearOutlinedIcon className="icon" />
                        </button>
                    </div>
                </div>
                <p>{dev.bio}</p>
                <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
            </header>
        </li>
    )
}

export default DevItem;