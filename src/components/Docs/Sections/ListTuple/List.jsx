import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Sections.module.scss'

export const List = () => {
    return(
        <>
            <h1 className={styles.header}>Списки и Кортежи</h1>
            <div className={styles.main__info}>
                <p>Python содержит важные типы данных, которыми вы с высокой вероятностью будете использовать каждый день. Они называются <span>списки</span>, <span>кортежи</span>. Они не очень сложные, так что надеюсь, вы научитесь, как использовать их по назначению. После освоения списков и кортежей, в сочетании со строками и словарями ( разберем в будущем ), вы ощутимо продвинетесь в изучении Python.</p>
                <h2>Списки</h2>
                <p>Списки Python схожи с массивами в других языках. В Python, пустой список может быть создан следующим образом:</p>
                <code>
                    <p>my_list = []</p>
                    <p>my_list = <span className={styles.func}>list</span>()</p>
                </code>
                <p>Можно создать список при помощи квадратных скобок, или при помощи встроенного инструмента Python – list. Список состоит из таких элементов, как строки, цифры, объекты и смеси типов. Давайте взглянем на несколько примеров:</p>
                <code>
                    <p>my_list = [<span className={styles.num}>1</span>, <span className={styles.num}>2</span>, <span className={styles.num}>3</span>]</p>
                    <p>my_list2 = [<span className={styles.string}>"Epstein"</span>, <span className={styles.string}>"Car"</span>, <span className={styles.string}>"Kali"</span>]</p>
                    <p>my_list3 = [<span className={styles.bool}>False</span>, <span className={styles.string}>"Epstein"</span>, <span className={styles.num}>6</span>, [], ()]</p>
                    <p>my_list4 = [my_list, my_list2, my_list3]</p>
                </code>
                <p>Первый, второй и третий примеры показывают, какие данные могут быть в списках. В четвертом примере у нас в одном массиве два других массива. Это пример двумерного массива. Рассмотрим еще примеры</p>
                <code>
                    <p>my_list = [<span className={styles.num}>1</span>, <span className={styles.num}>2</span>, <span className={styles.num}>3</span>]</p>
                    <p>my_list.<span className={styles.method}>append</span>(4)</p>
                    <p className={styles.no__code}># 4 добавится в список</p>
                    <p>my_list.<span className={styles.method}>remove</span>(4)</p>
                    <p className={styles.no__code}># Удаления элемента по значению ( удаляется первый попавшийся )</p>
                    <p>my_list.<span className={styles.method}>pop</span>(1)</p>
                    <p className={styles.no__code}># Удаления элемента по индексу</p>
                    <p>first_element = my_list[<span className={styles.num}>0</span>]</p>
                    <p className={styles.no__code}># first_element будет равен первому элементу из списка ( индексация списков с 0, берем по индексу )</p>
                    <p>add_list = [<span className={styles.num}>4</span>, <span className={styles.num}>5</span>, <span className={styles.num}>6</span>]</p>
                    <p>my_list.<span className={styles.method}>extend</span>(add_list)</p>
                    <p>new_list = my_list + add_list</p>
                    <p className={styles.no__code}># Два варианта комбинирования двух списков ( в список полетят не списки, а значения списков )</p>
                    <p>unsorted_list = [<span className={styles.num}>3</span>, <span className={styles.num}>1</span>, <span className={styles.num}>2</span>]</p>
                    <p>unsorted_list.<span className={styles.method}>sort</span>()</p>
                    <p className={styles.no__code}># Сортировка списка - [1, 2, 3]</p>
                </code>
                <h2>Кортежи</h2>
                <p>Кортеж похож на список, но вы создаете его с круглыми скобками, вместо квадратных. Вы также можете использовать встроенный инструмент для создания кортежей. Разница в том, что кортеж неизменный, в то время как список может меняться. Давайте взглянем на несколько примеров:</p>
                <code>
                    <p>my_tuple = (<span className={styles.num}>1</span>, <span className={styles.num}>2</span>, <span className={styles.num}>3</span>, <span className={styles.num}>4</span>)</p>
                    <p>a = my_tuple[<span className={styles.num}>0</span>:<span className={styles.num}>3</span>]</p>
                    <p className={styles.no__code}># Получится (1, 2, 3)</p>
                    <p>another_tuple = <span className={styles.func}>tuple</span>()</p>
                    <p>abc = <span className={styles.func}>tuple</span>([1, 2, 3])</p>
                </code>
                <p>Данный код демонстрирует способ создания кортежа с пятью элементами. Также он говорит нам о том, что мы можете делать нарезку кортежей. Однако, вы не можете сортировать кортеж! Последние два примера показывают, как создавать кортеж при помощи ключевого слова tuple (которое и переводится как «кортеж»). Первый код просто создает пустой кортеж, в то время как во втором примере кортеж содержит три элемента. Обратите внимание на то, что в нем есть список. Это пример конвертации. Мы можем менять или конвертировать объект из одного типа данных в другой. В нашем случае, мы конвертируем список в кортеж. Если вы хотите превратить кортеж abc обратно в список, вы можете сделать это следующим образом:</p>
                <code>
                    <p>abc_list = <span className={styles.func}>list</span>(abc)</p>
                    <p className={styles.no__code}># Код конвертирует кортеж в список</p>
                </code>
            </div>
        </>
    );
};
