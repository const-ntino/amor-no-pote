import * as S from "../styles/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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

const Reflexo = () => {
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

export default Reflexo;
