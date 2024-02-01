import { Link } from 'react-router-dom'
import $ from 'jquery'

export const Button = ({ content,  path, style }) => {

    const BtnAnim = (event) => {
        if (event.currentTarget == event.target) {
            let attr = $(event.target).attr('data-type')
            $(`div[data-type="${attr}"]`).css({
                opacity: '1',
                width: '120px'
            })
        }
    }

    const BtnAnimLeave = (event) => {
        if (event.currentTarget == event.target) {
            let attr = $(event.target).attr('data-type')
            $(`div[data-type="${attr}"]`).css({
                opacity: '0',
                width: '0px'
            })
        }
    }


    return(

        <Link data-type={content} className={style} to={path} onMouseEnter={BtnAnim} onMouseLeave={BtnAnimLeave}> 
            {content} 
            <div data-type={content}></div>
        </Link>
    )
}
