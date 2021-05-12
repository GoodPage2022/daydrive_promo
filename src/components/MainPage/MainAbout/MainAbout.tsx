import React from 'react';
import Container from '../../Container/Container';
import Paragraph from '../../Paragraph/Paragraph';
import SectionHeader from '../../SectionHeader/SectionHeader';
import './MainAbout.scss';
import ArrowSVG from '../../../images/svg/mainPage/arrowMore.inline.svg';

const MainAbout: React.FC = () => {
	return (
		<section className="main-about-us">
			<Container>
				<SectionHeader>О нас</SectionHeader>
				<div className="main-about-us__text-wrap">
					<Paragraph>
						Задача организации, в особенности же укрепление и развитие структуры требуют определения и уточнения дальнейших направлений
						развития. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу
						(специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям Идейные соображения высшего
						порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации направлений прогрессивного
						развития. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности требуют от нас анализа
						позиций, занимаемых участниками в отношении поставленных задач. С другой стороны новая модель организационной деятельности
						представляет собой интересный эксперимент проверки форм развития.
					</Paragraph>
				</div>
				<button className="main-about-us__btn-more">
					подробнее <ArrowSVG className="main-about-us__btn-svg" />
				</button>
			</Container>
		</section>
	);
};

export default MainAbout;
