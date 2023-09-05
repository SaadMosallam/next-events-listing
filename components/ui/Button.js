import Link from "next/link";
import classes from './button.module.css'

const Button = ({ children, link, onClick, ...props }) => {
    if (link) {
        return (
            <Link className={classes.btn} href={link}>
                {children}
            </Link>
        );
    }
    return (
        <button {...props} className={classes.btn} onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;