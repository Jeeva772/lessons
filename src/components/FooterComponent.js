import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                </div>
                <div className="col-7 col-sm-5">
                    <div></div>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <p> Thank you!! </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2019 Learning Management system</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;