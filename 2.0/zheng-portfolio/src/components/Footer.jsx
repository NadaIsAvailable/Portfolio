import Button from './Button.jsx';

import './Footer.css';

export default function Footer() {
    return (
        <>
            <footer>
                <h1>Feel Free to Contact Me</h1>

                <div className="footer-buttons">
                    <Button text="Resume" link="/pdfs/Zheng_Kevin_Resume_Apr2026.pdf" newTab={true} />
                    <Button text="GitHub" link="https://github.com/NadaIsAvailable" newTab={true} />
                    <Button text="LinkedIn" link="https://www.linkedin.com/in/kzheng0718" newTab={true} />
                </div>

                <p>Developed by Kevin Zheng.</p>
                <p>&copy; 2026 Kevin Zheng. All rights reserved.</p>
            </footer>
        </>
    );
}