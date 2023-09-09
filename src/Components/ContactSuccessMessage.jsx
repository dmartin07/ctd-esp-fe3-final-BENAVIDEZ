//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div>
      Gracias {props.name}, te contactaremos cuando antes vía mail.
    </div>
  );
}

export default Card;
