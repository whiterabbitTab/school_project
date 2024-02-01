import React from 'react';
import styles from '../Sections.module.scss';

export const Conditions = () => {
    return(
        <>
            <h1 className={styles.header}>
                Условия и Циклы
            </h1>
            <div className={styles.main__info}>
                <p>Во всех языках программирования вы сможете обнаружить конструкции ветвления и циклов. За урок вы познакомитесь с этими конструкциями, узнаете зачем они нужны и научитесь их использовать на практике.</p>
                <p className={styles.one}>Разберем условные конструкции и циклы</p>
                <h2>Условия</h2>
                <p className={styles.one}>Простой синтаксис <span>if</span> оператора</p>
                <code>
                    <p>a = <span className={styles.num}>10</span></p>
                    <p><span className={styles.func}>if</span> a == <span className={styles.num}>10</span>:</p>
                    <p style={{paddingLeft: 30}}><span className={styles.func}>print</span>(<span className={styles.string}>'a = 10'</span>)</p>
                    <p><span className={styles.func}>elif</span> a == <span className={styles.num}>5</span></p>
                    <p style={{paddingLeft: 30}}><span className={styles.func}>print</span>(<span className={styles.string}>'a = 5'</span>)</p>
                    <p><span className={styles.func}>else</span>:</p>
                    <p style={{paddingLeft: 30}}><span className={styles.func}>print</span>(<span className={styles.string}>'a не равен 10 или 5'</span>)</p>
                </code>
                <p className={styles.one}>Код выведет <span>a = 10</span></p>
                <p>Первая строчка оператора, то есть if condition ( a == 10 ): — это условие if, а condition — это логическое выражение, которое возвращает True или False. В следующей строке блок инструкций. Блок представляет собой одну или больше инструкций. Если он идет следом за условием if, такой блок называют блоком if. Else выполняется, когда ни одно из условий не выполняется</p>
                <p>Стоит обратить внимание, что у каждой инструкции в блоке if одинаковый отступ от слова if. Многие языки, такие как C, C++, Java и PHP, используют фигурные скобки ( {"{}"} ), чтобы определять начало и конец блока, но в Python используются отступы.</p>
                <h2>Цикл For</h2>
                <p className={styles.one}>Циклы for повторяют определённый код для некоторого набора значений. Вот простой пример кода</p>
                <code>
                    <p><span className={styles.func}>for</span> i <span className={styles.func}>in</span> [<span className={styles.num}>0</span>, <span className={styles.num}>1</span>, <span className={styles.num}>2</span>, <span className={styles.num}>3</span>]:</p>
                    <p style={{paddingLeft: 30}}><span className={styles.func}>print</span>(i, <span className={styles.orange}>end</span>=<span className={styles.string}>'; '</span>)</p>
                    <p className={styles.no__code}># 0; 1; 2; 3; </p>
                </code>
                <p>Функция <span>range(start, stop, [, step])</span> возвращает последовательность целых чисел на основе переданных ей аргументов. Берет два аргумента: первый - это первое значение в диапазоне. Если функция <span>range()</span> вызывается только с одним аргументом, то Python считает, что start = 0.</p>
                <code>
                    <p><span className={styles.func}>for</span> i <span className={styles.func}>in</span> <span className={styles.func}>range</span>(<span className={styles.num}>1</span>, <span className={styles.num}>5</span>):</p>
                    <p style={{paddingLeft: 30}}><span className={styles.func}>print</span>(i, <span className={styles.orange}>end</span>=<span className={styles.string}>'; '</span>)</p>
                    <p className={styles.no__code}># 0; 1; 2; 3; 4;</p>
                </code>
                <p className={styles.one}>Еще пример</p>
                <code>
                    <p><span className={styles.func}>for</span> i <span className={styles.func}>in</span> <span className={styles.func}>range</span>(<span className={styles.num}>-2</span>, <span className={styles.num}>5</span>, <span className={styles.num}>2</span>):</p>
                    <p style={{paddingLeft: 30}}><span className={styles.func}>print</span>(i, <span className={styles.orange}>end</span>=<span className={styles.string}>'; '</span>)</p>
                    <p className={styles.no__code}># -2; 0; 2; 4;</p>
                </code>
                <p className={styles.one}>Также можно использовать <span>else</span> с циклом <span>for</span></p>
                <code>
                    <p><span className={styles.func}>for</span> i <span className={styles.func}>in</span> <span className={styles.func}>range</span>(<span className={styles.num}>1</span>, <span className={styles.num}>4</span>):</p>
                    <p style={{paddingLeft: 30}}> <span className={styles.func}>if</span> i == <span className={styles.num}>5</span>:</p>
                    <p style={{paddingLeft: 60}}><span className={styles.func}>break</span></p>
                    <p><span className={styles.func}>else</span>:</p>
                    <p style={{paddingLeft: 30}}><span className={styles.func}>print</span>(<span className={styles.string}>"Else"</span>)</p>
                    <p className={styles.no__code}># будет выведено Else</p>
                </code>
                <p className={styles.one}>Блок else будет, если цикл <span>for</span> полностью завершит итерацию, но не будет выполнен, если цикл прерван оператором <span>break</span></p>
                <h2>Цикл While</h2>
                <p>Цикл while используется в Python для неоднократного исполнения определенной инструкции до тех пор, пока заданное условие остается истинным. Этот цикл позволяет программе перебирать блок кода. Вот пример кода:</p>
                <code>
                    <p>a = <span className={styles.num}>1</span></p>
                    <p><span className={styles.func}>while</span> a {"<"} <span className={styles.num}>5</span>:</p>
                    <p style={{paddingLeft: 30}}>a += <span className={styles.num}>1</span></p>
                </code>
                <p>Сначала программа оценивает условие цикла <span>while</span>. Если оно истинное, начинается цикл, и тело <span>while</span> исполняется. Тело будет исполняться до тех пор, пока условие остается истинным. Если оно становится ложным, программа выходит из цикла и прекращает исполнение тела. В данном примере код <span>while</span> не будет выполняться в тот момент, когда <span>a</span> будет равно 5</p>
                <p className={styles.one}>Надо быть осторожным при работе с <span>while</span>, ведь может произойти так, что код будет ввыполняться вечно, пока не остановить процесс самому</p>
                <code>
                    <p>a = <span className={styles.num}>1</span></p>
                    <p><span className={styles.func}>while</span> a {"=="} <span className={styles.num}>1</span>:</p>
                    <p style={{paddingLeft: 30}}><span className={styles.func}>print</span>(<span className={styles.string}>"Бесконечный цикл"</span>)</p>
                    <p className={styles.no__code}>Цикл не остановиться самостоятельно</p>
                </code>
            </div>
        </>
    );
};
