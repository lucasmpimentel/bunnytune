/* eslint-disable react/jsx-max-depth */
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import { spotifyLogin } from '../../../service/backEndConnection';
import BackButton from '../../../components/shared/BackButton';
import Loading from '../../../components/Loading';
import * as C from './styles';
import Context from '../../../context/context';
import spotfyLogo from '../../../assets/images/Spotify_Logo_RGB_White.png';

export default function SpotifyLogin() {
  const navigate = useNavigate();
  const { user, loading, setLoading } = useContext(Context);
  const clientId = '111f447098364f91bebc25a748808f71';
  const redirectUri = 'http://localhost:3000/discovery';
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

  const code = new URLSearchParams(window.location.search).get('code');

  const handleClick = () => {
    window.location.replace(AUTH_URL);
  };

  useEffect(() => {
    setLoading(true);
    if (code) {
      spotifyLogin(code);
      navigate('/discovery');
    }
    const onPageLoad = () => {
      setLoading(false);
    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
    }
    return () => window.removeEventListener('load', onPageLoad);
  }, []);

  return (
    loading ? <Loading /> : (
      <C.Main>
        <C.Glass>
          <BackButton type="button" onClick={ () => navigate('/') }>
            <TbArrowBackUp />
          </BackButton>
          { user ? (
            <C.Title>
              {`Olá ${user.name}`}
            </C.Title>
          ) : <C.Title>Olá</C.Title> }
          <C.Section>
            <div>
              <C.Title>Atenção</C.Title>
              <C.Text>
                {'Para utilizar a aplicação é necessário sincronizar '
                + 'com a sua conta do Spotify'}
              </C.Text>
            </div>
            <C.SpotifyButton onClick={ handleClick } type="button">
              <C.SpotifyLogo src={ spotfyLogo } alt="sincronizar com spotify" />
            </C.SpotifyButton>
          </C.Section>
        </C.Glass>
      </C.Main>
    )
  );
}
