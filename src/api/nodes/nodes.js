const nodes = {
    'Text': (text, ...rest) => {
        const [className] = rest;

        return <span className={`word__text${rest.length && className ? ` ${className}` : ''}`}>{text}</span>;
    },
    'Paragraph': function ({ markup: markupArr }, ...rest) {
        const spanElems = [];
        const [type] = rest;
        for (let i = 0; i < markupArr.length; i++) {

            const { node: nodeName } = markupArr[i];
            const { text } = markupArr[i];
            console.log(markupArr[i]);
            spanElems.push(this[nodeName](text, type !== 'listItem' ? type : null));
        };
        return <p className={`word__paragraph${rest.length && type === 'listItem' ? ' word__paragraph--margin-0' : ''}`}>{spanElems}</p>
    },
    'Transcription': function (text) {

        return this['Text'](`[${text}]`, 'word__transcription word__text--skyblue');

    }, // <- Rendering in page
    'Abbrev': function (text) {

        return this['Text'](text, 'word__abbreviation word__text--grey');

    }, // <- Rendering in page || Need to return to paragraph
    'Sound': (sound) => { }, // <- Rendering in page || Need to return to paragraph || I don't have full link
    'List': function (list) {
        const { items } = list;
        const organizedList = [];

        for (let i = 0; i < items.length; i++) {
            const listItem = items[i];
            const { node: nodeName } = listItem;

            organizedList.push(this[nodeName](listItem));
        }

        return <ol className="word__list">{organizedList}</ol>
    }, // <- Has children || items == Arr
    'ListItem': function (listItem) {
        const { markup: markupArr } = listItem;
        const liEls = [];

        for (let i = 0; i < markupArr.length; i++) {
            const { node: nodeName } = markupArr[i];
            // try {
                // console.log(markupArr[i]);
                    liEls.push(this[nodeName](markupArr[i], nodeName === 'List' ? null : 'listItem'));
                // console.log(nodeName);
            // } catch (e) {
            // console.log(e);
            // }
        }
        return <li className="word__list-item">{liEls}</li>;
    }, // <-Has children || markup
    'Examples': () => { return null }, // <- Has children || items == Arr
    'ExampleItem': () => { return null },
    'Example': () => { return null },
    'CardRefs': () => { return null }, // <- Has children || items == Arr
    'CardRefItem': () => { return null },
    'CardRef': () => { return null },
    'Comment': () => { return null },
    'Caption': () => { return null }
}

export function distributor(bodyArr) {
    const elems = [];
    for (let i = 0; i < bodyArr.length; i++) {
        const { node: nodeName } = bodyArr[i];
        elems.push(nodes[nodeName](bodyArr[i]));
    }
    return elems
}