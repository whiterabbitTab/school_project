import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Routes, Route } from 'react-router-dom'
import styles from './Docs.module.scss'


import { Start } from './Sections/Start/Start'
import { Variable } from './Sections/Variable/Variable'
import { Operator } from './Sections/Operator/Operator'
import { Conditions } from './Sections/Condit_cycles/Condtitions'
import { Strings } from './Sections/Strings/Strings'
import { List } from './Sections/ListTuple/List'
import { Dict } from './Sections/Dictionaries/Dict'
import { Functions } from './Sections/Functions/Functions'

export const Docs = () => {

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
        <main className={styles.main__docs} style={{paddingBottom: 150 + 'px'}}>
            <aside ref={aside_ref}>
                <h1>Разделы</h1>
                {headers_docs.map((d, i) => {
                    return (
                        <NavLink onMouseEnter={showText} onMouseLeave={hideText} key={i} className={styles.navlink} to={paths[i]}>{headers_docs[i]}</NavLink>
                    )
                })}
            </aside>
            <section className={styles.docs__info}>
                <Routes>
                    <Route path='/Start' element={<Start></Start>}></Route>
                    <Route path='/Variable' element={<Variable></Variable>}></Route>
                    <Route path='/Operator' element={<Operator></Operator>}></Route>
                    <Route path='/Conditions' element={<Conditions></Conditions>}></Route>
                    <Route path='/Strings' element={<Strings></Strings>}></Route>
                    <Route path='/List' element={<List></List>}></Route>
                    <Route path='/Dictionaries' element={<Dict></Dict>}></Route>
                    <Route path='/Functions' element={<Functions></Functions>}></Route>
                </Routes>
            </section>
        </main>
    )
}
