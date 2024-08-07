import React from 'react';

const Board = () => {
    const boxs = [1,2,3,4,5,6];
    return (
        <div className=' mx-auto bg-black'>
            <div className=''>
                {boxs?.map((box,idx)=>
                    <div key={idx} className=' w-20 h-20 border border-black'>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Board;