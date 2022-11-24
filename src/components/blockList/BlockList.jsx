import React from 'react';
import './blockList.css'
import BlockInteractive from '../UI/blocks/BlockInteractive';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const BlockList = ({ blocks, remove, rating }) => {
    return (
        <div>
            <div className="blocks-title">
                Some blocks:
            </div>
            <TransitionGroup>
                {blocks.map((block) =>
                    <CSSTransition timeout={1000} classNames="item-block" key={block.id}>
                        <div className="block-container">
                            <BlockInteractive block={block} rating={rating.filter(r => r.id === block.id)[0]} remove={remove} />
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default BlockList;