import React,{ useState} from 'react'; 
//import { VscAccount } from "react-icons/vsc";
import { useHistory} from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import formComponent from '../components/formComponent'

const SetupPage = (props) => { 
    const history = useHistory();
    const [ofAge, setOfAge] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState("");
    let placeholder
    let listOfPlayers = []

    //rules can be moved to an app function as it is shared with homepage
    const rules = 'The rules are simple first one to game point (default 10 points) wins!\n\nThe turns go in order from the first person added to the last. \n When it is your turn you have the choice of: \n\n1.(PLAY) Doing the dare and gaining the points (if your dare involves another person that does not consent see notes). \n\n2.(DRINK) Taking the penalty drink(s)\n allowing you to pass the dare without losing any points. \n\n3.(PASS) Passing the dare avoiding the penalty shot(s) but also losing the losing the same amount of points you would have gained (only if you have enough points to do so).\n  \n**notes**  \nIf you can not complete your own dare for any reason other than another persons involvement(including conflicts with previous dares) you MUST choose DRINK or PASS \n\nIf you can not complete your own dare due to another player not giving consent, you have the option to PASS or DRINK with both players taking the drinks.'
    function handlePlayClick(){
        history.push(`/game`)
    }

    function handleRulesClick(){
        window.alert(rules);
    }

    function handleCheckbox(){
        if (ofAge === false){
            setOfAge(true)

        }
        else {
            setOfAge(false)
        }
        
    }


    function handleSubmit(){
        console.log(currentPlayer)
        if (ofAge === false){
            window.alert("Sorry you must be 21 to play this game")
        }
        else if(currentPlayer !== ""){
            window.alert("Please enter a name")
        }
        else{
            listOfPlayers.push(currentPlayer)
        }
    }

    function handleInput(){
    }

    return(
        <div className={'setupPage'}>
            <div className={'setupGrid'}>
                <div>
                    <div className={'setupBanner'}>Current Players</div>
                    <div className={'setupList'}>list of current players</div>
                </div>

                <div>
                    <div className={'setupBanner'}>Add Player</div>
                    <div className={'setupList'}>
                        <formComponent/>
                    </div>
                </div>
            </div>
            <div className = {'buttons'}>
                <button onClick={handleRulesClick}> rules button</button>
                <button onClick={handlePlayClick}>play button</button>
            </div>            
        </div>
    )
}

export default SetupPage
