import { useEffect, useState } from 'react';
import last from 'lodash/last';
import axios from 'axios';

import Layout from '../layout';
import Button from '../components/Button'
import Loading from "../components/Loading";
import ShareButton from "../components/Share/ShareButton";

import { Covid, Country, Container, Counters, CounterContainer, ButtonContainer, TitleContainer, CountersContainer, CounterTitle, CounterValue, Image, ImageContainer, ImageTitle, ImageMessage, LoadingContainer, LoadingMessage } from '../styles';

import { initGA, logPageView } from "../utils/analytics";

const Loader = () => (
  <LoadingContainer>
    <Loading />
    <LoadingMessage>Verificando....</LoadingMessage>
  </LoadingContainer>
)

const Home = () => {
  const [brazil, setBrazil] = useState({});
  const [reveal, setReveal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    getAnalytics();
  }, []);

  const fetchData = async () => {
    await axios.get("https://pomber.github.io/covid19/timeseries.json")
      .then(response => setBrazil(last(response.data.Brazil)))
  };

  const getAnalytics = () => {
     if (!window.GA_INITIALIZED) {
       initGA();
       window.GA_INITIALIZED = true;
     }
     logPageView();
  }

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => {
      setReveal(true);
      setLoading(false);
    }, 1500);
  }

  return (
    <Layout>
        <CounterContainer>
          {/* <TitleContainer> */}
          <Covid className="title">COVID-19<Country className="title">Brasil</Country></Covid>
          <Counters>
            <CountersContainer>
              <CounterTitle>Confirmados</CounterTitle>
              <CounterValue>{brazil.confirmed}</CounterValue>
            </CountersContainer>
            <CountersContainer>
              <CounterTitle>Curados</CounterTitle>
              <CounterValue>{brazil.recovered}</CounterValue>
            </CountersContainer>
            <CountersContainer>
              <CounterTitle>Mortes</CounterTitle>
              <CounterValue>{brazil.deaths}</CounterValue>
            </CountersContainer>
          </Counters>
        </CounterContainer>
      {loading ? <Loader /> : reveal ? (
        <ImageContainer>
          <ImageTitle>Não!</ImageTitle>
          <Image src="../static/assets/gif/no.gif" />
          <ImageMessage>Nunca foi tão fácil salvar o mundo, basta apenas ficar em casa! Vamos todos derrotar o coronavírus! =)</ImageMessage>
          <ShareButton />
        </ImageContainer>
      ) : (
            <Button action={handleAction} />
        )}
    </Layout>
  )
}

export default Home
