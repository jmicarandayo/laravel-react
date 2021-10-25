import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
    return (
        <>
        <div className="text-center pt-10">
            <h1 className="text-yellow-500">ReactJs! This is it pancit!</h1>
        </div>
        </>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}