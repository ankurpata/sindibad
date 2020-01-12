const customPackgeSummaryStyle = {
    container: {
        color: '#545454'
    },
    h1: {
        fontSize: '2em'
    },
    cpHeader: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    cpChild: {
        display: 'inline-block',
        borderRadius: '6px',
        '&:first-child': {
            width: '100%'
        },
        '&:not(: first - child)': {
            flex: '1'
        }
    },
    eventsWrapper: {
        display: 'flex',
        'justify-content': 'space-evenly',
        height: '25em'
    },
    dayScroller:{
        flex:1
    },
    eventsList:{
        flex:15
    },
    listItem: {'justify-content': 'center'}
}

export default customPackgeSummaryStyle;
