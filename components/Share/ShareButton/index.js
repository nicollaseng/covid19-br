import { Container } from './styles';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share"

const url = "http://www.covid19-br.com";
const message = "Acompanhe";

const ShareButton = () => {
  return (
    <Container>
      <WhatsappShareButton url={url} title="COVID-19 Urgente">
        <WhatsappIcon size={35} round />
      </WhatsappShareButton>
      <TelegramShareButton title="Acompanhe o COVID-19" url={url}>
        <TelegramIcon size={35} round />
      </TelegramShareButton>
      <TwitterShareButton url={url} title="COVID-19" via={message}>
        <TwitterIcon size={35} round />
      </TwitterShareButton>
      <FacebookShareButton quote={message} url={url}>
        <FacebookIcon size={35} round />
      </FacebookShareButton>
    </Container>
  );
}

export default ShareButton;
