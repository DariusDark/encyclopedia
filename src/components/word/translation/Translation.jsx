import React from 'react'

import { keys } from '../../../api/keys/keys';
import { distributor } from '../../../api/nodes/nodes';

function Translation({ item }) {
    const dictionaryTitle = keys[`${item.dictionary}`];
    const mainWordText = item.title;
    return (
        <div className="word">
            <h3 className="word__headline">{dictionaryTitle}</h3>
            <h2 className="word__title">{mainWordText}</h2>
            {distributor(item.body)}
        </div>
    )
}

export default Translation
