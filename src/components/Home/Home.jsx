import styles from './Home.module.scss'

import { Link } from 'react-router-dom'

import { Card } from './Card/Card'

export const Home = () => {
    
    const heading_list = ['Прост в Освоении', 'Известные Фреймворки', 'Полезные библиотеки']
    const text_list = ['Язык программирования, являющийся востребованным на данный момент. Data-science, DevOps, CyberSecurity и другие сферы IT ждут тебя со знаниями Python', 'Востребованные фреймворки, которые используются в веб-разработке, например: Django, Flask и т.д. Изучив идин из них, вы сможете найти свое место в веб-разработке', 'Библиотеки, которые понадобятся во многих IT сферах. К каждой библиотеке есть подробная документация. Главное - простота, надежность и мощность']

    return(
        <main>
            <section className={styles.greeting}>
                <h1 className={styles.text__3d}>PYTHON</h1>
                <div className={styles.info}>
                    <div className={styles.python__button}>
                        <Link className={styles.btn__get_started} to='https://www.python.org/downloads/'>Скачать Python</Link>
                    </div>
                    <div className={styles.text__second}>
                        <h5>Где применяется Python</h5>
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
