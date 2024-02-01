import React, { useContext, useEffect } from 'react';
import styles from '../Sections_pr.module.scss';
import { Context } from '../../Practice';

export const Test = ({ id, local_result }) => {

    const context = useContext(Context)[id]

    const code = context["code"]
    const answers = context["answers"]
    const right_ans = context['right_ans']
    const question = context['question']

    console.log(local_result)

    useEffect(() => {
        if (local_result[0][id] != undefined) {
            const btn = document.querySelector(`[data-question-id="${id}"]`).querySelector(`[data-btn-id="${local_result[0][id][1]}"]`) 
            if ( local_result[0][id][0] == 'true') {
                btn.getElementsByClassName(styles.first)[0].style.width = "15px"
                setTimeout(() => {btn.getElementsByClassName(styles.second)[0].style.width = "30px"}, 75)
            } else {
                btn.getElementsByClassName(styles.first)[0].style.width = "40px"
                setTimeout(() => {btn.getElementsByClassName(styles.second)[0].style.width = "40px"}, 75)
            }
            for (let lt = 0; lt < 3; lt++) {
                document.querySelector(`[data-question-id="${id}"]`).getElementsByClassName(styles.answer__btn)[lt].setAttribute('disabled', true)
            }
        }
    }, [])

    const checkAnswer = (event) => {

        let answer = event.currentTarget.getAttribute('data-answer')
        if (answer == 'true') {
            let right_btn = event.target.getElementsByClassName(styles.right_ans)[0]
            right_btn.getElementsByClassName(styles.first)[0].style.width = "15px"
            setTimeout(() => {right_btn.getElementsByClassName(styles.second)[0].style.width = "30px"}, 75)
        } else {
            let wrong_btn = event.target.getElementsByClassName(styles.wrong_ans)[0]
            wrong_btn.getElementsByClassName(styles.first)[0].style.width = "40px"
            setTimeout(() => {wrong_btn.getElementsByClassName(styles.second)[0].style.width = "40px"}, 75)
        }
        local_result[1]({
            ...local_result[0],
            [id]: [answer, event.currentTarget.getAttribute('data-btn-id')]
        })
        for (let lt = 0; lt < 3; lt++) {
            document.querySelector(`[data-question-id="${id}"]`).getElementsByClassName(styles.answer__btn)[lt].setAttribute('disabled', true)
        }
    }

    return(
        <div data-question-id={id} className={styles.block}>
            <p>{question}</p>
            {code}
            <div className={styles.answer}>
                <button className={styles.answer__btn} onClick={checkAnswer} data-btn-id={0} data-answer={right_ans[0][0]}>{answers[0]} <div className={right_ans[0][1]}><span className={styles.first}></span><span className={styles.second}></span></div></button>
                <button className={styles.answer__btn} onClick={checkAnswer} data-btn-id={1} data-answer={right_ans[1][0]}>{answers[1]}<div className={right_ans[1][1]}><span className={styles.first}></span><span className={styles.second}></span></div></button>
                <button className={styles.answer__btn} onClick={checkAnswer} data-btn-id={2} data-answer={right_ans[2][0]}>{answers[2]}<div className={right_ans[2][1]}><span className={styles.first}></span><span className={styles.second}></span></div></button>
            </div>
        </div>
    );
};
