function CustomButton(props) {
    const { buttonType, buttonFunction, buttonText, _id } = props
    
    const handleClick = (e) => {
        console.log(e.target)
        console.log(buttonFunction)
        buttonFunction(e.target.id)
    }

    return <div>
        <button id={_id} className={buttonType} onClick={handleClick}>{buttonText}</button>
    </div>
}

export default CustomButton;
