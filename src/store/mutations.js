import {vuexfireMutations} from "vuexfire";

export default {
    filter(state,payload){
        state.selectedCoach = state.coaches.find(coach => coach.id === payload.value)
    },
    async filterCategory(state,payload){

        let uniq = arr => [...new Set(arr)];

        const selectedCoachByCategory = []

        for( const category of  payload.value ){

            const selectedCategory = state.coaches.filter(e =>`${e.areas}`.toUpperCase().indexOf(category.toUpperCase()) >= 0)
            selectedCoachByCategory.push(selectedCategory)
        }


        state.selectedCoachByCategory = uniq(selectedCoachByCategory.flat(1))

    },
    ...vuexfireMutations,
}