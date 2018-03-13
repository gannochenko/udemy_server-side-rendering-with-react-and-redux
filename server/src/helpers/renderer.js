import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/routes.js';

// todo: refactor
export default (req) => {
    const content = renderToString(
        <StaticRouter
            location={req.path}
            context={{}}
        >
            <Routes />
        </StaticRouter>
    );

    return `
        <html>
            <head>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js?v=1"></script>
            </body>
        </html>
    `;
};