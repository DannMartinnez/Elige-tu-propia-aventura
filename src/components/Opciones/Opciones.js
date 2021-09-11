import React, {Component} from 'react';


export default class Opciones extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){

        const {handles, opciones} = this.props;
        return (
        <div className="opciones">
            <div className="opcion">
                <button id="A" className="botones" onClick={handles.funA}>A</button>
                <h2>{opciones.a}</h2>
           </div>
                               
            <div className="opcion">
                 <button id="B" className="botones" onClick={handles.funB}>B</button>
                 <h2>{opciones.b}</h2>
             </div>
        </div>
        )
    }

}
