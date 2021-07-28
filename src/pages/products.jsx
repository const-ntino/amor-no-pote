import * as S from "../styles/index";
import * as P from "../styles/products";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

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

const Products = () => {
  return (
    <S.Section initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <P.Container animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <S.Header variants={fadeInUp}>
          <a href="/" className="logo">
            <img src="/logo.svg" alt="logo escrito Amor no pote" />
          </a>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/products" className="active">
                Produtos
              </a>
            </li>
          </ul>
        </S.Header>

        <P.H2 variants={fadeInUp}>Escolha seu potinho</P.H2>

        <P.CardContainer
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
          variants={stagger}
        >
          <P.Card whileTap={{ scale: 0.95 }} variants={fadeInUp}>
            <P.ImgBox>
              <img
                src="/potinho1.webp"
                alt="imagem de um pote de vidro com vários papéis enrolados dentro"
              />
            </P.ImgBox>
            <P.Content className="card-content">
              <P.ContentBox className="content-box">
                <h3>Potinho Sorriso</h3>
                <P.Button className="button">
                  <a href="/">
                    <FontAwesomeIcon icon={faArrowCircleRight} size="xs" />
                  </a>
                </P.Button>
                <span>
                  Contém 90 mensagens, sendo 30 frases, 30 músicas e 30 motivos
                  do "Porque te amo".
                </span>
              </P.ContentBox>
            </P.Content>
          </P.Card>

          <P.Card whileTap={{ scale: 0.95 }} variants={fadeInUp}>
            <P.ImgBox>
              <img
                src="/potinho3.webp"
                alt="imagem de um pote de vidro com vários papéis enrolados dentro"
              />
            </P.ImgBox>
            <P.Content className="card-content">
              <P.ContentBox className="content-box">
                <h3>Potinho Sortidos</h3>
                <P.Button className="button">
                  <a href="/">
                    <FontAwesomeIcon icon={faArrowCircleRight} size="xs" />
                  </a>
                </P.Button>
                <span>
                  Contém 250 mensagens de motivação, versículos e empoderamento
                  feminino.
                </span>
              </P.ContentBox>
            </P.Content>
          </P.Card>

          <P.Card whileTap={{ scale: 0.95 }} variants={fadeInUp}>
            <P.ImgBox>
              <img
                src="/potinho2.webp"
                alt="imagem de um pote de vidro com vários papéis enrolados dentro"
              />
            </P.ImgBox>
            <P.Content className="card-content">
              <P.ContentBox className="content-box">
                <h3>Potinho Reflexões</h3>
                <P.Button className="button">
                  <a href="/">
                    <FontAwesomeIcon icon={faArrowCircleRight} size="xs" />
                  </a>
                </P.Button>
                <span>
                  Contém 365 mensagens de reflexões diárias para um ano inteiro
                  de motivação.
                </span>
              </P.ContentBox>
            </P.Content>
          </P.Card>
        </P.CardContainer>

        <S.SocialContainer variants={stagger}>
          <li>
            <S.Social variants={fadeInUp}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </S.Social>
          </li>
          <li>
            <S.Social variants={fadeInUp}>
              <FontAwesomeIcon icon={faInstagram} />
            </S.Social>
          </li>
        </S.SocialContainer>
      </P.Container>
    </S.Section>
  );
};

export default Products;
