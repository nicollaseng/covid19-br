import { Container } from './styles';
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share"

const url = "http://www.covid19-br.com";
const message = "Saiba se já pode sair de casa";

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
