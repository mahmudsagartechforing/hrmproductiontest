import Navigation from './../Shared/Navigation/Navigation';
import { Main } from './../hooks/Main';
import FilterQuestions from './FilterQuestions/FilterQuestions';
const Apply = () => {
    return (
        <>
            <Navigation />
            <Main>
                <h3>Apply to the job</h3>
                <FilterQuestions />
            </Main>
        </>
    )
}

export default Apply
