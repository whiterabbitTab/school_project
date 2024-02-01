import React from 'react';
import styles from '../Sections.module.scss';

export const Functions = () => {
    return(
        <>
            <h1 className={styles.header}>
                Функции
            </h1>
            <div className={styles.main__info}>
                <p>Функция в Python - это набор связанных инструкций, выполняющих одну задачу. Функции помогают разделить нашу программу на более мелкие модульные части. Функции помогают нашей программе становиться более упорядоченной и управляемой по мере увеличения ее размера. Это также устраняет повторения и делает код пригодным для повторного использования.</p>
                <p className={styles.one}>Вот пример простой функции: </p>
                <code>
                    <p><span className={styles.func}>def</span> <span className={styles.def}>Func</span>(<span className={styles.orange}>parametr</span>, <span className={styles.orange}>default_parametr</span> = 1):</p>
                    <p className={styles.indent}><span className={styles.classPy}>from </span> math <span className={styles.classPy}>import </span> pi</p>
                    <p className={styles.indent}>result = pi * <span className={styles.orange}>parametr</span></p>
                    <p className={styles.indent}><span className={styles.classPy}>return</span> result</p>
                </code>
                <p>Для определения функции нужно всего лишь написать ключевое слово def перед ее именем, а после — поставить двоеточие. Следом идет блок инструкций.
                    Последняя строка в блоке инструкций может начинаться с return, если нужно вернуть какое-то значение. Если инструкции return нет, тогда по умолчанию функция будет возвращать объект <span>None</span>. Параметры могут иметь значегия по умолчанию, в данном случае <span>default_parametr</span> имеет значение по умолчанию</p>
                    
                <h2>Вызовы</h2>
                <p className={styles.one}>Для вызова функции, которая возвращает переменную, нужно ввести:</p>
                <code>
                    <p>computer = <span className={styles.oper}>func</span>()</p>
                    <p className={styles.no__code}># Переменной computer задали значение, которое возвращает функция</p>
                </code>
                <p className={styles.one}>Для вызова функции, которая ничего не возвращает:</p>
                <code>
                    <p><span className={styles.oper}>func</span>()</p>
                    <p></p>
                </code>
                <h2>Вложенные функции</h2>
                <p className={styles.one}>Функции могут быть вложенными:</p>
                <code>
                    <p><span className={styles.func}>def</span> <span className={styles.def}>Func</span>(<span className={styles.orange}>a</span>):</p>
                    <p className={styles.indent}><span className={styles.func}>def</span> <span className={styles.def}>in_func</span>(<span className={styles.orange}>par</span>):</p>
                    <p style={{ paddingLeft: '80px'}}><span className={styles.classPy}>return</span> <span>par</span>*<span>par</span></p>
                    <p className={styles.indent}><span className={styles.classPy}>return</span> <span className={styles.oper}>in_func</span>(<span className={styles.orange}>par</span>)</p>
                </code>
            </div>
        </>
    );
};
