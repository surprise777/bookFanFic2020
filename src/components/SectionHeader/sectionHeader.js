import React from 'react';
import styles from './sectionHeader.module.css';

const SectionHeader = ({headerText}) => {
    return (
        <div className={styles.section_header}>
            <strong>{headerText}</strong>
        </div>
    )
}

export default SectionHeader;