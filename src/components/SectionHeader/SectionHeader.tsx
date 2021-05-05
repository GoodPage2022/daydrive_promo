import React from 'react';
import './SectionHeader.scss';

const SectionHeader: React.FC = ({ children }) => {
	return <h2 className="section-header">{children}</h2>;
};

export default SectionHeader;
