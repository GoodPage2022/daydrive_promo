import React, { Suspense, useState } from 'react';
import './MainAbout.scss';
//components
import Container from '../../Container/Container';
import Paragraph from '../../Paragraph/Paragraph';
import SectionHeader from '../../SectionHeader/SectionHeader';
//svg
import ArrowSVG from '../../../images/svg/mainPage/arrowMore.inline.svg';

const Carousel = React.lazy(() => import('./Carousel'));

const MainAbout: React.FC = () => {
	const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

	const handleDetails = () => {
		setDetailsOpen((prev) => !prev);
	};

	return (
		<section className="main-about-us" id="about">
			<Container>
				<SectionHeader>О нас</SectionHeader>
				<div className="main-about-us__wrapper">
					<Paragraph classNames="main-about-us__text">
						Задача организации, в особенности же укрепление и развитие структуры требуют определения и уточнения дальнейших направлений
						развития. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу
						(специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям
					</Paragraph>
					<Paragraph classNames={`main-about-us__text ${detailsOpen ? 'main-about-us__text--open' : ''}`}>
						Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации
						направлений прогрессивного развития. Повседневная практика показывает, что постоянный количественный рост и сфера нашей
						активности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. С другой стороны новая модель
						организационной деятельности представляет собой интересный эксперимент проверки форм развития.
					</Paragraph>
					<button className="main-about-us__btn-more" onClick={handleDetails}>
						подробнее <ArrowSVG className={`main-about-us__btn-svg ${detailsOpen ? 'main-about-us__btn-svg--open' : ''}`} />
					</button>
					{typeof window !== 'undefined' && (
						<Suspense fallback={<div />}>
							<Carousel />
						</Suspense>
					)}
				</div>
			</Container>
		</section>
	);
};

export default MainAbout;
