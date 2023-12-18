//atajos de snippets que nos interesan. Son códigos cortos que autocompletan lo que necesitamos. Como lo que es ! para HTML . El primero y muy importante : rafc (React Arrow Function Component). Te importa con función flecha

import propsTypes from "prop-types";
export const SegundoComponente = ({ titulo, subtitulo }) => {
  return (
    <>
      <h1 className="paco">{titulo} </h1>
      <hr />
      <h2>{subtitulo}</h2>
    </>
  );
};

//De manera opcional y para obligar a mi componente a usar por ejemplo strings solo, usamos los proptypes. Todo lo que lleva proptype es por eso.

SegundoComponente.propTypes = {
  titulo: propsTypes.string.isRequired,
  subtitulo: propsTypes.string.isRequired,
};

// En caso de no querer mandar los props desde la main (padre) , podemos mandarlo también desde el componente de la siguiente manera:
//Si utilizamos esto, habría que borrar del main la instrucción para que aplique esta. En caso contrario, aplicará la del Main. En definitiva, lo que prioriza es lo que mande en el main en caso de ponerlo de los dos lados.

SegundoComponente.defaultProps = {
  titulo: "Curso de React",
  subtitulo: "Sección de Props",
};
