import React, { useState } from 'react';

import './style.scss';

const GroupList = ({
    list=[
        { 
            name: 'Превентивные меры', 
            description: '(меры, направленные на недопущение рисков и угроз ОД/ФТ, которые не предполагают санкционных методов работ)', 
            items: [
                'Нормативно-правовая база (Закон о ПОД/ФТ, подзаконные акты и тд.)',
                'Рискориентированный подход (система управления рисками СФМ, АФМ, ПО, ГО и др.)',
                'Реализация СФМ требований ПВК (НПК, оценка рисков, обучение и повышение квалификации и др.)',
                'Система мониторинга и принятие мер по ним (ПО/СПО, в том числе об отказах, прекращении и приостановлении операций клиента)',
                'Профилактические меры контроля со стороны надзорных органов (камеральный контроль, уведомления, письма, встречи и др.)',
                'Иные меры, которые применяются в целях недопущения ОД/ФТ'
            ]
        },
    ]
}) => {

    const [activeList, setActiveList] = useState(null);

    const handleClick = (participant) => {
        setActiveList(['']);
    };

    return (
        <div className='group-list'>
            
        </div>
    );
};

export default GroupList;