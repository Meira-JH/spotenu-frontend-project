import React from 'react';
import {connect} from "react-redux"

class PageError extends React.Component{

    render(){
        return(
            <div>
                Error page not found
            </div>
        )
    }
}

export default connect (null, null) (PageError);