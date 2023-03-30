



export default function reducer(currentState = 0, action){
    
        switch (action.type) {
            case "INC_USER":
                return currentState+1
            case "DEC_USER":
                return currentState-1
            default:
                return currentState
        }


}