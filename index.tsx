import React from 'react';
import ReactDOM from 'react-dom';

import Submitter from "./change_text";

// The Suspense component causes React to display the fallback KatSpinner until
// the i18n translation strings have been loaded.

ReactDOM.render(
    <React.StrictMode>
        <Submitter />
    </React.StrictMode>,
    document.getElementById('root')
);