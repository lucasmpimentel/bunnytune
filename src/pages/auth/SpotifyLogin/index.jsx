import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import BackButton from '../../../components/shared/BackButton';

export default function SpotifyLogin() {
  const navigate = useNavigate();
  const clientId = '111f447098364f91bebc25a748808f71';
  const redirectUri = 'http://localhost:3000';
  const AUTH_URL = (
    'https://accounts.spotify.com/authorize?'
    + `client_id=${clientId}&`
    + 'response_type=code&'
    + `redirect_uri=${redirectUri}&`
    + 'scope=streaming%20user-read-email%20user-read-private%20user-library-read%20'
    + 'user-library-modify%20user-read-playback-state%20user-modify-playback-state%20'
    + 'ugc-image-upload%20user-follow-modify%20user-read-recently-played%20'
    + 'user-read-playback-position%20playlist-read-collaborative%20user-follow-read%20'
    + 'user-top-read%20playlist-modify-public%20user-read-currently-playing%20'
    + 'playlist-read-private%20playlist-modify-private'
  );

  return (
    <main>
      <BackButton type="button" onClick={ () => navigate('/') }>
        <TbArrowBackUp />
      </BackButton>
      <h1>Atenção</h1>
      <section>
        <p>
          Para utilizar a aplicação é necessário sincronizar com a sua conta do Spotify
        </p>
        <a href={ AUTH_URL }>
          <button type="button">Sincronizar</button>
        </a>
      </section>
    </main>
  );
}
