import React from 'react';
import Rock from '../images/icon-rock.svg';
import '../sass/rock.scss';



const rock = () => {
    return ( 
        <div className="rock">
          <div className="hand">
            <img src={Rock} alt="paper" />
          </div>
        </div>
     );
}
 
export default rock;