import React from 'react';
import cl from './MutualEvaluation.module.css';
import DefaultHeader from '../../../components/defaultHeader/DefaultHeader';
import Footer from '../../../components/footer/Footer';
import mutualEvaluationImg from '../../../assets/images/marks.svg';
import Header from '../../../components/header/Header';


function MutualEvaluation() {
    return (
        <div className={cl.mutualEvaluationWrapper}>
            <Header dark={true} />
            <div className={cl.container}>
                <h1 className={cl.headline}>Взаимная оценка</h1>
                <div className={cl.mutualEvaluationContent}>
                <img src={mutualEvaluationImg} alt="mutualEvaluationImg" style={{ height: '190px' }} />
                    <p className={cl.mutualEvaluationText}>
                        Региональные группы по типу ФАТФ (РГТФ) проводят взаимные оценки, в рамках которых национальные системы ПОД/ФТ государств-участников проверяются на соответствие международным стандартам.
                        Под взаимностью подразумевается, что представители всех государств-членов РГТФ оценивают другие государства-члены по очереди в соответствии с графиком оценок. Подобные оценки также проводят Международный валютный фонд, Всемирный банк и непосредственно Группа разработки финансовых мер борьбы с отмыванием денег.
                    </p>
                   
                </div>
                <div className={cl.mutualEvaluationBlock}>
                    <p className={cl.text}>
                    Система взаимных оценок основывается на специальной Методологии ФАТФ, которая была принята в 2004 г. и затем изменена и дополнена в 2009 г. Методология воспроизводит основные принципы, заложенные в 40 Рекомендациях ФАТФ, а также учитывает обобщенный международный опыт в сфере ПОД/ФТ.
                    <br></br>
                    <br></br>
                    В 2010-2011 годах Республика Казахстан проходила процедуру оценки соответствия национальной системы ПОД/ФТ на соответствие международным стандартам ФАТФ в рамках первого раунда взаимных оценок ЕАГ. По результатам данной процедуры страна была включена в список государств, находящихся под усиленным мониторингом ЕАГ.
                    <br></br>
                    <br></br>
                    В июне 2023 г. Казахстан успешно завершил процедуру взаимной оценки в рамках второго раунда взаимных оценок ЕАГ. По итогам данной процедуры Республика Казахстан была поставлена на стандартный мониторинг. Это самый лучший результат среди стран Евразийского региона. В целом, такую оценку получили всего 15 стран глобальной сети FATF, в которую входят свыше 200 государств.
                    <br></br>
                    <br></br>
                    Результаты оценки влияют на инвестиционный климат и экономическое развитие, а также имеют мультипликативный эффект на позиции Казахстана в международных рейтингах (ООН, ОЭСР, МВФ, Всемирного банка, Transparency International, World Justice Project и др.).
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MutualEvaluation;