import { useContext } from "react"
import changeTitleContext from "../../contexts/siblingContext"


export default function HaHaButton() {

  const { setText } =useContext(changeTitleContext)

  const kidsDoOptions = ['Study','Sleep','Jump','Laugh','Tikle Each Other']

  const HandleClick = () =>{
    const randomWord = kidsDoOptions[Math.floor(Math.random() * kidsDoOptions.length)];
    setText(randomWord)
  }


  return (
  
    <button className="btn btn-primary btn-xl" onClick={HandleClick}>
        Ha Ha - Click Me!
    </button>
  )
}
