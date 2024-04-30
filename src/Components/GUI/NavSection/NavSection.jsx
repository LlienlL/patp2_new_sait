'use client'

import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TRANSITION_DURATION } from "../../params";
import { Max_Media_Px } from '../../params';
import style from "./style.module.scss";
import NavMenu from './NavMenu';
import NavWrapButton from './NavWrapButton';


/** GUI Компонент. Секция с  меню навигации и кнопкой, разворачивающей это меню  
• `navButtonsList` - список кнопок  */

function NavSection({ navButtonsList }) {
    // Состояния можно изменять только через специальные функции!!!

    const [isMenuActive, setActive] = useState(false); // Состояние активности меню навигации. setActive - функция для изменения
    const nodeRef = useRef(null); // Нужно для CSSTransition

    function handlerNavLinkClick() { // Клик на кнопку навигации (деактивируем меню, если устройство "мобильное")
        if (window.innerWidth < Max_Media_Px) {
            setActive(false);
        }
    }


    useEffect(() => {
        if (window.innerWidth > Max_Media_Px) {
            setActive(true);
        }

        // Обработка ресайза окна:
        function onResize() {
            if (window.innerWidth > Max_Media_Px) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    return (
        <>
            <div className={style.section}>
                <NavWrapButton setActive={setActive} isActive={isMenuActive}>Меню</NavWrapButton>
                <CSSTransition in={isMenuActive} timeout={TRANSITION_DURATION}
                    nodeRef={nodeRef} mountOnEnter unmountOnExit
                    classNames={{
                        enter: style.enter,
                        enterActive: style.enterActive,
                        exit: style.exit,
                        exitActive: style.exitActive,
                    }}
                >
                    <NavMenu ref={nodeRef} navButtonsList={navButtonsList} linkClick={handlerNavLinkClick}/>
                </CSSTransition>
            </div>
            <div style={{ paddingTop: "50px" }}></div>
        </>

    );
}

export default NavSection;
