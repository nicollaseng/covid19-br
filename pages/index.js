import { useEffect, useState } from 'react';
import last from 'lodash/last';
import axios from 'axios';

import Layout from '../layout';
import Button from '../components/Button'
import ShareButton from "../components/Share/ShareButton";

import { Covid, Country, Container, Counters, CounterContainer, ButtonContainer, TitleContainer, CountersContainer, CounterTitle, CounterValue, Image, ImageContainer, ImageTitle, ImageMessage } from '../styles'

const Home = () => {
  const [brazil, setBrazil] = useState({});
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get("https://pomber.github.io/covid19/timeseries.json")
      .then(response => setBrazil(last(response.data.Brazil)))
  };

  const handleAction = () => {
    setReveal(true);
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
      {reveal ? (
        <ImageContainer>
          <ImageTitle>Não!</ImageTitle>
          <Image src="https://media.giphy.com/media/d78vbBA54uHFS/giphy.gif" />
          <ImageMessage>Nunca foi tão fácil salvar o mundo, basta apenas ficar em casa! Vamos todos derrotar o coronavírus! =)</ImageMessage>
          <ShareButton />
        </ImageContainer>
      ) : (
          <ButtonContainer>
            <Button action={handleAction} />
          </ButtonContainer>
        )}
    </Layout>
  )
}

export default Home
