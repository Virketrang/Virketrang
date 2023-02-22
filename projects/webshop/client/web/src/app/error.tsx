'use client';
import { FunctionComponent, useEffect } from 'react';

type ErrorPage = FunctionComponent<{ error: Error; reset: () => void }>;

const Error: ErrorPage = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <p>Noget gik galt!</p>
            <button onClick={() => reset()}>Noget gik galt</button>
        </div>
    );
};

export default Error;
