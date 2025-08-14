import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());

        setInputValue('');
    };

    return (
        <section className="inputCategory">
            <form className="form" onSubmit={onSubmit} aria-label="form">
                <div className="input-with-icon">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={inputValue}
                        onChange={onInputChange}
                    />
                    <img
                        src="/search.svg"
                        alt="Search"
                        className="input-icon"
                    />
                </div>
                <button type="submit" className="btn-search">
                    Buscar
                </button>
            </form>
        </section>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
