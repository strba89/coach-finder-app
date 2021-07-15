import { firestoreAction } from 'vuexfire'
import {coachCollection,messagesCollection} from '../firebase/firebase.utils'
export default {
    filter(context,payload){
       context.commit('filter',payload)
    },
    filterCategory(context,payload){
        context.commit('filterCategory',payload)
    },
    bindCoachesRef:  firestoreAction(  async context => {
        try {
            return await context.bindFirestoreRef('coaches', coachCollection)
        }catch (err){
            console.log(err)
        }
    }),
    addCoachesMessageRef: firestoreAction(async ({ state }, payload) => {
        await messagesCollection.add(payload);
        console.log(state);
    }),
    bindMessageRef:  firestoreAction(  context => {
        return context.bindFirestoreRef('messages', messagesCollection)
    }),
}