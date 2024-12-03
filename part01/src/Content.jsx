import {Part} from "./Part.jsx";

export const Content = ({ contentData }) => (
    <>
        {contentData.map((contentItemData, i) =>
            <Part
                key={i}
                name={contentItemData.name}
                numberOfExercises={contentItemData.numberOfExercises}
            />
        )}
    </>
)