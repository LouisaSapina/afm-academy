import React from 'react';
import cl from './Fatf.module.css';
import fatfImg from '../../../assets/images/fatf.svg';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';


function Fatf() {
    return (
        <div className={cl.fatfWrapper}>

            <Header dark={true}/>
            <div className={cl.container}>
                <h1 className={cl.headline}>ФАТФ</h1>
                <div className={cl.fatfContent}>
                    <img src={fatfImg} alt="fatfImg" style={{ height: "220px" }} />
                    <div className={cl.fatfContentInner}>
                        <div className={cl.fatfBlock}>
                            <p className={cl.fatfBlockText}>
                                Группа разработки финансовых мер борьбы с отмыванием денег (англ. Financial Action Task Force on Money Laundering — FATF/ФАТФ) - межправительственная организация, которая занимается выработкой мировых стандартов в сфере противодействия отмыванию преступных доходов и финансированию терроризма (ПОД/ФТ), а также осуществляет оценки соответствия национальных систем ПОД/ФТ этим стандартам.
                            </p>
                        </div>
                        <div className={cl.fatfBlock}>
                            <p className={cl.fatfBlockText}>
                                Основным инструментом ФАТФ в реализации своего мандата являются 40 рекомендаций в сфере ПОД/ФТ/ФРОМУ, которые подвергаются ревизии в среднем один раз в пять лет. В соответствии с Резолюцией СБ ООН № 1617 (2005), 40 Рекомендаций ФАТФ являются обязательными международными стандартами для выполнения государствами — членами ООН.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cl.fatfText}>
                        <p className={cl.text}>
                            Организация была создана в 1989 году по решению стран «Большой семерки», на сегодняшний день в нее входит 37 стран и 2 международные организации, наблюдателями — 25 организаций и одно государство (Индонезия).
                            Основным инструментом принятия решений ФАТФ является Пленарное заседание, которое собирается три раза в год, а также рабочие группы ФАТФ:
                        </p>
                        <ul className={cl.list}>
                            <li>по оценкам и имплементации;</li>
                            <li>по рискам, трендам и методам;</li>
                            <li>по глобальному сотрудничеству;</li>
                            <li>по разработке политики;</li>
                            <li>по обзору международного сотрудничества.</li>
                        </ul>
                    </div>
                    <div className={cl.block}>
                        <p className={cl.text}>
                        ФАТФ уделяет значительное внимание сотрудничеству с такими международными организациями, как МВФ, Всемирный банк, Управление ООН по наркотикам и преступности. Данные структуры реализуют свои программы, нацеленные на противодействие отмыванию денег и финансированию терроризма. Одним из основных инструментов реализации рекомендаций ФАТФ на национальном уровне являются Подразделения финансовой разведки (ПФР), отвечающие за сбор и анализ финансовой информации в пределах каждой конкретной страны с целью выявления потоков финансовых средств, добытых незаконным путём.
                        
                        </p>
                    </div>
                    <div style={{marginBottom: '100px',}}>
                        <a href="https://www.fatf-gafi.org/en/home.html" style={{color: 'black'}}>Ссылка на сайт ФАТФ</a>
                    </div>
            </div>
            <Footer />
        </div>
    );
}

export default Fatf;