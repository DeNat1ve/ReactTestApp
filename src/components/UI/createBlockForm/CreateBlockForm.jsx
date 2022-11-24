import React, { useState } from 'react';

const CreateBlockForm = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    return (
        <form>
            <input type="text" value={title} onChange={e => setTitle(e.targer.value)} />
            <input type="text" value={body} onChange={e => setBody(e.targer.value)} />
            <button>Add New Block</button>
        </form>
    );
};

export default CreateBlockForm;