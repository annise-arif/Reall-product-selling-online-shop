import React from 'react';
import './Ans2.css';

const Ans2 = () => {
    return (
        <div>
            <div className='ans2'>
                <h3>Different Of Props Vs State</h3>

                <p>Props <br />
                <small>props are used to pass data from one component to another component, <br />
                and props are doing data receiving works</small></p>
                <hr />
                <p>State <br />
                <small>state is a local data storage that is local to the component only <br />
                and cannot be passed data to other components and state changes trigger a render pudate.</small></p>
            
            </div>

            <div className='footer'>
                <footer>copyright &copy; MD: Arif hasan</footer>
            </div>
        </div>
    );
};

export default Ans2;