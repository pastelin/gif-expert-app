import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


// Custom hook to fetch and manage a list of GIFs based on a category.
export const useFetchGifs = (category) => {
    // State to store the array of images.
    const [images, setImages] = useState([]);
    // State to manage the loading status.
    const [isLoading, setIsLoading] = useState(true);

    // An async function to fetch GIFs from the API.
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    // useEffect hook to trigger the GIF fetching process.
    // It runs whenever the 'category' prop changes.
    useEffect(() => {
        getImages();
        // The dependency array [category] ensures this effect re-runs
        // every time the user searches for a new category.
    }, [category]);

    // Return the images and the loading state.
    return {
        images,
        isLoading,
    };
};
