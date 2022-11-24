import React, { useState } from 'react';
import './blockList.css'
import BlockInteractive from '../UI/blocks/BlockInteractive';
import CreateBlockForm from '../UI/createBlockForm/CreateBlockForm';
import ModalWindow from '../modalWindow/ModalWindow';

const BlockList = ({ blocks, remove, rating, create }) => {
    const [isVisible, setVisible] = useState(false)

    return (
        <div>
            <div className="blocks-title">
                Some blocks:
            </div>
            {blocks.map((block) =>
                <div className="block-container" key={block.id}>
                    <BlockInteractive block={block} rating={rating.filter(r => r.id === block.id)[0]} remove={remove} />
                </div>
            )}
            <ModalWindow visible={isVisible} setVisible={setVisible}><CreateBlockForm id={blocks[blocks.length - 1].id + 1} create={create} setVisible={setVisible} /></ModalWindow>
            <div className="add-block">
                <button className='add-block-button' onClick={() => setVisible(true)}>Add New Block</button>
            </div>
        </div>
    );
};

export default BlockList;