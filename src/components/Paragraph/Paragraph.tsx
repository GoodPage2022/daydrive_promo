import React from 'react';
import './Paragraph.scss';
import { ParagraphProps } from './Types';

const Paragraph: React.FC<ParagraphProps> = ({ children, classNames }) => {
	return <p className={`paragraph ${classNames ? classNames : ''}`}>{children}</p>;
};

export default Paragraph;
