import { CHANGE_AMOUNT, CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_SCORE, CHANGE_TYPE } from "./actionsTypes";

const initialState = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    question_amount: 50,
    score: 0
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case CHANGE_CATEGORY: 
            return {
                ...state,
                question_category: actions.payload,
            }
            case CHANGE_DIFFICULTY: 
            return {
                ...state,
                question_difficulty: actions.payload,
            }
            case CHANGE_TYPE: 
            return {
                ...state,
                question_type: actions.payload,
            }
            case CHANGE_AMOUNT: 
            return {
                ...state,
                question_amount: actions.payload,
            }
            case CHANGE_SCORE: 
            return {
                ...state,
                score: actions.payload,
            }
            default: 
                return state
    }
}

export default reducer;