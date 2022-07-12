import React from 'react';
import './MainForm.scss';
//svg
import FormSVG from '../../../images/svg/mainPage/mainForm/mainForm.inline.svg';
import SectionHeader from '../../SectionHeader/SectionHeader';

const MainForm = () => {
	const [name, setName] = React.useState('');
	const [phone, setPhone] = React.useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Name: ', name);
		console.log('Phone: ', phone);
		setName('');
		setPhone('');
	};

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};
	const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(e.target.value);
	};
	return (
		<section className="main-form" id="contacts">
			<SectionHeader>ХОЧЕТЕ СТАТИ ПАРТНЕРОМ ЗАРАЗ?</SectionHeader>
			<div className="main-form__wrapper">
				<form onSubmit={handleSubmit} className="main-form__form">
					<h3 className="main-form__form-title">Заповніть форму, і ми зв`яжемося
					з вами найближчим часом</h3>
					<div className="main-form__form-input-wrapper">
						<input onChange={handleChangeName} value={name} name="name" id="name" type="text" className="main-form__form-input" />
						{name.length === 0 && <label htmlFor="name">Ім`я</label>}
					</div>
					<div className="main-form__form-input-wrapper">
						<input onChange={handleChangePhone} value={phone} name="phone" id="phone" type="text" className="main-form__form-input" />

						{phone.length === 0 && <label htmlFor="name">Телефон</label>}
					</div>

					<button type="submit" className="main-form__form-button">
						Надіслати
					</button>
				</form>
				<div className="main-form__svg">
					<FormSVG />
				</div>
			</div>
		</section>
	);
};

export default MainForm;
