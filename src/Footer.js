import * as React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer(){
    return(
        <div className='footer-bg'>
            <p className='attribution'> Made with ❤️ by <a href='https://carltonagesa.netlify.app/' target="_blank">Carlton Agesa</a></p>
        </div>
    )
}