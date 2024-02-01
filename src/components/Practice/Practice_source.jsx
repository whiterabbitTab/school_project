import styles from './Sections/Sections_pr.module.scss'
import { result, setResult } from './Practice'
import { useContext } from 'react'

// type TypeSource = {
//     [index: string]: {
//         code: string,
//         answers: string[]
//     }
// }

const rgh = styles.right_ans
const wrg = styles.wrong_ans


const practice_source = {
    "1": {
        question: 'Что выведет код?',
        code: <code>
                <p>a = <span className={styles.num}>1</span> + <span className={styles.num}>3</span></p>
                <p>b = <span className={styles.num}>4</span></p>
                <p><span className={styles.print}>print</span>(<span className={styles.string}>"Ответ"</span>, a + b)</p>
            </code>,
        answers: [
            'Ответ: 8',
            'Ответ: 7',
            'Ничего, в коде ошибка'
        ],
        right_ans: [
            ['true',rgh], ['false', wrg], ['false', wrg]
        ]
    },
    "2": {
        question: 'Что выведет код?',
        code: <code>
                <p>mother = <span className={styles.string}>"Лина"</span></p>
                <p>father = <span className={styles.string}>"Кайл"</span></p>
                <p><span className={styles.print}>print</span>(<span className={styles.string}>f"Моего папу зовут {"{mother}"}, а мою маму - {"{father}"}"</span>)</p>
            </code>,
        answers: [
            'Моего папу зовут Кайл, а мою маму - Лина',
            'Моего папу зовут Лина, а мою маму - Кайл',
            'f"Моего папу зовут Кайл, а мою маму - Лина"'
        ],
        right_ans: [
            ['false', wrg], ['true', rgh], ['false', wrg]
        ]
    },
    "3": {
        question: 'Приведите соответствие типов переменных',
        code: <code>
                    <p>userName = <span className={styles.string}>"Username"</span></p>
                    <p>user_name = <span className={styles.string}>"Username"</span></p>
                </code>,
        answers: [
            'camel case, underscore notation',
            'underscore notation, camel case',
            'underscore notation, underscore notation',
        ],
        right_ans: [
            ['true', rgh], ['false', wrg], ['false', wrg]
        ]
    },
    "4": {
        question: 'Какие здесь типы переменных?',
        code: <code>
                    <p>a = <span className={styles.num}>27</span></p>
                    <p>b = <span className={styles.bool}>"True"</span></p>
                    <p>c = <span className={styles.string}>"Nigga"</span></p>
                    <p>d = <span className={styles.bool}>False</span></p>
                    <p>e = <span className={styles.number}>27.24</span></p>
                </code>,
        answers: [
            'int, bool, string, bool, int',
            'int, string, string, bool, float',
            'float, string, string, bool, float'
        ],
        right_ans: [
            ['false', wrg], ['true', rgh], ['false', wrg]
        ]
    },
    "5": {
        question: 'Выберите правильную последовательность преобразования переменной в другие типы',
        code: <code>
                <p>a = <span className={styles.func}>int</span>(<span className={styles.func}>str</span>(<span className={styles.func}>float</span>(<span className={styles.func}>int</span>(23))))</p>
            </code>,
        answers: [
            'int, str, str, int',
            'int, str, float, float',
            'int, str, float, int'
        ],
        right_ans: [
            ['false', wrg], ['false', wrg], ['true', rgh]
        ]
    },
    "6": {
        question: 'Какие операторы здесь используются?',
        code: <code>
                <p>a = <span className={styles.num}>12</span></p>
                <p>sum = <span className={styles.num}>2</span> + a</p>
                <p>sum += <span className={styles.num}>5</span></p>
                <p><span className={styles.print}>print</span>(a {">"} 14)</p>
            </code>,
        answers: [
            'Присваивание, присваивание, сложение, сложение и присваивание, сравнение',
            'Присваивание, присваивание, сложение, присваивание, сравнение',
            'Присваивание, присваивание, сложение и присваивание, сравнение'
        ],
        right_ans: [
            ['true', rgh], ['false', wrg], ['false', wrg]
        ]
    },
    "7": {
        question: 'Что будет выведено?',
        code: <code>
                <p>a = <span className={styles.num}>'1234'</span></p>
                <p>b = <span className={styles.num}>5</span></p>
                <p><span className={styles.print}>print</span>("3" in a or (<span className={styles.classPy}>not</span>(("12" not in a and b {">"} 4) or b == <span className={styles.bool}>True</span>)))</p>
            </code>,
        answers: [
            'False',
            'True',
            'Будет выведена ошибка'
        ],
        right_ans: [
            ['false', wrg], ['true', rgh], ['false', wrg]
        ]
    },
    "8": {
        question: 'Что будет выведено?',
        code: <code>
                <p>a = <span className={styles.num}>'1234'</span></p>
                <p><span className={styles.classPy}>if</span> <span className={styles.string}>"34"</span> in a:</p>
                <p style={{paddingLeft: "40px"}}>a.replace("34", "")</p>
                <p style={{paddingLeft: "40px"}}><span className={styles.print}>print</span>(<span className={styles.string}>"Есть такая подстрока"</span>)</p>
                <p><span className={styles.classPy}>else:</span></p>
                <p style={{paddingLeft: "40px"}}><span className={styles.print}>print</span>("Нет вхождения строки")</p>
            </code>,
        answers: [
            "Есть такая подстрока",
            'Ошибка',
            "Нет вхождения строки"
        ],
        right_ans: [
            ['true', rgh], ['false', wrg], ['false', wrg]
        ]
    },
    "9": {
        question: 'Что будет выведено?',
        code: <code>
                <p><span className={styles.classPy}>for</span> i <span className={styles.classPy}>in</span> <span className={styles.print}>range</span>(<span className={styles.num}>1</span>, <span className={styles.num}>4</span>):</p>
                <p style={{paddingLeft: "40px"}}><span className={styles.func}>if</span> i == <span className={styles.num}>3</span> in a:</p>
                <p style={{paddingLeft: "80px"}}><span className={styles.classPy}>break</span></p>
                <p style={{paddingLeft: "40px"}}><span className={styles.print}>print</span>(i)</p>
                <p><span className={styles.classPy}>else:</span></p>
                <p style={{paddingLeft: "40px"}}><span className={styles.print}>print</span>(35)</p>
            </code>,
        answers: [
            '1 2 3',
            '1 2',
            '1 2 35'
        ],
        right_ans: [
            ['false', wrg], ['true', rgh], ['false', wrg]
        ]
    },
    "10": {
        question: 'Будет ли здесь бесконечный цикл?',
        code: <code>
                <p>a = <span className={styles.num}>3</span></p>
                <p><span className={styles.classPy}>while</span> a {"<"} <span className={styles.num}>5</span>:</p>
                <p style={{paddingLeft: "40px"}}>a += a + <span className={styles.num}>1</span></p>
            </code>,
        answers: [
            'Да, будет',
            'Нет, не будет',
            'Будет ошибка'
        ],
        right_ans: [
            ['false', wrg], ['false', wrg], ['true', rgh],
        ]
    },
    "11": {
        question: 'Что будет выведено?',
        code: <code>
                <p>a = <span className={styles.string}>'1234'</span></p>
                <p><span className={styles.print}>print</span>(a * <span className={styles.num}>-1</span> + <span className={styles.string}>'1'</span>)</p>
            </code>,
        answers: [
            '43211',
            '12341',
            '1'
        ],
        right_ans: [
            ['false', wrg], ['false', wrg], ['true', rgh]
        ]
    },
    "12": {
        question: 'Что будет выведено?',
        code: <code>
                <p>a = <span className={styles.string}>'1234'</span></p>
                <p>b = <span className={styles.string}>'4321'</span></p>
                <p><span className={styles.print}>print</span>(a * 4 == b * 4 or a == b, '12344321' == a + b)</p>
            </code>,
        answers: [
            'False, True',
            'True, False',
            'False, False'
        ],
        right_ans: [
            ['true', rgh], ['false', wrg], ['false', wrg]
        ]
    },
    "13": {
        question: 'Что будет выведено?',
        code: <code>
                    <p>lst1 = [<span className={styles.num}>1</span>, <span className={styles.num}>2</span>, <span className={styles.num}>3</span>]</p>
                    <p>lst2 = [<span className={styles.num}>4</span>, <span className={styles.num}>5</span>, <span className={styles.num}>6</span>]</p>
                    <p>lst1.<span className={styles.method}>extend</span>(lst2)</p>
                    <p>new_list = lst1 + lst2</p>
                    <p><span className={styles.print}>print</span>(lst1, new_list2)</p>
                </code>,
        answers: [
            '[1,2,3,4,5,6], [1,2,3,4,5,6]',
            '[1,2,3,4,5,6], [1,2,3,4,5,6,1,2,3]',
            '[1,2,3,4,5,6], [1,2,3,1,2,3,4,5,6]'
        ],
        right_ans: [
            ['false', wrg], ['true', rgh], ['false', wrg]
        ]
    },
    "14": {
        question: 'Что будет выведено?',
        code: <code>
                <p>lst = [<span className={styles.num}>1</span>, <span className={styles.num}>2</span>, <span className={styles.num}>3</span>, <span className={styles.string}>"4"</span>, <span className={styles.num}>5</span>]</p>
                <p><span className={styles.classPy}>for </span>i <span className={styles.classPy}>in</span> lst[2:]:</p>
                <p style={{paddingLeft: "40px"}}><span className={styles.print}>print</span>(i == 4)</p>
            </code>,
        answers: [
            'False, False, False',
            'False, True, False',
            'False, False, False, True, False'
        ],
        right_ans: [
            ['true', rgh], ['false', wrg], ['false', wrg]
        ]
    },
    "15": {
        question: 'Что будет выведено?',
        code: <code>
                <p>dictionary = {"{"}</p>
                <p style={{paddingLeft: "40px"}}><span className={styles.string}>"name"</span>: "Alex"</p>
                <p style={{paddingLeft: "40px"}}>[<span className={styles.num}>1</span>, <span className={styles.num}>2</span>]: <span className={styles.string}>'123'</span> </p>
                <p>{"}"}</p>
                <p><span className={styles.print}>print</span>(dictionary.<span className={styles.method}>keys</span>())</p>
            </code>,
        answers: [
            'dict_keys(["name", [1, 2])',
            'Ничего, здесь ошибка',
            '"name", [1, 2]'
        ],
        right_ans: [
            ['false', wrg], ['true', rgh], ['false', wrg]
        ]
    },
    "16": {
        question: 'Что будет выведено?',
        code: <code>
                <p>dictionary = {"{"}</p>
                <p style={{paddingLeft: "40px"}}><span className={styles.string}>"name"</span>: <span className={styles.string}>"Alex"</span></p>
                <p style={{paddingLeft: "40px"}}>[<span className={styles.num}>1</span>, <span className={styles.num}>2</span>]: <span className={styles.string}>'123'</span> </p>
                <p>{"}"}</p>
                <p>username = dictionary.<span className={styles.method}>pop</span>("name")</p>
                <p><span className={styles.print}>print</span>(username)</p>
            </code>,
        answers: [
            'Alex',
            'name',
            '{(1, 2): "123"}'
        ],
        right_ans: [
            ['true', rgh], ['false', wrg], ['false', wrg]
        ]
    },
    "17": {
        question: 'Что будет выведено?',
        code: <code>
                <p><span className={styles.func}>def</span> <span className={styles.def}>Func</span>(par):</p>
                <p style={{paddingLeft: "40px"}}>sum = <span className={styles.orange}>par</span> ** <span className={styles.orange}>par</span></p>
                <p style={{paddingLeft: "40px"}}><span className={styles.print}>print</span>(<span className={styles.string}>"sum"</span>)</p>
                <p><span className={styles.print}>print</span>(<span className={styles.oper}>Func</span>(<span className={styles.num}>2</span>))</p>
            </code>,
        answers: [
            '4, None',
            'sum, None',
            '4'
        ],
        right_ans: [
            ['false', wrg], ['true', rgh], ['false', wrg]
        ]
    },
    "18": {
        question: 'Что будет выведено?',
        code: <code>
                <p><span className={styles.func}>def</span> <span className={styles.def}>Func</span>(<span className={styles.orange}>par</span> = <span className={styles.string}>"1"</span>):</p>
                <p style={{paddingLeft: "40px"}}>sum = <span className={styles.orange}>par</span> + <span className={styles.num}>2</span></p>
                <p style={{paddingLeft: "40px"}}><span className={styles.func}>return</span> sum</p>
                <p><span className={styles.print}>print</span>(<span className={styles.oper}>Func</span>())</p>
            </code>,
        answers: [
            'Ошибка',
            '11',
            '2'
        ],
        right_ans: [
            ['false', wrg], ['true', rgh], ['false', wrg]
        ]
    },
}

export default practice_source