//import React,{ useState, useEffect } from 'react';
//import { GrPlay} from "react-icons/gr";
//import { BiDrink, BiBeer} from "react-icons/Bi";
//import { BsSkipForward } from "react-icons/Bs";
//FaWineBottle

const Game = (props) => { 
    return(
        <div className= {"gamePage"}>
            <div className= {"gameContatiner"}>
                <div>current player</div>
                <div>dare info</div>
                <div className = {'buttonContainers'}>
                    <div className = {"button"}>
                        <p className={"buttonText"}>
                            button 1    
                        </p>
                    </div>
                    <div className = {"button"}>
                        <p className={"buttonText"}>
                            button 2   
                        </p>
                    </div>
                    <div className = {"button"}>
                        <p className={"buttonText"}>
                            button 3    
                        </p>
                    </div>
                </div>
            </div>
            <div>
                score board
            </div>
        </div>
    )    
}

export default Game