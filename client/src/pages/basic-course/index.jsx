import React, { useState, useEffect, Children } from 'react';

import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

import lectorImage from './lectorImage.png';
import image1 from './../../assets/images/Lesson_2_img_1.png';
import image2 from './../../assets/images/Lesson_3_img_1.png';
import image3 from './../../assets/images/Capone.png';

import './style.scss'
import HeaderWithLine from '../../components/courseTemplates/common/HeaderWithLine';
import { BiSolidObjectsHorizontalRight } from 'react-icons/bi';
import Table_1 from '../../components/courseTemplates/common/Tables/Table-1';
import Report_Warning from '../../components/courseTemplates/common/Warnings/Report';
import Sizebox from '../../components/courseTemplates/common/Sizebox';
import NumberedDots from '../../components/courseTemplates/common/NumberedDots';
import ImageLine from '../../components/courseTemplates/common/ImageLine';
import DropDownTextWithTabs from '../../components/courseTemplates/complex/DropDownTextWithTabs';
import TextAndLink from '../../components/courseTemplates/complex/TextAndLink';
import ImageWithText from '../../components/courseTemplates/common/ImageWithText';
import NotNumberedDots from '../../components/courseTemplates/common/NotNumberedDots';
import TextWithTitle from './../../components/courseTemplates/common/TextWithTitle';

import { RxHamburgerMenu } from 'react-icons/rx';
import NextLesson from '../../components/courseTemplates/complex/NextLesson';
import { Session } from '../../components/sessions/Sessions';
import RandomGlossary from '../../components/courseTemplates/common/RandomGlossary';
import RandomParapraph from '../../components/courseTemplates/common/RandomParagraph';
import FileDownloader from '../../components/courseTemplates/common/FileDownloader';
import TextWithBackground from '../../components/courseTemplates/common/TextWithBackground';
import ShortBiography from '../../components/courseTemplates/complex/images/ShortBiography';

