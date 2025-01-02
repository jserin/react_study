const Button = ({text, color, children}) => {
    const onClickBtn = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
        <button onClick={onClickBtn}
        style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "black"
}

export default Button;