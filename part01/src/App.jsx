import {Header} from "./Header.jsx";
import {Content} from "./Content.jsx";
import {Total} from "./Total.jsx";

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const contentData = [{
        name: part1,
        numberOfExercises: exercises1,
    }, {
        name: part2,
        numberOfExercises: exercises2,
    }, {
        name: part3,
        numberOfExercises: exercises3,
    }]

    return (
        <div>
            <Header course={course} />
            <Content contentData={contentData} />
            <Total exercisesCount={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

export default App