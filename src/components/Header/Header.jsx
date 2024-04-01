import { useLocalStorage } from '@uidotdev/usehooks'

import styles from './Header.module.scss'

import { Button } from './Button/Button'

export const Header = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'dark')
    const btn_list = [['Home', '/', styles.NavButton], ['Docs', '/Docs/Start', styles.NavButton], ['Practice', '/Practice/Start', styles.NavButton]]

    return(
        <header>
            <div className={styles.icon}></div>
            <nav>
                {btn_list.map((btn, i) => {
                    return (
                        <Button style={btn[2]} content={btn[0]} path={btn[1]} key={i}></Button>
                    )
                })}
            </nav>
        </header>
    )
}
