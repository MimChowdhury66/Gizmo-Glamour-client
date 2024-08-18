import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'

const Nav = () => {
    const { logout, user } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <Tooltip id="my-tooltip" />
                            {
                                user ? <div data-tooltip-id="my-tooltip" data-tooltip-place="right" data-tooltip-content={user?.displayName || 'name not found'} className="dropdown dropdown-end  z-[4]" >
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar " >
                                        <div className="w-10 rounded-full "  >
                                            <img src={user?.photoURL || 'https://avatars.githubusercontent.com/u/86664820?v=4'} alt="" />

                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content z-[4] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><button onClick={logout} className="btn btn-sm btn-ghost">Logout</button></li>
                                    </ul>
                                </div> :


                                    <div className="flex gap-2 ">
                                        <Link to='/login'><button className="btn lg:text-xl text-white  bg-blue-400 ">Log In</button></Link>
                                        <Link to='/register'><button className="btn lg:text-xl text-white bg-blue-400">Register</button></Link>
                                    </div>

                            }
                        </ul>
                    </div>
                    <img className='w-[90px] lg:w-[150px]' src="/Gizmo_Glamour.png" alt="" />
                    <br />
                    <h2 className=''><span className='font-bold'>Gizmo</span> Glamour</h2>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <Tooltip id="my-tooltip" />
                        {
                            user ? <div data-tooltip-id="my-tooltip" data-tooltip-place="top" data-tooltip-content={user?.displayName || 'name not found'} className="dropdown dropdown-end  z-[4]" >
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar " >
                                    <div className="w-10 rounded-full "  >
                                        <img src={user?.photoURL || 'https://avatars.githubusercontent.com/u/86664820?v=4'} alt="" />

                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[4] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><button onClick={logout} className="btn btn-sm btn-ghost">Logout</button></li>
                                </ul>
                            </div> :


                                <div className="flex gap-2 ">
                                    <Link to='/login'><button className="btn lg:text-xl text-white  bg-blue-400 ">Log In</button></Link>
                                    <Link to='/register'><button className="btn lg:text-xl text-white bg-blue-400">Register</button></Link>
                                </div>

                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;