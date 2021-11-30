function CustomButton(props) {
    const { buttonType, buttonFunction, buttonText, deletePlaylist, _id } = props
    
    const handleClick = (e) => {
        console.log(e.target)
        deletePlaylist(e.target.id)
    }

    return <div>
        <button id={_id} className={buttonType} onClick={handleClick}>{buttonText}</button>
    </div>
}

export default CustomButton;
