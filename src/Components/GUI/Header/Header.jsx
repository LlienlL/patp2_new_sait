import style from "./header.module.scss";

const Header = ({ ...props }) => {
    return (
        <header>
            <div className={style.headerBcgImage} {...props}>
                {/*  <img  src="/img/header.jpg" /> */}
            </div>

        </header>
    );
}

export default Header;
