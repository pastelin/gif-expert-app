import { memo } from 'react'; // Import memo
import { PropTypes } from 'prop-types';

// Using memo to prevent re-renders if props haven't changed.
export const GifItem = memo(({ title, url }) => {
    return (
        // The main container for the GIF item.
        <div className="card-item">
            <div className="card-image">
                <img src={url} alt={title} />
            </div>
            {/* Display the title of the GIF. */}
            <p>{title}</p>
        </div>
    );
});

// Define prop types for validation.
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

// Set a display name for easier debugging in React DevTools.
GifItem.displayName = 'GifItem';
