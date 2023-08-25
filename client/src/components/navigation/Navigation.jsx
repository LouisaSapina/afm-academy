import React from 'react';
import cl from './Navigation.module.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav>
                <ul className={cl.navbar}>
                    <li className={cl.dropdown}>
                        <span className={cl.dropdownToggle}>О нас</span>
                        <ul className={cl.dropdownMenu}>
                            <li className={cl.dropdownMenu__li}>
                                <Link to="/about" className={cl.links}>Об Академии </Link>
                            </li>
                            <li>
                                <Link to="/management" className={cl.links}>Совет директоров</Link>
                            </li>
                            <li>
                                <Link to="/structure" className={cl.links}>Структура</Link>
                            </li>
                            <li>
                                <Link to="/charter" className={cl.links}>Устав</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cl.dropdown}>
                        <span className={cl.dropdownToggle}>ПОД/ФТ</span>
                        <ul className={cl.dropdownMenu}>
                            <li>
                                <Link to="/anti-laundering" className={cl.links}>Антиотмывочная система РК </Link>
                            </li>
                            <li>
                                <Link to="/fatf" className={cl.links}>ФАТФ</Link>
                            </li>
                            <li>
                                <Link to="/eag" className={cl.links}>ЕАГ</Link>
                            </li>
                            <li>
                                <Link to="/mutual-evaluation" className={cl.links}>Взаимная оценка </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cl.dropdown}>
                        <span className={cl.dropdownToggle}>СФМ</span>
                        <ul className={cl.dropdownMenu}>
                            <li>
                                <Link to="/subjects" className={cl.links}>Виды субъектов финансового мониторинга</Link>
                            </li>
                            <li>
                                <Link to="/rules" className={cl.links}>Правила внутреннего контроля</Link>
                            </li>
                            <li>
                                <Link to="/operations" className={cl.links}>Операции, подлежащие финансовому мониторингу</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cl.dropdown}>
                        <span className={cl.dropdownToggle}>Эксперты</span>
                        <ul className={cl.dropdownMenu}>
                            <li>
                                <Link to="/services/service1" className={cl.links}>Пул экспертов Академии</Link>
                            </li>
                            <li>
                                <Link to="/services/service2" className={cl.links}>Заявка на позицию эксперта в Академии</Link>
                            </li>
                            <li>
                                <Link to="/services/service2" className={cl.links}>Вакансии</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cl.dropdown}>
                        <Link to={'/courses'} className={cl.links}><span className={cl.dropdownToggle}>Курсы</span></Link>
                        <ul className={cl.dropdownMenu}>
                            <li>
                                <Link to="/courses/basic" className={cl.links}>Базовый</Link>
                            </li>
                            <li>
                                <Link to="/courses/specialized" className={cl.links}>Профильный</Link>
                            </li>
                            <li>
                                <Link to="/courses/professional" className={cl.links}>Углубленный</Link>
                            </li>
                            <li>
                                <Link to="/courses/advanced" className={cl.links}>Повышение квалификации</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cl.dropdown}>
                        <span className={cl.dropdownToggle}>Библиотека</span>
                        <ul className={cl.dropdownMenu}>
                            <li>
                                <Link to="/services/service1" className={cl.links}>НПА</Link>
                            </li>
                            <li>
                                <Link to="/services/service2" className={cl.links}>Документы международных организаций</Link>
                            </li>
                            <li>
                                <Link to="/services/service2" className={cl.links}>Иное </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={cl.dropdown}>
                        <Link to={'/vebinars'} className={cl.links}><span className={cl.dropdownToggle}>Вебинары</span></Link>
                        <ul className={cl.dropdownMenu}>
                            <li>
                                <Link to="/vebinars/calendar" className={cl.links}>Календарь мероприятий</Link>
                            </li>
                            <li>
                                <Link to="/vebinars/surveys" className={cl.links}>Опросы</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;