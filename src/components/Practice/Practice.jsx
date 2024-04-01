import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Routes, Route } from 'react-router-dom'
import styles from './Practice.module.scss'
import practice_source from './Practice_source'

import { Start_pr } from './Sections/Start/Start_pr'
import { Variable_pr } from './Sections/Variable/Variable_pr'
import { Operator_pr } from './Sections/Operator/Operator_pr'
import { Conditions_pr } from './Sections/Conditions/Conditions_pr'
import { Strings_pr } from './Sections/Strings/Strings_pr'
import { List_pr } from './Sections/ListTuple/LIst_pr'
import { Dict_pr } from './Sections/Dictionaries/Dict_pr'
import { Functions_pr } from './Sections/Functions/Functions_pr'

const Context = React.createContext()

export { Context }

export const Practice = ({ local_result }) => {

    const headers_docs = ['Первые шаги', 'Переменные', 'Операторы', 'Условия и циклы', 'Строки', 'Списки, кортежи', 'Словари', 'Функции']
    const paths = ['Start', 'Variable', 'Operator', 'Conditions', 'Strings', 'List', 'Dictionaries', 'Functions']

    const aside_ref = useRef();
    const [width, setWidth] = useState(window.innerWidth)

    const showText = (event) => {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {aside_ref.current.querySelectorAll(`.${styles.navlink}`)[i].innerHTML = ''}, 350)
            setTimeout(() => {aside_ref.current.querySelectorAll(`.${styles.navlink}`)[i].innerHTML = headers_docs[i]}, 350)
        }
    }

    const hideText = (event) => {
        if (width < 1250) {
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {aside_ref.current.querySelectorAll(`.${styles.navlink}`)[i].innerHTML = ''}, 350)
                setTimeout(() => {aside_ref.current.querySelectorAll(`.${styles.navlink}`)[i].innerHTML = '&#8212;'}, 350)
            }
        } else {
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {aside_ref.current.querySelectorAll(`.${styles.navlink}`)[i].innerHTML = ''}, 350)
                setTimeout(() => {aside_ref.current.querySelectorAll(`.${styles.navlink}`)[i].innerHTML = headers_docs[i]}, 350)
            }
        }
    }


    useEffect(() => {
        if (width < 1250) {
            for (let i = 0; i < 8; i++) {
                aside_ref.current.querySelectorAll(`.${styles.navlink}`)[i].innerHTML = '&#8212;'
            }
        } else {
            for (let i = 0; i < 8; i++) {
                aside_ref.current.querySelectorAll(`.${styles.navlink}`)[i].innerHTML = headers_docs[i]
            }
        }
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    }, [width])


    return(
        <main className={styles.main__practice} style={{paddingBottom: 150 + 'px'}}>
            <aside ref={aside_ref}>
                <h1>Разделы</h1>
                {headers_docs.map((d, i) => {
                    return (
                        <NavLink onMouseEnter={showText} onMouseLeave={hideText} key={i} className={styles.navlink} to={paths[i]}>{headers_docs[i]}</NavLink>
                    )
                })}
            </aside>
            <section className={styles.practice__block}>
                <Context.Provider value={practice_source}>
                    <Routes>
                        <Route path='/Start' element={<Start_pr local_result={local_result}></Start_pr>}></Route>
                        <Route path='/Variable' element={<Variable_pr local_result={local_result}></Variable_pr>}></Route>
                        <Route path='/Operator' element={<Operator_pr local_result={local_result}></Operator_pr>}></Route>
                        <Route path='/Conditions' element={<Conditions_pr local_result={local_result}></Conditions_pr>}></Route>
                        <Route path='/Strings' element={<Strings_pr local_result={local_result}></Strings_pr>}></Route>
                        <Route path='/List' element={<List_pr local_result={local_result}></List_pr>}></Route>
                        <Route path='/Dictionaries' element={<Dict_pr local_result={local_result}></Dict_pr>}></Route>
                        <Route path='/Functions' element={<Functions_pr local_result={local_result}></Functions_pr>}></Route>
                    </Routes>
                </Context.Provider>
            </section>
        </main>
    )
}
