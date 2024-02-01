import React from 'react';
import styles from '../Sections_pr.module.scss';
import { Test } from '../Test_block/Test';

export const Start_pr = ({ local_result }) => {
    return(
        <>
            <h1 className={styles.header}>Практика по первому модулю</h1>
            <div className={styles.practice__block}>
                <Test local_result={local_result} id={"1"}></Test>
                <Test local_result={local_result} id={"2"}></Test>
            </div>
        </>
    );
};
