import config from '../config-styles';

const css = {
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr '.repeat(12),
        gridTemplateRows: 'auto',
        height: '100%',
    },
    enterBtn: {
        gridColumn: '2 / 12',
        gridRows: '3',
        height: '50px',
        backgroundColor: 'transparent',
        color: 'white',
        borderRadius: '1px',
        border:'1px solid white',
        transition: 'background-color 2s, color 1s, box-shadow 2s',
        fontSize: '15px',
        marginTop: '80px',
        ':hover': {
            backgroundColor: 'white',
            opacity: 0.5,
            color: 'black',
            boxShadow: '0 0 100px white'
        },
        ':focus': {
            //outline:`1px solid ${config.green}`,
            boxShadow: '0 0 1000px 1000pt white',
            backgroundColor: 'white',
            opacity: 0.5,
            color: 'black',
        },
        '@media (min-width: 600px)': {
            gridColumn: '8 / 11',
        }
    },
    logo: {
        margin: '100px auto 0 auto',
        maxWidth: '300px',
        '@media(max-width: 800px)': {
            display: 'block',
            margin: 'auto',
            borderLeft: 'none',
        }
    },
    title: {
        marginTop: '40px',
        display: 'inline-block',
        paddingLeft: '40px',
        marginLeft: '40px',
        maxWidth: '200px',
        borderLeft: '1px solid white',
        '@media(max-width: 800px)': {
            display: 'block',
            margin: '40px auto auto auto',
            borderLeft: 'none',
            textAlign: 'center',
            paddingLeft: 0
        }

    },
    text: {
        marginTop: '100px',
        marginBottom: '70px',
        gridColumn: '2 / 12'
    }
}

export default css;