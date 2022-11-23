import React from 'react';
import './blockList.css'
import BlockInteractive from '../UI/blocks/BlockInteractive';

const BlockList = ({ blocks, remove, rating }) => {
    return (
        <div>
            <div className="blocks-title">
                Some blocks:
            </div>
            {blocks.map((block) =>
                <div className="block-container" key={block.id}>
                    <BlockInteractive block={block} rating={rating.filter(r => r.id == block.id)[0]} remove={remove} />
                </div>
            )}
        </div>
    );
};

export default BlockList;