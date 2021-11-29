function CustomButton(props) {
    const {buttonType, buttonFunction, buttonText} = props 
    return <div>
        <button className={ buttonType} onClick={props.buttonFunction}>{buttonText}</button>
    </div>
}

export default CustomButton;
