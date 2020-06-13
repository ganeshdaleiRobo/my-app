import React, { useEffect } from 'react';
import '../../style/search.scss';
import {useState} from 'react';
import {observer} from '../../utility/utility';
import{ useRef } from "react";

import { fromEvent, of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';


const Search = ()=>{
const textInput = useRef();
const click = fromEvent(document,"click");
click.subscribe((e)=>{
    console.log("Check>>", e)
})
    
    useEffect(()=>{
        
    },[])

return(
<div className="input-wapper">
    <div className="input-main">
    <input   type="text"/>
    </div>
    <div className="Search-button">
   <input id="input" ref={textInput}className="Button" type="button" value="Search"/>
 
    </div>
    
</div>
)
}
export default Search;