import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000'
  }
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit (event) {
        event.preventDefault();
        setCategorias([
          ...categorias, values
        ]);

        setValues(initialValues);
      }}>

        <FormField 
          label="Nome"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField 
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField 
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
