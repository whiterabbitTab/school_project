import styles from '../Sections.module.scss'


export const Operator = () => {
    return(
        <>
            <h1 className={styles.header}>
                Операторы
            </h1>
            <div className={styles.main__info}>
                <p>Операторы Python бывают 7 типов:</p>
                <ul>
                    <li>Арифметические операторы</li>
                    <li>Операторы сравнения</li>
                    <li>Операторы присваивания</li>
                    <li>Логические операторы</li>
                    <li>Операторы принадлежности</li>
                    <li>Операторы тождественности</li>
                    <li>Битовые операторы</li>
                </ul>
                <p>Мы разберем первые шесть типов</p>
                <h2>Арифметические операторы</h2>
                <p>Этот тип включает операторы для проведения базовых арифметических операций.</p>
                    <h4>Оператор сложения, складывает переменные между собой</h4>
                    <code>
                        <p>print(3 + 4)</p>
                        <p className={styles.no__code}>Вывод: 7</p>
                    </code>
                    <h4>Оператор вычитания, находит разность переменных</h4>
                    <code>
                        <p>print(13 - 7)</p>
                        <p className={styles.no__code}>Вывод: 6</p>
                    </code>
                    <h4>Оператор умножения</h4>
                    <code>
                        <p>print(2 * 5)</p>
                        <p className={styles.no__code}>Вывод: 10</p>
                    </code>
                    <h4>Оператор деления</h4>
                    <code>
                        <p>print(20 / 4)</p>
                        <p className={styles.no__code}>Вывод: 5</p>
                    </code>
                    <h4>Оператор возведения в степень</h4>
                    <code>
                        <p>print(4 ** 2)</p>
                        <p className={styles.no__code}>Вывод: 16</p>
                    </code>
                    <h4>Оператор деления без остатка</h4>
                    <code>
                        <p>print(9 // 2)</p>
                        <p className={styles.no__code}>Вывод: 4</p>
                    </code>
                    <h4>Оператор деления по модулю</h4>
                    <code>
                        <p>print(4 % 3)</p>
                        <p className={styles.no__code}>Вывод: 1</p>
                    </code>
                <h2>Операторы сравнения</h2>
                <p>Операторы сравнения в Python проводят сравнение операндов. Они сообщают, является ли один из них больше второго, меньше, равным или и то и то.</p>
                    <h4>Больше</h4>
                    <code>
                        <p>print(3 {'>'} 4)</p>
                        <p className={styles.no__code}>Вывод: False</p>
                    </code>
                    <h4>Меньше</h4>
                    <code>
                        <p>print(3 {'<'} 4)</p>
                        <p className={styles.no__code}>Вывод: True</p>
                    </code>
                    <h4>Больше или равно</h4>
                    <code>
                        <p>print(3 {'>='} 4)</p>
                        <p className={styles.no__code}>Вывод: False</p>
                    </code>
                    <h4>Меньше или равно</h4>
                    <code>
                        <p>print(3 {'<='} 4)</p>
                        <p className={styles.no__code}>Вывод: True</p>
                    </code>
                    <h4>Равно</h4>
                    <code>
                        <p>print(3 == 4)</p>
                        <p className={styles.no__code}>Вывод: False</p>
                    </code>
                    <h4>Не Равно</h4>
                    <code>
                        <p>print(3 != 4)</p>
                        <p className={styles.no__code}>Вывод: True</p>
                    </code>
                <h2>Операторы присваивания</h2>
                <p>Оператор присваивания присваивает значение переменной. Он может манипулировать значением до присваивания. Есть 8 операторов присваивания: 1 простой и 7 с использованием арифметических операторов.</p>
                    <h4>Присваивание</h4>
                        <code>
                            <p>a = 7</p>
                            <p>print(a)</p>
                            <p className={styles.no__code}>Вывод: 7</p>
                        </code>
                    <h4>Присваивание и сложение</h4>
                        <code>
                            <p>a = 7</p>
                            <p>a += 7</p>
                            <p>print(a)</p>
                            <p className={styles.no__code}>Вывод: 14</p>
                        </code>
                    <h4>Присваивание и вычитание</h4>
                        <code>
                            <p>a = 8</p>
                            <p>a -= 7</p>
                            <p>print(a)</p>
                            <p className={styles.no__code}>Вывод: 1</p>
                        </code>
                    <p>Aналогично с делением, умножением, делением по модулю, делением без остатка, возведением в степень </p>
                <h2>Логические операторы</h2>
                <p>Это союзы, которые позволяют объединять по несколько условий. В Python есть всего три оператора: and (и), or (или) и not (не).</p>
                    <h4>И</h4>
                        <code>
                            <p>print(7 {'>'} 7 and 6 == 7)</p>
                            <p className={styles.no__code}>Вывод: False ( True должен быть у обоих выражений ) </p>
                        </code>
                    <h4>Или</h4>
                        <code>
                            <p>print(7 {'>'} 7 or 6 == 7)</p>
                            <p className={styles.no__code}>Вывод: True ( True может быть у одного или более выражений )</p>
                        </code>
                    <h4>Не</h4>
                        <code>
                            <p>print(not(7 {'>'} 7))</p>
                            <p className={styles.no__code}>Вывод: False ( True меняется на False )</p>
                        </code>
                <h2>Операторы принадлежности</h2>
                <p>Эти операторы проверяют, является ли значение частью последовательности. Последовательность может быть списком, строкой или кортежем</p>
                    <h4>in</h4>
                        <code>
                            <p>print(7 in [5, 8, 7])</p>
                            <p className={styles.no__code}>Вывод: True  </p>
                        </code>
                    <h4>not in</h4>
                        <code>
                            <p>print(7 not in [5, 4, 7])</p>
                            <p className={styles.no__code}>Вывод: False </p>
                        </code>
                <h2>Операторы тождественности</h2>
                <p>Эти операторы проверяют, являются ли операнды одинаковыми (занимают ли они одну и ту же позицию в памяти).</p>
                    <h4>is</h4>
                        <code>
                            <p>print('2' is "2")</p>
                            <p className={styles.no__code}>Вывод: True  ( так как это строки )</p>
                        </code>
                    <h4>is not</h4>
                        <code>
                            <p>print(2 is not '2')</p>
                            <p className={styles.no__code}>Вывод: True </p>
                        </code>
            </div>
        </>
    )
}
