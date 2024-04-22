import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBarComponent extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <ul className='list-unstyled'>
                        <li className='d-grid mt-1'>
                            <Link className='btn btn-primary' to="/home">Home</Link>
                        </li>
                        <li className='d-grid mt-1'>
                            <Link className='btn btn-primary' to="/electronic">Electronics</Link>
                        </li>
                        <li className='d-grid mt-1'>
                            <Link className='btn btn-primary' to="/fashion">Fashion</Link>
                        </li>
                        <li className='d-grid mt-1'>
                        <Link className='btn btn-primary' to="/footwear">Footwear</Link>
                        </li>
                        <li className='d-grid mt-1'>
                        <Link className='btn btn-primary' to="/categories">Categories</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        )
    }
}