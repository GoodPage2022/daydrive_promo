import React from 'react';
import FormSVG from '../../../images/svg/mainPage/mainForm/mainForm.inline.svg';
import './MainForm.scss';

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
		<section className="main-form">
			<form onSubmit={handleSubmit} className="main-form__form">
				<h3 className="main-form__form-title">Заполните форму, и мы свяжемся с вами в ближайшее время</h3>
				<div className="main-form__form-input-wrapper">
					<input onChange={handleChangeName} value={name} name="name" id="name" type="text" className="main-form__form-input" />
					{name.length === 0 && <label htmlFor="name">Имя</label>}
				</div>
				<div className="main-form__form-input-wrapper">
					<input onChange={handleChangePhone} value={phone} name="phone" id="phone" type="text" className="main-form__form-input" />

					{phone.length === 0 && <label htmlFor="name">Телефон</label>}
				</div>

				<button type="submit" className="main-form__form-button">
					Отправить
				</button>
			</form>
			<div className="main-form__svg">
				<FormSVG />
			</div>
		</section>
	);
};

export default MainForm;
