import React from 'react';
import Container from '../Container/Container';
import './Footer.scss';
import LogoSVG from '../../images/svg/logoFooter.inline.svg';
import { nav } from '../../constants/nav';
import GpLogoSVG from '../../images/svg/footerGpLogo.inline.svg';
import AppleSVG from '../../images/svg/mainPage/apple.inline.svg';
import PlaystoreSVG from '../../images/svg/mainPage//playstore.inline.svg';

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<Container>
				<div className="footer__wrapper">
					<LogoSVG className="footer__logo" />
					<nav className="footer__nav">
						{nav.map(({ title, href, id }) => (
							<a className="footer__nav-link" key={id} href={href}>
								{title}
							</a>
						))}
					</nav>
					<div className="footer__contacts">
						<a href="tel:+380685586142" className="footer__contacts-phone">
							+38 (068) 558 61 42
						</a>
						<p className="footer__contacts-address">Украина, Киев ул. Коломыйский переулок 20</p>
					</div>
					<div className="footer__downloads">
						<a className="footer__downloads-link">
							<AppleSVG className="footer__downloads-link-svg" />
							<div>
								<p className="footer__downloads-link-text">Скачать в </p>
								<p className="footer__downloads-link-text">
									<strong>google play</strong>
								</p>
							</div>
						</a>
						<a className="footer__downloads-link">
							<PlaystoreSVG className="footer__downloads-link-svg" />
							<div>
								<p className="footer__downloads-link-text">Скачать в </p>
								<p className="footer__downloads-link-text">
									<strong>google play</strong>
								</p>
							</div>
						</a>
					</div>
					<div className="footer__bottom">
						<a className="footer__bottom-developed" href="https://goodpage.studio/" target="_blank" rel="noreferrer">
							<p className="footer__bottom-developed-text">Сайт разработан</p>
							<GpLogoSVG />
						</a>
						<p className="footer__bottom-copyright">Copyright © 2021 DAYDRIVE</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
