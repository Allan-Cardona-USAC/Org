import "../Boton/Boton.css";
import Swal from 'sweetalert2'


const Boton = (props) => {

    const handleClick = () => {
        Swal.fire({
            title: "Colaborador",
            text: "creado exitosamente!",
            icon: "success"
        });
    }

    return (
        <button className="btn btn-outline-primary" onClick={handleClick}>
            {props.children}
        </button>
    );
}
export default Boton;