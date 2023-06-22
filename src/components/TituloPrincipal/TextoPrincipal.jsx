import './TituloPrincipal.css'

const TituloPrincipal = ({ titulo, subtitulo }) => {
  return (
    <div className="titulo-principal text-center">
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
    </div>
  );
};

export default TituloPrincipal;

