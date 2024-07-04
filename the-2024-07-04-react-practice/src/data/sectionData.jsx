import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import BattleShip from '../sections/battleShip/BattleShip';
import HaHaButton from '../sections/haHaButton/HaHaButton';
import MathOlymp from '../sections/mathOlymp/MathOlymp';
import WhackAMole from '../sections/whackAMole/WhackAMole';

export const sectionData = [
    {
        dataSmall:{secId:'haHaButton',
                    icon:<FontAwesomeIcon icon="fa-regular fa-circle-dot" />,
                    titleUpper:"Ha Ha Button",
                    titleLower:"🤣It is a Best Button Ever😀",
                    img:require(`../assets/img/ha-ha-button.png`),
                    description:"Just click it."},  
        child: <HaHaButton />
    },
    {
        dataSmall:{secId:'mathOlymp',
                    icon:<FontAwesomeIcon icon="fa-solid fa-mountain-sun" />,
                    titleUpper:"Math Olympus",
                    titleLower:"Climb Upper and Upper",
                    img:require(`../assets/img/mount-olymp.jpg`),
                    description:"Now you should calculate."},
        child: <MathOlymp />
    },
    {
        dataSmall:{secId:'whackAMole',
                    icon:<FontAwesomeIcon icon="fa-solid fa-gavel" />,
                    titleUpper:"Whack a Mole",
                    titleLower:"Perfect for Concentration",
                    img:require(`../assets/img/whack-a-mole.jpg`),
                    description:"You should beat each mole."},
        child: <WhackAMole />
    },
    {
        dataSmall:{secId:'battleShip',
                    icon:<FontAwesomeIcon icon="fa-solid fa-ship" />,
                    titleUpper:"BattleShip Game",
                    titleLower:"No chance, you don't beat me",
                    img:require(`../assets/img/battleship-game.png`),
                    description:"Place your ships, draw the enemy."},
        child: <BattleShip />
    },
]

export default sectionData