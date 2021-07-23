import * as S from "../styles/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Index = () => {
  return (
    <S.Section
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={stagger}
    >
      <S.Container animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <S.Header variants={fadeInUp}>
          <a href="/" className="logo">
            <img src="/logo.svg" alt="logo escrito Amor no pote" />
          </a>
          <ul>
            <li>
              <a href="/" className="active">
                Início
              </a>
            </li>
            <li>
              <a href="/products">Produtos</a>
            </li>
          </ul>
        </S.Header>

        <S.Intro variants={fadeInUp}>
          <h2>Guarde cada sentimento em um potinho</h2>
          <p>
            Sejam mensagens de amor ou mensagens motivacionais, nós te ajudamos
            a guardar suas emoções em lindos potes de vidro!
          </p>
          <a href="/products">Saiba mais</a>
        </S.Intro>
        <S.ImgBox variants={fadeInUp}>
          <img
            src="/5250065.svg"
            alt="Moça ruiva segurando um quadro transparente com um coração"
          />
        </S.ImgBox>
        <S.SocialContainer variants={stagger}>
          <li>
            <S.Social variants={fadeInUp}>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </S.Social>
          </li>
          <li>
            <S.Social variants={fadeInUp}>
              <FontAwesomeIcon icon={faInstagram} />
            </S.Social>
          </li>
        </S.SocialContainer>
      </S.Container>
    </S.Section>
  );
};

export default Index;
