import React, { Component } from 'react';
import '../App.css';
import '../index.css';

export default function Title({title,name})  {
    
        return (
            <div className="row  col-20 mx-auto text-center text-title">
                <div className=" text-center text-title"></div>
                    <h1 className="text-capitalize font-weigth-blold col-20 mx-auto text-center text-title">
                        <strong className="text-blue">{name}</strong>  {title} 
                    </h1>
            </div>
        );
    
}
