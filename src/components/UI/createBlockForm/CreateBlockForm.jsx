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
            <div className={cl.modalTitle}>Form for creating a new block</div>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className={cl.input} placeholder='Title...' />
            <input type="text" value={body} onChange={e => setBody(e.target.value)} className={cl.input} placeholder='Text...' />
            <div className={cl.container}>
                <button onClick={(addNewBlock)} className={cl.button}>Add New Block</button>
            </div>
        </form>
    );
};

export default CreateBlockForm;