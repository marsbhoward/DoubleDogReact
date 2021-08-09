//import React,{ useState, useEffect } from 'react';
//import { GiJumpingDog } from "react-icons/gi";
import { useHistory} from "react-router-dom";

const HomePage = (props) => { 
    const history = useHistory();
     
    const rules = 'The rules are simple first one to game point (default 10 points) wins!\n\nThe turns go in order from the first person added to the last. \n When it is your turn you have the choice of: \n\n1.(PLAY) Doing the dare and gaining the points (if your dare involves another person that does not consent see notes). \n\n2.(DRINK) Taking the penalty drink(s)\n allowing you to pass the dare without losing any points. \n\n3.(PASS) Passing the dare avoiding the penalty shot(s) but also losing the losing the same amount of points you would have gained (only if you have enough points to do so).\n  \n**notes**  \nIf you can not complete your own dare for any reason other than another persons involvement(including conflicts with previous dares) you MUST choose DRINK or PASS \n\nIf you can not complete your own dare due to another player not giving consent, you have the option to PASS or DRINK with both players taking the drinks.'
    function handlePlayClick(){
        history.push(`/setup`)
    }

    function handleRulesClick(){
        window.alert(rules);
    }

    return(
        <div className= {'homePage'}>
            <div className={"main"}>
                <p className={'welcome'}>
                    Double Dog Dare
                </p>
                <p className={'intro'}>
                    Players must balcance the points to be gained or lost from each dare  and the amount of penalty drinks
                    If this is your first time playing click the rules button below for complete details or go to the setup page to start a new game.
                </p>
            </div>
            <div className= {"homeFooter"}>
                <div className= {'disclaimer'}>
                KNOW YOUR LIMIT: Double Dog Dare is designed as an adult “drinking game” but may be played without consumption of alcohol. We do not recommend misuse of alcohol including excessive consumption, binge-drinking, drinking and driving/boating, and/or underage drinking. It is the players’ responsibility to monitor and moderate their alcohol consumption. We recommend that all players make adequate arrangements for their personal safety and transportation BEFORE playing.
                </div>
                <div className={'buttons'}>
                    <button onClick={handleRulesClick}>Rules</button>
                    <button onClick={handlePlayClick}>Play</button>
                </div>
            </div>    
        </div>
    )
}

export default HomePage