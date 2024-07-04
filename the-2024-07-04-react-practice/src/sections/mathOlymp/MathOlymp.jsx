import './MathOlymp.css';
import {useState} from 'react'

export default function MathOlymp() {

  const scoreToLevex = [1,2,4,8,16,32,64,128];

  const [exercises, setExercises] = useState([])
  const [isHidden, setIsHidden] = useState(true);

  const actions = ['-','+'];

  const generataeExercises = ()=>{
    let newExercises = []
    for(let i=0; i<10; i++)
      newExercises.push({
        number1: generateRandomNumber(),
        action: generateRandomAction(),
        number2: generateRandomNumber(),
        answer: '',
        correct: null
    })
    setExercises(newExercises)
  }

  function generateRandomNumber(){
    let number = Math.floor((Math.random() * 100))
    return number
   }

   const handleAnswerChange = (index, value) => {
    const newExercises = [...exercises];
    newExercises[index].answer = value;
    setExercises(newExercises);
  };
  
   function generateRandomAction(){
    let action = actions[Math.floor(Math.random()* actions.length)]
    return action
   }
  
   const handleShowExercises = () => {
    setIsHidden(false);
    generataeExercises();
  };
  
  const checkAnswer = (index)=>{
    const newExercises = [...exercises]
    const {number1, action, number2, answer} = newExercises[index]
    const correctAnswer = action === '+' ? number1 + number2 : number1 - number2;
    newExercises[index].correct = Number(answer) === correctAnswer;

    if(newExercises[index].correct){
      setExercises(newExercises.filter((arr,i)=> i !== index))
    }else{
      newExercises[index].correct = false;
      setExercises(newExercises)

    }


  }


  return (
    <div className="math-olymp">
      <button className="btn btn-primary" onClick={handleShowExercises} disabled={!isHidden}>
        Show Exercises!
      </button>
      <div className={`row d-grid exGrid fs-3 ${isHidden ? 'd-none' : ''}`}>
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise">
            <p className={`text-white ${exercise.correct === false ? 'incorrect' : ''}`}>
              {exercise.number1} {exercise.action} {exercise.number2} ={' '}
              <input
                type="number"
                value={exercise.answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                placeholder="Your answer"
              />
              <button
                className={`btn ${exercise.correct === false ? 'btn-danger' : 'btn-primary'}`}
                onClick={() => checkAnswer(index)}
              >
                check my answer
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}