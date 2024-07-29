import React, { useState } from "react";

const Header = (props) => {
    ///input data
    const [text, setText] = useState('');
    //on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        props.search(text);
    };
    return(
        <div className="container-fluid botder-1 shadow">
            <div className="col-md-12 pt-1 pb-0">
                <nav className="navbar">
                    <a className="navbar-brand font-weight-bold text-dark" href="/">MiniTUBE<img src="images/images.png"/></a>
                    
                    <form className="col-md-5" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-grouo d-flex">
                            <input
                             type="text" 
                             name="search" 
                             id="search" 
                             placeholder="Search Here..."
                             className="form-control col-md-10"
                             value={text}
                             onChange={(e) => setText(e.target.value)}
                             />
                            <input
                             type="submit" 
                             value="Search"
                             className="brn btn-primary col-md-2 ml-1"/>
                        </div>
                    </form>
                    <p>
                        welcome, <span className="text-primary">Guest</span>
                    </p>
                </nav>
            </div>
        </div>
    )

};

export default Header;