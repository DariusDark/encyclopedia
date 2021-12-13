const nodes = {
    'Text': (text, ...rest) => {
        const [className] = rest;
        // console.log(className);
        // console.log(text);
        return <span className={`word__text${rest.length ? ` ${className}` : ''}`}>{text}</span>;
    },
    'Paragraph': function ({ markup: markupArr }, ...rest) {
        // console.log('MARKUPS', markupArr);
        const spanElems = [];

        for (let i = 0; i < markupArr.length; i++) {
            const { node: nodeName } = markupArr[i];
            const { text } = markupArr[i];

            spanElems.push(this[nodeName](text, ...rest));
        };
        return <p className="word__paragraph">{spanElems}</p>
    },
    'Transcription': function (text) {
        return this['Text'](`[${text}]`, 'word__transcription word__text--skyblue');
    }, // <- Rendering in page
    'Abbrev': function (text) {
        return this['Text'](text, 'word__abbreviation word__text--grey');
    }, // <- Rendering in page || Need to return to paragraph
    'Sound': (sound) => { }, // <- Rendering in page || Need to return to paragraph
    'List': function (list) {
        const { items } = list;
        const organizedList = [];
        for (let i = 0; i < items.length; i++) {
            const listItem = items[i];
            const { node } = listItem;
            organizedList.push(this[node](listItem));
        }
    }, // <- Has children || items == Arr
    'ListItem': function(listItem) { 
        
     }, // <-Has children
    'Examples': () => { return null }, // <- Has children || items == Arr
    'ExampleItem': () => { return null },
    'Example': () => { return null },
    'CardRefs': () => { return null }, // <- Has children || items == Arr
    'CardRefItem': () => { return null },
    'CardRef': () => { return null },
}

export function distributor(bodyArr) {
    const pElems = [];
    for (let i = 0; i < bodyArr.length; i++) {
        // console.log(bodyArr[i])
        const { node: nodeName } = bodyArr[i];
        pElems.push(nodes[nodeName](bodyArr[i]));
        // console.log(spanEl);
    }
    return pElems
    // nodes[obj.node](obj);
    // console.log(bodyArr);
}