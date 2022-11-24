import React, { useState } from 'react';
import cl from './createBlockForm.module.css'

const CreateBlockForm = ({ id, create, setVisible }) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewBlock = (e) => {
        e.preventDefault()
        create({ id, title, body })
        setVisible(false)
        setBody('')
        setTitle('')
    }

    return (
        <form className={cl.form}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" value={body} onChange={e => setBody(e.target.value)} />
            <button onClick={(addNewBlock)}>Add New Block</button>
        </form>
    );
};

export default CreateBlockForm;