function Basic_course(props) {
    const [courseName, setCourseName] = useState('Базовый курс');
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [activeSessionId, setActiveSessionId] = useState(1);

    const navigate = useNavigate();

    const handleNavOpen = () => {
        setIsNavOpen(prev => !prev);
    }

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const handleWindowResolution = () => {
        const { width, height } = getWindowDimensions();
        if (width <= 1300) {
            setIsNavOpen(false);
        }
    }

    useEffect(() => {
        handleWindowResolution();
        window.addEventListener('resize', handleWindowResolution);
    }, [])

    const handleSessionClick = (id) => {
        setActiveSessionId(id);
    }

    const getLesson = (id) => {
        switch (id) {
            case 1: 
                return (<LessonPage name={'Основные понятия и сокращения'} lecturer={'AML Academy'}>
                    <Sizebox height={28} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Прежде чем мы углубимся в обучение и структуру данного курса, 
                        пожалуйста, <span className='bold'>изучите основные сокращения</span>, используемые в 
                        национальной системе ПОД/ФТ
                        </>
                    </HeaderWithLine>

                    <Table_1 
                        rows={[
                            {first: 'АФМ', second: 'Агентство Республики Казахстан по финансовому мониторингу'},
                            {first: 'АРРФР', second: 'Агентство Республики Казахстан по регулированию и развитию финансового рынка'},
                            {first: 'АЗРК', second: 'Агентство по защите и развитию конкуренции Республики Казахстан'},
                            {first: 'БИН', second: 'Бизнес-идентификационный номер'},
                            {first: 'ГП РК', second: 'Генеральная прокуратура Республики Казахстан'},
                            {first: 'ЗРК', second: 'Евразийская группа по противодействию легализации преступных доходов и финансированию терроризма'},
                            {first: 'ЕАГ', second: 'Бизнес-идентификационный номер'},
                            {first: 'ИИН', second: 'Индивидуальный идентификационный номер'},
                            {first: 'КВГА', second: 'Комитет внутреннего государственного аудита'},
                            {first: 'КИТ МКС РК', second: 'Комитет индустрии туризма Министерства культуры и спорта Республики Казахстан'},
                            {first: 'КоАП РК', second: 'Кодекс об административных правонарушениях Республики Казахстан'},
                        ]}
                    />

                    <Report_Warning>
                        Вам приведена лишь часть сокращений, которые обязательно потребуются для полного понимания курса
                    </Report_Warning>

                    <Sizebox height={100}/>

                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Перейдем к <span className='bold'>следующему</span> блоку обучения
                        </>
                    </HeaderWithLine>

                    <Sizebox height={100}/>

                    <NumberedDots 
                        dotsColor={'#CADEFC'}
                        header={'Основные понятия и их значения, используемые в данном курсе'} 
                        list={[
                            'общие понятия',
                            'понятия, связанные с операциями в сфере ПОД/ФТ',
                            'понятия, используемые при надлежащей проверке клиентов',
                            'понятия, связанные с субъектами финансового мониторинга',
                            'понятия, используемые при реализации риск-ориентированного подхода',
                        ]}
                    />

                    <Sizebox height={100}/>

                    <ImageLine img={null} height={130} color={'#CADEFC'}/>

                    <Sizebox height={36}/>

                    <DropDownTextWithTabs 
                        tabs={[
                            'Общие понятия',
                            'Понятия в сфере ПОД/ФТ',
                            'Проверка клиентов',
                            'СФМ',
                            'Риск-ориентированный подход',
                        ]}
                        tabsData={[
                            {header: 'Header', data: 'fajsfa', tabName: 'Общие понятия'},
                            {header: 'Header1', data: 'fajsfa', tabName: 'Общие понятия'},
                            {header: 'Heade2', data: 'fajsfa', tabName: 'Понятия в сфере ПОД/ФТ'},
                            {header: 'Heade3', data: 'fajsfa', tabName: 'Понятия в сфере ПОД/ФТ'},
                        ]}
                        headerTextColor={'#170F49'}
                        activeHeaderTextColor={'#1F3C88'}
                        textColor={'#6F6C90'}
                        tabsTextColor={'#3A3939'}
                        tabsBackgroundColor={'#BAD6FF'}
                    />

                    <Sizebox height={100}/>

                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Нажмите на <span className="bold">ссылку</span> ниже, чтобы перейти к
                        Закону «О противодействии легализации (отмыванию) доходов, 
                        полученных преступным путем, и финансированию терроризма»
                        </>
                    </HeaderWithLine>

                    <Sizebox height={83}/>

                    <TextAndLink
                        text={'Закон «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»'}
                        link={'google.com'}
                    />

                    <Sizebox height={100}/>

                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Теперь, когда вы 
                        <span className="bold">понимаете, ключевые понятия и сокращения</span>, 
                        можем перейти к изучению системы ПОД/ФТ

                        </>
                    </HeaderWithLine>

                    <Sizebox height={100}/>

                    <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>

                    <Sizebox height={50}/>

                    <NextLesson handleOnClick={() => {
                        setActiveSessionId(activeSessionId + 1);
                    }}/> 
                </LessonPage>)
            case 2: 
                return (<LessonPage name={'Система ПОД/ФТ'} lecturer={'AML Academy'}>
                    <Sizebox height={28} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Система ПОД/ФТ достаточно сложный механизм,  который имеет множество подходов, инструментов, методов и участников
                        </>
                    </HeaderWithLine>
                    <Sizebox height={50} />
                    <NumberedDots 
                        dotsColor={'#CADEFC'}
                        header={'Для полного его понимания, мы изучим следующие направления:'} 
                        list={[
                            'Общее понимание мер и их виды;',
                            'Рассмотрим примеры таких мер;',
                            'Разберем участников системы ПОД/ФТ;',
                            'Определим национальные и международные документы, которые служат основой системы ПОД/ФТ.'
                        ]}
                    />
                    <Sizebox height={100} />
                    <ImageWithText 
                        img={image1}
                        color={'#FFFFFF'}
                    >
                    <>
                        <h2 style={{color: '#FFFFFF', marginTop: 0, marginBottom: 0}}>
                            Что из себя представляет система ПОД/ФТ?
                        </h2>
                        <Sizebox height={17} />
                        <h3>
                            Это комплекс мероприятий, направленных на борьбу с ОД/ФТ, в виде превентивных и пресекающих мер.
                        </h3>
                    </>
                    </ImageWithText>
                    <Sizebox height={100} />

                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Теперь давайте <span className="bold">углубимся</span>
                        в данные превентивные и пресекающие меры, 
                        их основные <span className="bold">подходы и примеры</span>
                        </>
                    </HeaderWithLine>

                    <Sizebox height={100} />

                    <TODO text='Interactive Dropdown lists'/>

                    <Sizebox height={100} />

                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Примеры превентивных мер используемые АФМ
                        </>
                    </HeaderWithLine>

                    <Sizebox height={50} />

                    <p style={{padding: '0px 120px'}}>Теперь, когда Вы знаете, что из себя <span className='bold'>представляют</span> превентивные 
                        и пресекающие меры, давайте рассмотрим <span className='bold'>примеры</span> превентивных 
                        мер используемые <span className='bold'>АФМ</span>, которые <span className='bold'>эффективно</span> используются в 
                        рамках <span className='bold'>взаимодействия</span> с участниками национальной 
                        антиотмывочной системы</p>

                    <Sizebox height={100} />
                    
                    <TODO text='Interactive Glossary'/>

                    <Sizebox height={100} />

                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Пожалуйста, посмотрите <span className="bold">видео ниже</span>, чтобы узнать 
                        об <span className="bold">участниках антиотмывочной системы</span>, 
                        которые непосредственно <span className="bold">реализуют</span> данный комплекс мероприятий
                        </>
                    </HeaderWithLine>

                    <Sizebox height={80} />

                    <TODO text='Video block'/>

                    <Sizebox height={80} />

                    <h2>Пояснение к видео</h2>
                    <Sizebox height={22} />

                    <NumberedDots 
                        header={'Национальная антиотмывочная система состоит из основных приоритетных направлений:'}
                        list={[
                            'Первая линия защиты, которая подразумевает реализацию финансового мониторинга со стороны частного сектора (СФМ);',
                            'Реализация государственного контроля и надзора со стороны органов регуляторов;',
                            'Взаимодействие с профессиональными объединениями частного сектора;',
                            'Проведение Национальной оценки рисков осуществляемая участниками МВС;',
                            'Взаимодействие в ходе финансового мониторинга с правоохранительными и специальными государственными органами;',
                            'Международное взаимодействие с организациями и органами (в т.ч. с подразделениями финансовых разведок);',
                            'Реализация АФМ единой государственной политики, а также координация участников системы ПОД/ФТ',
                        ]}
                        dotsColor={'#CADEFC'}
                    />

                    <Sizebox height={73} />

                    <NotNumberedDots 
                        header={'Давайте более подробнее разберем участников системы ПОД/ФТ'} 
                        list={[
                            'Банки второго уровня (один из основных источников информации);',
                            'Финансовые учреждения (страховые и перестраховочные организации, участники рынка ценных бумаг, МФО и др.);',
                            'Не финансовые учреждения (нотариусы, аудиторские организации, представители игорного бизнеса и др.);',
                            'участники МВС (государственные органы, правоохранительные органы, специальные государственные органы);',
                            'Международные организации (УНП ООН, ОБСЕ, ЕАГ и др.);',
                            'Уполномоченный орган в лице Агентства Республики Казахстан по финансовому мониторингу;',
                            'Общественные организации (Ассоциация финансистов Казахстана, Профессиональные объединения бухгалтеров, Республиканская нотариальная плата и др.);',
                            'Государственные органы регуляторы (Национальный банк Республики Казахстан, Агентство по регулированию и развитию финансового рынка, Министерство юстиции Республики Казахстан и др.).',
                        ]}
                        dotsColor={'#CADEFC'}

                    />

                    <Sizebox height={100} />

                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Теперь, когда мы знаем, каким образов в <span className="bold">целом</span> реализуется 
                        система ПОД/ФТ в Республике Казахстан, 
                        давайте более подробнее изучим <span className="bold">основы</span>, 
                        послужившие ее <span className="bold">функционированию и развитию</span>
                        </>
                    </HeaderWithLine>

                    <Sizebox height={50} />

                    <RandomGlossary 
                        title={'Нормативно-правовая база'}
                        text={'Одним из главных элементов национальной системы ПОД/ФТ является наличие фундаментальной нормативно-правовой базы.'}
                    />

                    <Sizebox height={80} />

                    <TextWithTitle 
                        title={'Основы ПОД/ФТ'} 
                        text={'Правовые основы ПОД/ФТ в Республике Казахстан связаны с принятыми и введенными в действие законами, направленными на закрепление правовых основ ПОД/ФТ, включая правовое регулирование возникающих при этом взаимоотношений субъектов и уполномоченного органа финансового мониторинга, а также других государственных органов. Правовые основы национальной антиотмывочной системы включают в себя международные акты и национальные акты в сфере ПОД/ФТ.'}
                        color={'#3A3939'}
                    />

                    <Sizebox height={100} />

                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                        Более подробней, в следующей схеме Вы можете ознакомиться с актами как национального, так и международного уровня.
                        </>
                    </HeaderWithLine>
                    
                    <Sizebox height={80} />

                    <TODO text='Interactive 1 to 4'/>

                    <Sizebox height={100} />
                    
                    <RandomParapraph>
                        Ниже представлен перечень национальных актов для более подробного изучения.
                    </RandomParapraph>

                    <Sizebox height={50} />

                    <FileDownloader file={'fff'} />

                    <Sizebox height={100} />

                    <HeaderWithLine headerColor={'#3A3939'} lineColor={'#CADEFC'}>
                        <>
                        Перейдем к следующему блоку обучения
                        </>
                    </HeaderWithLine>

                    <Sizebox height={50} />
 
                    <NextLesson handleOnClick={() => {
                        setActiveSessionId(activeSessionId + 1);
                    }}/> 
                </LessonPage>)
            case 3: 
                return (<LessonPage name={'История возникновения первых «схем» отмывания денег'} lecturer={'AML Academy'}>
                    <Sizebox height={28} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            На этом занятии мы подробно изучим <span className="bold">историю</span> возникновения первых схем отмывания денег.
                        </>
                    </HeaderWithLine>



                    <Sizebox height={50} />

                    <ImageWithText 
                        img={image2}
                        color={'#FFFFFF'}
                    >
                        <>
                        <h3>
                            Отмывание денег - это вовлечение в законный оборот деньги (или) иного имущества, полученных преступным путем.
                        </h3>
                        </>
                    </ImageWithText>

                    <TextWithBackground 
                        text={[
                            'Начальным этапом отмывания денег считается 20 года прошлого века «эпоха сухового закона в США»',
                            'Одного из авторов схем отмывания денег считают Аль Капоне.'
                        ]} 
                        color={'#3A3939'}
                        backgroundColor={'#CADEFC'}
                    />

                    <Sizebox height={50} />

                    <ShortBiography 
                        img={image3}
                        name={'Аль Капоне'}
                        birthdate={'17 января 1899г.'}
                        deathdate={'25 января 1947г.'}
                        biography={'Считается одним из отцов-основателей организованной преступности США эпохи Сухого закона и Великой депрессии, автором системы отмывания денег и такого понятия, как «рэкет».'}
                    />

                    <Sizebox height={100} />

                    <ImageLine height={2} color={'#CADEFC'} />

                    <Sizebox height={50} />


                </LessonPage>)
            case 4: 
                return (<LessonPage name={'Правовой фундамент понятия «легализации денег» в Республике Казахстан'} lecturer={'AML Academy'}>
                    <Sizebox height={28} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Республикой Казахстан в целях борьбы с отмыванием денег и соответсвтия международным стандартам имплементированы в правовую систему нормы в сфере ПОД/ФТ
                        </>
                    </HeaderWithLine>
                </LessonPage>)
            case 5: 
                return (<LessonPage name={'Основные стадии отмывания денег'} lecturer={'AML Academy'}>
                    <Sizebox height={28} />
                    <HeaderWithLine headerColor={'#1F3C88'} lineColor={'#CADEFC'}>
                        <>
                            Республикой Казахстан в целях борьбы с отмыванием денег и соответсвтия международным стандартам имплементированы в правовую систему нормы в сфере ПОД/ФТ
                        </>
                    </HeaderWithLine>
                </LessonPage>)
        }
    }

    return ( 
        <div className="basic-course">
            <div className="course-wrapper">

                <div className="course-head">
                    <div>
                        <div className="show-nav-btn" onClick={handleNavOpen}>
                            <RxHamburgerMenu className="show-nav-btn-icon" size={21}/>
                        </div>
                        <div className="course-subtitle">{courseName}</div>
                    </div>
                    <div className='close-icon' onClick={() => {
                        navigate('/courses/')
                    }}>
                        <AiOutlineClose />
                    </div>
                </div>

                <div className="course-body">

                    <div className={isNavOpen ? "course-nav" : "course-nav hide"}>

                        <div className="nav-head">
                            <div>
                                <h2>{courseName}</h2>
                                <div className='progress-bar'>
                                    <div>22% complete</div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-body">
                            <Session 
                                session={{
                                    id: 1,
                                    group: 'introduction',
                                    name: 'Основные понятия и сокращения',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={1 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 2,
                                    group: 'introduction',
                                    name: 'Система ПОД/ФТ',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={2 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 3,
                                    group: 'introduction',
                                    name: 'История возникновения первых «схем» отмывания денег',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={3 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 4,
                                    group: 'introduction',
                                    name: 'Правовой фундамент понятия «легализации денег» в Республике Казахстан',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={4 === activeSessionId}
                            />
                            <Session 
                                session={{
                                    id: 5,
                                    group: 'introduction',
                                    name: 'Основные стадии отмывания денег',
                                    progress: 0,
                                }}
                                handleSessionClick={handleSessionClick} 
                                isActive={5 === activeSessionId}
                            />
                        </div>

                    </div>

                    <div className={isNavOpen ? "course-content open" : "course-content"}>
                        <div className="content">
                            {
                                getLesson(activeSessionId)
                            }
                        </div>
                    </div>

                </div>

                </div>
        </div>
    );
}

const LessonPage = ({ children, name, lecturer }) => {

    return (
        <>
            <div className="content-header">
                <h1>{name}</h1>
                <div className='lector'>
                    <img src={lectorImage} alt="lector-name" />
                    <p>{lecturer}</p>
                </div>
            </div>
            {children}
        </>
    );
}

const TODO = ({text}) => (
    <div
        style={{
            background: 'red',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
            width: '100%',
            border: '50%',
        }}
    >
        <p style={{color: '#FFF'}}>TODO: {text}</p>
    </div>
)

export default Basic_course;