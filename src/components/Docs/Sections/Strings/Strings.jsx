import React from 'react';
import styles from '../Sections.module.scss';

export const Strings = () => {
    return(
        <>
            <h1 className={styles.header}>
                Строки
            </h1>
            <div className={styles.main__info}>
                <p>Python предоставляет большую коллекцию операторов, функций и методов для работы со строками. Когда вы закончите изучение этой документации, узнаете, как получить доступ и извлечь часть строки, а также познакомитесь с методами, которые доступны для манипулирования и изменения строковых данных. Ниже рассмотрим операторы, методы и функции, доступные для работы с текстом.</p>
                <h2>Строковые операторы</h2>
                <p>Вы уже видели операторы + и * в применении их к числовым значениям в уроке по операторам в Python . Эти два оператора применяются и к строкам.</p>
                <h2>Оператор сложения строк</h2>
                <p>+ - это оператор конкатенации строк. Он возвращает строку, состоящую из других строк, как показано здесь:</p>
                <code>
                    <p>s = <span className={styles.string}>"Pyt"</span></p>
                    <p>h = <span className={styles.string}>"hon"</span></p>
                    <p><span className={styles.func}>print</span>(s + h)</p>
                    <p className={styles.no__code}># Будет выведено Python</p>
                    <p><span className={styles.func}>print</span>(<span className={styles.string}>"Привет, "</span> + <span className={styles.string}>"Мир"</span>)</p>
                    <p className={styles.no__code}># Будет выведено Привет, Мир</p>
                    <p><span className={styles.func}>print</span>(<span className={styles.string}>"Привет, "</span> + <span className={styles.string}>h</span>)</p>
                    <p className={styles.no__code}># Будет выведено Привет, hon</p>
                </code>
                <h2>Умножение строк</h2>
                <p>* — оператор создает несколько копий строки. Если s это строка, а n целое число, любое из следующих выражений возвращает строку, состоящую из n объединенных копий s</p>
                <code>
                    <p>s = <span className={styles.string}>"Python"</span></p>
                    <p><span className={styles.func}>print</span>(s * <span className={styles.num}>4</span>)</p>
                    <p className={styles.no__code}>#  Будет выведено PythonPythonPythonPython</p>
                    <p><span className={styles.func}>print</span>(<span className={styles.num}>4</span> * s)</p>
                    <p className={styles.no__code}>#  Будет выведено то же самое</p>
                </code>
                <p>Значение множителя n должно быть целым положительным числом. Оно может быть нулем или отрицательным, но этом случае результатом будет пустая строка</p>
                <code>
                    <p>s = <span className={styles.string}>"Python"</span></p>
                    <p><span className={styles.func}>print</span>(s * <span className={styles.num}>-4</span>)</p>
                    <p className={styles.no__code}>#  Будет выведено ''</p>
                    
                </code>
                <h2>Оператор принадлежности подстроки in</h2>
                <p>Python также предоставляет оператор принадлежности, который можно использоваться для манипуляций со строками. Оператор in возвращает True, если подстрока входит в строку, и False, если нет</p>
                <code>
                    <p>s = <span className={styles.string}>"Python"</span></p>
                    <p><span className={styles.func}>print</span>(s <span className={styles.classPy}>in</span> "I hate Python")</p>
                    <p className={styles.no__code}>True</p>
                    <p><span className={styles.func}>print</span>(s <span className={styles.classPy}>in</span> "I love Java")</p>
                    <p className={styles.no__code}>False</p>
                </code>
                <p>При использовании not все меняется</p>
                <code>
                    <p>s = <span className={styles.string}>"Python"</span></p>
                    <p><span className={styles.func}>print</span>(s <span className={styles.classPy}>not in</span> "I love Java")</p>
                    <p className={styles.no__code}>True</p>
                </code>
                <p>Также со строками можно использовать такие методы, как: <span className={styles.func}>len</span>, у строк есть индексация как и у списков ( тоже начинается с единицы ). Вообще у строк ооооочень много методов, например <span className={styles.func}>upper</span>, <span className={styles.func}>lower</span>, <span className={styles.func}>istitle</span> и так далее. О них больше в документации </p>
            </div>
            <code></code>
        </>
    );
};
