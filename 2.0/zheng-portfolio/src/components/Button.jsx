import './Button.css';

export default function Button({ text, link = "", newTab = false }) {
    return (
        <>
            <a href={link} className='button' target={newTab ? "_blank" : "_self"}>{text}</a>
        </>
    );
}