import "../styles/ButtonMe.css"
function ButtonMe(props) {
    const classButton = "btn btn-saya btn-" + props.warna

    return (

        <a href={props.link} class={classButton}>{props.text}</a>


    )
}
export default ButtonMe
