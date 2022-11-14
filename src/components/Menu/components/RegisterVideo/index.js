import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

function useForm() {
  const [values, setValues] = useState({
    titulo: "",
    url: "",
  });
  return {
    values,
    handleChange: (e) => {
      const name = e.target.name;
      setValues({
        ...values,
        [name]: e.target.value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}
export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = useState(false);

  const formCadastro = useForm();

  return (
    <StyledRegisterVideo>
      <button
        type="button"
        className="add-video"
        onClick={() => setFormVisivel(true)}
      >
        +
      </button>
      {formVisivel && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => {
                setFormVisivel(false);
              }}
            >
              X
            </button>
            <input
              placeholder="Título do vídeo"
              onChange={(e) => {
                formCadastro.handleChange(e);
              }}
              value={formCadastro.titulo}
              name="titulo"
            />
            <input
              placeholder="URL"
              onChange={(e) => {
                formCadastro.handleChange(e);
              }}
              value={formCadastro.url}
              name="url"
            />
            <button type="submit"> Cadastrar </button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
