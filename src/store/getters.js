export default {
    coach(state){
        return state.selectedCoach
    },
    filterCoach: (state) => {
        if(state.selectedCoachByCategory){
            return state.selectedCoachByCategory
        }
            return state.coaches
    }
}