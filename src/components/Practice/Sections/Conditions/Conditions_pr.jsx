import React from 'react';
import styles from '../Sections_pr.module.scss';
import { Test } from '../Test_block/Test';

export const Conditions_pr = ({ local_result }) => {
    return(
        <>
            <h1 className={styles.header}>Практика по третьему модулю</h1>
            <div className={styles.practice__block}>
                <Test local_result={local_result} id={"8"}></Test>
                <Test local_result={local_result} id={"9"}></Test>
                <Test local_result={local_result} id={"10"}></Test>
            </div>
        </>
    );
};
