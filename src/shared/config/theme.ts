import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0056ab',
            light: '#8bb0d3'
        },
        secondary: {
            main: '#2a2a2b',
        },
    },
});

export const postStyle = {
    display: 'block',
    textDecoration: 'none',
    cursor: 'pointer',
    border: '1px solid',
    borderColor: 'primary.light',
    borderRadius: '1rem',
    margin: '1rem 0',
    padding: '1rem',
    '&:hover': {
        backgroundColor: '#f1f1f1'
    }
}

export const buttonStyle = {
    color: 'primary.main',
    textDecoration: 'none',
    border: '1px solid',
    borderColor: 'primary.light',
    borderRadius: '0.6rem',
    padding: '0.6rem',
    '&:hover': {
        backgroundColor: '#f1f1f1'
    }
}

export const commentsStyle = {
    margin: '0 3rem',
}

export const commentItemStyle = {
    margin: `1rem 0`,
    borderTop: '1px solid',
    borderColor: 'primary.light'
}