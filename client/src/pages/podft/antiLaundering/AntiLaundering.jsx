import React, { useState } from 'react';
import cl from './AntiLaundering.module.css';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import schemeImg from '../../../assets/images/scheme.svg';
import arrowImg from '../../../assets/images/arrow.svg';

function AntiLaundering() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };

    return (
        <div className={cl.antiLaunderingWrapper}>
            <Header />
            <div className={cl.container}>
                <h1 className={cl.headline}>Антиотмывочная система РК</h1>
                <img src={schemeImg} alt="schemeImg" className={cl.scheme} />
                <p className={cl.text}>
                    На сегодня в Республике Казахстан сформировалась устойчивая система ПОД/ФТ. Она включает совокупность государственных, правоохранительных и специальных органов, которые реализуют государственную политику в сфере ПОД/ФТ, во взаимодействии и взаимосвязи с субъектами финансового мониторинга. </p>
                <p className={cl.text}>
                    Становление системы ПОД/ФТ Республики Казахстан можно разделить на три этапа    
                </p>
                <div className={cl.stagesContent}>
                    <img src={arrowImg} alt="arrowImg" className={cl.arrowImg} />
                    <div className={cl.stagesArrow}>
                        <div 
                            onClick={() => handleTabClick(1)} 
                            className={`${cl.stage} ${activeTab === 1 ? `${cl.active}` : ''}`}
                        >
                            <p className={cl.stageText}>Первый этап
                                (2000-2008
                                годы)
                            </p>
                            <div className={cl.circle}></div>
                        </div>
                        <div
                            onClick={() => handleTabClick(2)} 
                            className={`${cl.stageSecond} ${activeTab === 2 ? `${cl.active}` : ''}`}
                        >
                            <div className={cl.circle}></div>
                            <p className={cl.stageText}>Второй этап
                                (2008-2020
                                годы)
                            </p>
                        </div>
                        <div 
                            onClick={() => handleTabClick(3)} 
                            className={`${cl.stageThird} ${activeTab === 3 ? `${cl.active}` : ''}`}
                        >
                            <p className={cl.stageText}>Третий этап (с 2021 года по н.вр.)
                            </p>
                            <div className={cl.circle}></div>
                        </div>
                    </div>
                    <div className={cl.arrowTabs}>
                        {activeTab === 1 && 
                             <p className={cl.arrowTabsText}>
                                <span className={cl.title}>Первый этап (2000-2008 годы).</span>
                                <br></br>
                                Резолюцией Совета Безопасности Организации Объединенных Наций от 29 июля 2005 года всем странам - членам Организации Объединенных Наций (далее - ООН) предписано выполнение рекомендаций Группы разработки финансовых мер борьбы с отмыванием денег (далее - ФАТФ). В реализацию этих рекомендаций криминализирован отдельный вид состава уголовного правонарушения - легализация (отмывание) денег и иного имущества, приобретенного незаконным путем.

                                Ратифицированы международные конвенции: о борьбе с финансированием терроризма от 2 октября 2002 года, ООН против коррупции от 4 мая 2008 года и ООН против транснациональной организованной преступности от 4 июня 2008 года.

                                В 2004 году Казахстан в целях обеспечения экономической безопасности и недопущения угроз финансовой стабильности стал одним из учредителей региональной группы ФАТФ - Евразийской группы по противодействию легализации преступных доходов и финансированию терроризма (далее - ЕАГ). Ее основными направлениями деятельности являются обеспечение эффективного взаимодействия и сотрудничества на региональном уровне, а также интеграция на уровне государств - членов ЕАГ в международную систему ПОД/ФТ.
                            </p>
                            
                        }
                        {activeTab === 2 && 
                             <p className={cl.arrowTabsText}>
                                <span className={cl.title}>Второй этап (2008-2020 годы).</span>
                                <br></br>
                                В 2008 году в реализацию положений международных актов, обязывающих страны учредить подразделение, которое будет служить национальным центром для сбора, анализа и распространения информации в сфере ПОД/ФТ, создано подразделение финансовой разведки в виде Комитета по финансовому мониторингу в составе Министерства финансов Республики Казахстан (такие органы созданы в 163 странах мира).
                                <br></br><br></br>
                                В 2009 году принят Закон "О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма" (далее - Закон о ПОД/ФТ), который заложил правовую основу формирования государственной политики в сфере ПОД/ФТ. Им определены основы взаимодействия и круг полномочий государственных и правоохранительных органов, а также субъектов финансового мониторинга и введены базовые понятия.
                                <br></br><br></br>
                                Одновременно с этим создана уникальная информационная система сбора и обработки данных субъектов финансового мониторинга, отвечающая международным стандартам качества и безопасности. Заключены соглашения о взаимодействии и сотрудничестве как между государственными органами, так и со странами ближнего и дальнего зарубежья.
                                <br></br><br></br>
                                В 2011 году Казахстан стал полноправным членом группы подразделений финансовой разведки "Эгмонт", которая повысила эффективность взаимодействия с финансовыми разведками иностранных государств. Начат активный информационный обмен с более 100 подразделениями финансовых разведок мира. При координации Комитета по финансовому мониторингу Министерства финансов Республики Казахстан система ПОД/ФТ успешно прошла первую взаимную оценку ЕАГ.
                                <br></br><br></br>
                                Реализация основополагающих норм резолюций Совета Безопасности ООН и стандартов ФАТФ в части деятельности подразделения финансовой разведки, полномочий и обязанностей правоохранительных органов, международного сотрудничества и оказания взаимной правовой помощи и экстрадиции, а также вопросов обеспечения мер конфискации позволила Казахстану получить рейтинги "значительно соответствует" и "частично соответствует" по 24 из 40 рекомендаций ФАТФ.
                                <br></br><br></br>
                                По итогам взаимной оценки к Казахстану применена процедура "стандартный мониторинг" - механизм мониторинга, применяемый для всех государств-членов ЕАГ, не имеющих существенных недостатков в техническом соответствии рекомендациям ФАТФ и системы ПОД/ФТ. Выработанные экспертами ЕАГ рекомендации по итогам взаимной оценки легли в основу мер по совершенствованию национальной системы ПОД/ФТ.
                                <br></br><br></br>
                                В целях выработки мер по реализации государственной политики в сфере ПОД/ФТ, повышения их эффективности, а также координации мер, направленных на снижение рисков легализации (отмывания) доходов и финансирования терроризма, создан Межведомственный совет по вопросам предупреждения легализации (отмывания) доходов, полученных преступным путем, и финансирования терроризма.
                                <br></br><br></br>
                                В национальное законодательство о ПОД/ФТ внесены концептуальные поправки:
                                <br></br>· определен государственный орган-регулятор для четырех видов субъектов финансового мониторинга (риелторы, юристы, лизинга, бухгалтерские организации и профессиональные бухгалтеры);
                                <br></br>· усилена ответственность всех субъектов финансового мониторинга за несоблюдение требований Закона о ПОД/ФТ;
                                <br></br>· определен государственный орган, ответственный за учет и использование конфискованного имущества и образование фонда такого имущества;
                                <br></br>· усилено международное сотрудничество в части обмена информацией в сфере ПОД/ФТ между органами финансового контроля и правоохранительными органами с иностранными компетентными органами;
                                <br></br>· операции публичных должностных лиц стали подлежать финансовому мониторингу.
                                <br></br><br></br>
                                В 2014 году Казахстан вступил в Совет руководителей подразделений финансовой разведки государств-участников Содружества Независимых Государств (далее - СНГ).
                                <br></br><br></br>
                                Также особенностью данного этапа является проведение в 2018 году первой
                                национальной оценки рисков отмывания доходов и финансирования терроризма (далее - ОД/ФТ), по итогам которой определены и минимизированы ключевые риски ОД/ФТ и уязвимости национальной системы ПОД/ФТ.
                            </p>
                            
                        }
                        {activeTab === 3 && 
                             <p className={cl.arrowTabsText}>
                                <span className={cl.title}>Третий этап (с 2021 года по настоящее время).</span>
                                <br></br>
                                Повышен статус подразделения финансовой разведки путем создания независимого и подотчетного Президенту Республики Казахстан органа - Агентства Республики Казахстан по финансовому мониторингу (далее - Агентство). Характерной особенностью данного органа является объединение в нем функций по финансовому мониторингу, а также раскрытию и расследованию экономических правонарушений. Такая синергия еще больше повысила эффективность проводимой аналитической работы, позволила сместить акцент работы как в превентивном плане, так и в плане борьбы с последствиями.
                                <br></br><br></br>
                                На сегодня подразделение финансовой разведки занимает уникальное положение в системе ПОД/ФТ, находясь на стыке деятельности финансовых институтов, а также правоохранительных и уполномоченных органов. На первом уровне субъекты финансового мониторинга среди общей массы финансовых операций, осуществляемых ими в интересах своих клиентов, выявляют подозрительные операции и сделки, подпадающие под установленные Законом о ПОД/ФТ критерии, формируют о них специальные сообщения и направляют в подразделение финансовой разведки. За каждым субъектом финансового мониторинга закреплен государственный орган-регулятор, который осуществляет контроль за его деятельностью.
                                <br></br><br></br>
                                На втором уровне подразделение финансовой разведки производит обработку и детальный анализ получаемых сведений о подозрительных финансовых операциях, запрашивается дополнительная информация, в том числе у самих субъектов финансового мониторинга и различных государственных органов. Результатом такого анализа является заключение о наличии или отсутствии в представленных субъектами финансового мониторинга сведениях признаков отмывания преступных доходов или финансирования терроризма, которое для организации проверочных мероприятий направляется в правоохранительные органы. На третьем уровне правоохранительными органами проводятся проверочные мероприятия, по результатам которых принимается решение о начале досудебного расследования.
                                <br></br><br></br>
                                В 2021 году проведена вторая национальная оценка рисков ОД/ФТ, по итогам которой выявлены основные риски, угрозы и уязвимости. Анализ уголовно-правовой статистики показал, что в Республике Казахстан преступлениями с высоким риском ОД/ФТ являются: налоговые преступления, нелегальная экономическая деятельность, коррупция, хищение бюджетных средств, мошенничество и незаконный оборот наркотических средств. Высокий риск ОД/ФТ присвоен банковскому сектору, сектору микрофинансовых организаций, а также игорному бизнесу. По итогам национальной оценки рисков всеми участниками системы ПОД/ФТ реализуются меры, направленные на снижение выявленных рисков и уязвимостей.
                                <br></br><br></br>
                                В целом, динамика состояния развития системы ПОД/ФТ в Республике Казахстан в период с 2019 по 2021 год демонстрирует положительные результаты. Количество субъектов финансового мониторинга, охваченных системой ПОД/ФТ, выросло с 6 тыс. до 9 тыс., в том числе 2 тыс. субъектов - из финансового сектора, 7 тыс. субъектов - из нефинансового сектора. Таким образом, уровень сотрудничества субъектов финансового мониторинга с Агентством вырос на 50%.
                                <br></br><br></br>
                                За указанный период от субъектов финансового мониторинга поступило более 5 млн сообщений о подозрительных и пороговых операциях. При этом 99% сообщений направлены финансовым сектором. В правоохранительные и специальные государственные органы направлено 2132 аналитических материала. В результате принятия комплексных мер по совершенствованию аналитической работы с 43,6% до 64% повысилась эффективность использования правоохранительными органами материалов подразделения финансовой разведки.
                                <br></br><br></br>
                                Упрощена процедура взаимодействия между подразделением финансовой разведки, правоохранительными и специальными государственными органами по направляемым запросам. Начата работа по внедрению параллельных финансовых расследований. В этой связи наблюдается увеличение с 42 в 2019 году до 56 в 2021 году фактов регистрации правонарушений по отмыванию доходов, полученных преступным путем (на 33%).
                                <br></br><br></br>
                                О регулярном совершенствовании системы ПОД/ФТ свидетельствует тенденция улучшения показателей Казахстана в международном индексе Базельского института управления по противодействию отмыванию доходов: с 6,27 баллов в 2019 году до 4,87 баллов в 2021 году.
                            </p>
                            
                        }
                        
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AntiLaundering;