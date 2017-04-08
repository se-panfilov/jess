const style = {
    container: {
        position: 'fixed',
        'z-index': 99999,
        right: '12px',
        top: '12px'
    },
    notification: {
        cursor: 'pointer',
        padding: '12px 18px',
        margin: '0 0 6px 0',
        'background-color': '#000',
        opacity: 0.8,
        color: '#fff',
        'border-radius': '3px',
        'box-shadow': '#3c3b3b 0 0 12px',
        width: '300px',
        error: {
            'background-color': '#D5122B'
        },
        warn: {
            'background-color': '#F5AA1E'
        },
        success: {
            'background-color': '#7AC13E'
        },
        info: {
            'background-color': '#4196E1'
        },
        '&:hover': {//TODO wtf? why do whe need "&"?
            opacity: 1,
            'box-shadow': '#000 0 0 12px'
        }
    },
    title: {
        'font-weight': '500'
    },
    message: {
        display: 'inline-block',
        'vertical-align': 'middle',
        width: '240px',
        padding: '0 12px'
    }
}

const jess = require('../jess/lib')

const result = jess(style)
console.log(result)