import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    // State to hold the list of categories the user has searched for.
    const [categories, setCategories] = useState([]);

    // Function to add a new category to the list.
    // It's passed down as a prop to the AddCategory component.
    const onAddCategory = (newCategory) => {
        // Prevent adding duplicate categories.
        if (categories.includes(newCategory)) return;

        // Add the new category to the beginning of the array.
        setCategories([newCategory, ...categories]);
    };

    return (
        // Main container for the application.
        <main className="contenedor">
            {/* Header section containing the title and the search input. */}
            <header>
                <h1>Gif Expert App</h1>
                <AddCategory onNewCategory={onAddCategory} />
            </header>

            {/* Map over the categories array to render a GifGrid for each one. */}
            {categories.map((category) => (
                <GifGrid
                    // The key prop is essential for React's rendering performance.
                    key={category}
                    category={category}
                />
            ))}
        </main>
    );
};