import styles from './Home.module.scss'

import { Link } from 'react-router-dom'

import { Card } from './Card/Card'

export const Home = () => {
    
    const heading_list = ['Прост в Освоении', 'Известные Фреймворки', 'Полезные библиотеки']
    const text_list = ['Бесплатный, мощный и легкий язык программирования, являющийся востребованным на данный момент. Data-science, DevOps, CyberSecurity и другие сферы IT ждут тебя со знаниями Python', 'Множество и востребованных Фреймворков, таких как: Django, Flask, Fast api, Pyramid, CherryPy. С помощью данных инструментов вы с легкостью найдете работу', 'Библиотеки, которые понадобятся во многих IT сферах. Главное - простота, надежность, мощность и известность']

    return(
        <main>
            <section className={styles.greeting}>
                <h1 className={styles.text__3d}>PYTHON</h1>
                <div className={styles.info}>
                    <div className={styles.text__first}> <span>Python</span> - Высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ</div>
                    <div className={styles.python__button}>
                        <h2>Начать путь гениального программиста</h2>
                        <Link className={styles.btn__get_started} to='https://www.python.org/downloads/'>Get Started</Link>
                    </div>
                    <div className={styles.text__second}>
                        <h5>Где применяется <span>Python</span></h5>
                        <ol>
                            <li>Веб-разработка</li>
                            <li>Data Science</li>   
                            <li>Искусcтвенный интеллект</li>
                            <li>Информационная безопасность</li>
                            <li>Системное администрирование</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className={styles.main__text}>
                <h1>Почему <span>Python?</span></h1>
                <div>
                    {heading_list.map((el, i) => {
                        return (
                            <Card key={i} text={text_list[i]} heading={heading_list[i]} />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
