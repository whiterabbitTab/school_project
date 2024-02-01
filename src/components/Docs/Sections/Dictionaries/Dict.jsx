import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Sections.module.scss'

export const Dict = () => {
    return(
        <>
            <h1 className={styles.header}>Словари</h1>
            <div className={styles.main__info}>
                <p className={styles.one}>Словарь — неупорядоченная структура данных, которая позволяет хранить пары «ключ — значение». Вот пример словаря на Python:</p>
                <code>
                    <p>dictionary = {"{"}</p>
                    <p className={styles.indent}><span className={styles.string}>"name"</span>: <span className={styles.string}>"Alex"</span></p>
                    <p className={styles.indent}><span className={styles.string}>"age"</span>: <span className={styles.num}>21</span></p>
                    <p>{"}"}</p>
                </code>
                <p>Данный словарь использует строки в качестве ключей, однако ключом может являться в принципе любой неизменяемый тип данных. Значением же конкретного ключа может быть что угодно. Вот ещё один пример словаря, где ключами являются числа, а значениями — строки:</p>
                <p className={styles.one}>Ключами могут быть лыбые <span>неизменяемые</span> типы данных (  На самом деле проблема не с изменяемыми, а с нехэшируемыми типами данных, но обычно это одно и то же. ). Cтроки, числа, кортежи могут быть, а вот те же массивы - нет )</p>
                <code>
                    <p>dictionary = {"{"}</p>
                    <p className={styles.indent}><span className={styles.string}>"name"</span>: <span className={styles.string}>"Alex"</span>,</p>
                    <p className={styles.indent}><span className={styles.num}>0</span>: <span className={styles.string}>"null"</span>,</p>
                    <p className={styles.indent}>(<span className={styles.num}>1</span>, <span className={styles.string}>'sdf'</span>, <span className={styles.num}>142</span>): <span className={styles.string}>"rabbit"</span></p>
                    <p>{"}"}</p>
                </code>
                <h2>Получение данных из словаря, обновление, удаление и добавление ключей</h2>
                <code>
                <p>dictionary = {"{"}</p>
                    <p className={styles.indent}><span className={styles.string}>"name"</span>: <span className={styles.string}>"Alex"</span>,</p>
                    <p className={styles.indent}><span className={styles.num}>0</span>: <span className={styles.string}>"null"</span>,</p>
                    <p className={styles.indent}>(<span className={styles.num}>1</span>, <span className={styles.string}>'sdf'</span>, <span className={styles.num}>142</span>): <span className={styles.string}>"rabbit"</span></p>
                    <p>{"}"}</p>
                    <p>dictionary[<span className={styles.string}>"name"</span>]</p>
                    <p className={styles.no__code}># "Alex"</p>
                    <p>dictionary[<span className={styles.string}>"black_man"</span>] = <span className={styles.string}>"man"</span></p>
                    <p className={styles.no__code}># Добавили ключ со значением</p>
                    <p>dictionary[<span className={styles.string}>"black_man"</span>] = <span className={styles.string}>"not man"</span></p>
                    <p className={styles.no__code}># Обновили ключ со значением</p>
                    <p><span className={styles.classPy}>del </span>dictionary[<span className={styles.string}>"black_man"</span>]</p>
                    <p className={styles.no__code}># Удалили ключ с помощью del</p>
                </code>
                <h2>Методы</h2>
                <p>Словари в Python имеют множество различных полезных методов, которые помогут вам в работе с ними. Вот лишь некоторые из них:</p>
                <p><span>update()</span> - метод, который обновляет несколько пар сразу. Метод принимает другой словарь в качестве аргумента.</p>
                <code>
                    <p>dictionary.<span className={styles.method}>update</span>({"{"}</p>
                    <p className={styles.indent}><span className={styles.string}>"nationality"</span>: <span className={styles.string}>"russian"</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"country"</span>: <span className={styles.string}>"USA"</span></p>
                    <p>{"}"})</p>
                </code>
                <p><span>get()</span> - Метод возвращает значение по указанному ключу. Если указанного ключа не существует, метод вернёт None.</p>
                <code>
                    <p>dictionary = {"{"}</p>
                    <p className={styles.indent}><span className={styles.string}>"name"</span>: <span className={styles.string}>"Michael"</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"age"</span>: <span className={styles.num}>21</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"nationality"</span>: <span className={styles.string}>"russian"</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"country"</span>: <span className={styles.string}>"USA"</span></p>
                    <p>{"}"}</p>
                    <p>dictionary.<span className={styles.method}>get</span>("name")</p>
                    <p className={styles.no__code}># Michael</p>
                </code>
                <p><span>pop()</span> - Метод удаляет ключ и возвращает соответствующее ему значение.</p>
                <code>
                    <p>dictionary = {"{"}</p>
                    <p className={styles.indent}><span className={styles.string}>"name"</span>: <span className={styles.string}>"Michael"</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"age"</span>: <span className={styles.num}>21</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"nationality"</span>: <span className={styles.string}>"russian"</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"country"</span>: <span className={styles.string}>"USA"</span></p>
                    <p>{"}"}</p>
                    <p>dictionary.<span className={styles.method}>pop</span>("name")</p>
                    <p className={styles.no__code}># Вернет Michael и в dictionary удалит ключ name </p>
                </code>
                <p><span>keys()</span> - Метод возвращает коллекцию ключей в словаре.</p>
                <code>
                    <p>dictionary = {"{"}</p>
                    <p className={styles.indent}><span className={styles.string}>"name"</span>: <span className={styles.string}>"Michael"</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"age"</span>: <span className={styles.num}>21</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"nationality"</span>: <span className={styles.string}>"russian"</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"country"</span>: <span className={styles.string}>"USA"</span></p>
                    <p>{"}"}</p>
                    <p>dictionary.<span className={styles.method}>keys</span>()</p>
                    <p className={styles.no__code}># ["name", "age", "nationality", "country"]</p>
                </code>
                <p><span>values()</span> - Метод вовзращает коллекцию значений в словаре.</p>
                <code>
                    <p>dictionary = {"{"}</p>
                    <p className={styles.indent}><span className={styles.string}>"name"</span>: <span className={styles.string}>"Michael"</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"age"</span>: <span className={styles.num}>21</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"nationality"</span>: <span className={styles.string}>"russian"</span>,</p>
                    <p className={styles.indent}><span className={styles.string}>"country"</span>: <span className={styles.string}>"USA"</span></p>
                    <p>{"}"}</p>
                    <p>dictionary.<span className={styles.method}>values</span>()</p>
                    <p className={styles.no__code}># ["Michael", 21, "russian", "USA"]</p>
                </code>
                <p>Методов, конечно же, куда больше, но это основные методы, которые часто используются в работе. Еще большее количество методов в документации</p>
            </div>
        </>
    );
};
