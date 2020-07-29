import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const initialState = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(initialState);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor
        })
    }

    function handleChange(event) {
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(initialState);
            }}>
                <FormField
                    label="Nome da Categoria: "
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />
                <FormField
                    label="Descrição: "
                    name="descricao"
                    type="text"
                    value={values.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label="Cor: "
                    name="cor"
                    type="color"
                    value={values.cor}
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
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Ir para home
                </Link>
        </PageDefault>
    )
}

export default CadastroCategoria