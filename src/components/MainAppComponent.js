import React from 'react';
import utility from '../utility/utility';
import Search from './search/Search';
class  MainAppComponent extends React.Component{
    render(){
        return(
            <div className="rxjs-wapper">
                <div className="rx-wapper-inner">
                <div className="rx-header">
                 Observer
                </div>
                <div className="rxjs-container">
                    <div className="rxjs-container-inner">
                    <Search/>
                    </div>
                </div>
                
                </div>
            </div>
        )
    }
}
export default MainAppComponent;
