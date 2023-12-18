//atajos de snippets que nos interesan. Son códigos cortos que autocompletan lo que necesitamos. Como lo que es ! para HTML . El primero y muy importante : rafc (React Arrow Function Component). Te importa con función flecha

const string = "Esto es un texto";
const number = 123456;
const array = [`Aprendiendo react desde cero `];
const boolean = true;
const functionCualquiera = () => 1 + 1;
const objeto = { nombre: "Curso de js", duración: 7 };
const fecha = new Date();

export const PrimerComponente = () => {
  return (
    <>
      <h1 className="title">Variables en JSX</h1>
      <ul>
        <li>{string}</li>
        <li>{number}</li>
        <li>{array}</li>
        <li>{JSON.stringify(boolean)}</li>
        <li>{functionCualquiera()}</li>
        <li>{JSON.stringify(objeto)}</li>
        <li>{JSON.stringify(fecha)}</li>
      </ul>
    </>
  );
};
