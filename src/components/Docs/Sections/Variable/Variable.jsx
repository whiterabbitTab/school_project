import React from 'react';
import styles from '../Sections.module.scss'

export const Variable = () => {
    return(
        <>
            <h1 className={styles.header}>
                Переменные
            </h1>
            <div className={styles.main__info}>
                <p>Переменные предназначены для хранения данных. Название переменной в Python должно начинаться с алфавитного символа или со знака подчеркивания и может содержать алфавитно-цифровые символы и знак подчеркивания. И кроме того, название переменной не должно совпадать с названием ключевых слов языка Python. Ключевых слов не так много, их легко запомнить:</p>
                <ul>
                    <ul>
                        <li className={styles.func}>False</li>
                        <li className={styles.func}>for</li>
                        <li className={styles.func}>class</li>
                        <li className={styles.func}>break</li>
                        <li className={styles.func}>yield</li>
                        <li className={styles.func}>global</li>
                        <li className={styles.func}>async</li>
                    </ul>
                    <p className={styles.one}>И так далее смысл понятен</p>
                </ul>
                <p className={styles.one}>Создание переменной производится с помощью оператора присваивания</p>
                <code>
                    <p>name = <span className={styles.string}>"Tom"</span></p>
                </code>
                <p className={styles.one}>В пайтоне применяется два типа наименования переменных: <span>camel case</span> и <span>underscore notation.</span></p>
                <code>
                    <p className={styles.no__code}>Camel case подразумевает, что каждое новое подслово в наименовании переменной начинается с большой буквы. Например:</p>
                    <p>userName = <span className={styles.string}>"Tom"</span></p>
                    <p className={styles.no__code}>Underscore notation подразумевает, что подслова в наименовании переменной разделяются знаком подчеркивания. Например:</p>
                    <p>user_name = <span className={styles.string}>"Tom"</span></p>
                </code>
                <p className={styles.one}>И также надо учитывать регистрозависимость, поэтому переменные name и Name будут представлять разные объекты.</p>
                <code>
                    <p>Name = <span className={styles.string}>"Tom"</span></p>
                    <p>name = <span className={styles.string}>"Tom"</span></p>
                    <p className={styles.no__code}>Две разные переменные</p>
                </code>
                <p>Определив переменную, мы можем использовать в программе. Например, попытаться вывести ее содержимое на консоль с помощью встроенной функции print:</p>
                <code>
                    <p>name = <span className={styles.string}>"Tom"</span></p>
                    <p><span className={styles.func}>print</span>(name)</p>
                </code>
                <h2>Типы данных</h2>
                <p>Переменная хранит данные одного из типов данных. В Python существует множество различных типов данных. В данном случае рассмотрим только самые базовые типы:<span> bool, int, float и str.</span></p>
                <h4>Логические Значения</h4>
                <p>Тип bool представляет два логических значения: True (верно, истина) или False (неверно, ложь). Значение True служит для того, чтобы показать, что что-то истинно. Тогда как значение False, наоборот, показывает, что что-то ложно.</p>
                <code>
                    <p className={styles.no__code}>Тип данных boolean. </p>
                    <p>isString = <span className={styles.classPy}>False</span></p>
                </code>
                <h4>Целые числа</h4>
                <p className={styles.one}>Тип int представляет целое число, например, 1, 4, 8, 50.</p>
                <p>По умолчанию стандартные числа расцениваются как числа в десятичной системе. Но Python также поддерживает числа в двоичной, восьмеричной и шестнадцатеричной системах.</p>
                <code>
                    <p className={styles.no__code}>Тип данных int</p>
                    <p>age = <span className={styles.num}>21</span></p>
                    <p className={styles.no__code}>Для указания, что число представляет двоичную систему, перед числом ставится префикс 0b:</p>
                    <p>number_0b = 0b11</p>
                    <p className={styles.no__code}>Для указания, что число представляет восьмеричную систему, перед числом ставится префикс 0o:</p>
                    <p>number_0o = 0o7</p>
                    <p className={styles.no__code}>Для указания, что число представляет шестнадцатеричную систему, перед числом ставится префикс 0x:</p>
                    <p>number_0x = 0xA1</p>
                </code>
                <h4>Строки</h4>
                <p>Тип данных, значениями которого является произвольная последовательность (строка) символов алфавита. Каждая переменная такого типа (строковая переменная) может быть представлена фиксированным количеством байтов либо иметь произвольную длину.</p>
                <code>
                    <p className={styles.no__code}>Тип данных str</p>
                    <p>firstname = <span className={styles.string}>"Niko"</span></p>
                    <p>secondname = <span className={styles.string}>"Belic"</span></p>
                    <p>text = <span className={styles.string}>("Laudate omnes gentes laudate "<br />"Magnificat in secula ")</span></p>
                    <p className={styles.no__code}> Определение многострочного текста, такой текст заключается в тройные двойные или одинарные кавычки</p>
                </code>
                <h4>Дробные числа</h4>
                <p className={styles.one}>Тип float представляет число с плавающей точкой, например, 1.2 или 34.76. В качесте разделителя целой и дробной частей используется <span>Tочка.</span></p>
                <code>
                    <p>height = <span className={styles.num}>1.68</span></p>
                    <p>pi = <span className={styles.num}>3.14</span></p>
                    <p>weight = <span className={styles.num}>68.</span></p>
                    <p className={styles.no__code}>Height: 1.68</p>
                    <p className={styles.no__code}>Pi: 3.14</p>
                    <p className={styles.no__code}>Weight: 68.0</p>
                </code>
            </div>
        </>
    );
};
