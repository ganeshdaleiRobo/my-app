import React from 'react';
import '../../style/left-side-bar.scss';
class LeftSideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[
                {label:"AsyncSubject",path:""},
                {label:"CBehaviorSubject",path:""},
                {label:"CNotification",path:""},
                {label:"CObservable",path:""},
                {label:"CReplaySubject",path:""},
                {label:"CScheduler",path:""}
            ]
        }
    }
render(){
    return(
        <ul>
            {
                this.state.list.map((value, index, arr)=>{
                    return(
                        <li>{value.label}</li>
                    )
                })
            }
        </ul>
    )
}
}
export default LeftSideBar;