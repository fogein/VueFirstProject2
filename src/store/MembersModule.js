
export default ({
  state: {
    members: [
      { id: 1, name: "Vlad", surname: 'Pavlov', patronymic: 'Andreev', position: 'Frontend dev', laborBook: true, salary: 40000, dateOfEntry: '16.07.2019', rate: false },
      { id: 2, name: "Alisa", surname: 'Pavlovich', patronymic: 'Ivanova', position: 'Backend dev', laborBook: false, salary: 40000, dateOfEntry: '16.07.2019', rate: false },
      { id: 3, name: "Frank", surname: 'Ierus', patronymic: 'Ivanovich', position: 'Fullstack dev', laborBook: true, salary: 40000, dateOfEntry: '16.07.2019', rate: false },
      { id: 4, name: "Eugen", surname: 'Aurus', patronymic: 'Alexeev', position: 'C# dev', laborBook: true, salary: 40000, dateOfEntry: '16.07.2019', rate: true },
    ],
    dialogVisible: false,
    currentMember: {}
  },
  mutations: {
    showDialog(state) {
      state.dialogVisible = true
    },
    hideDialog(state) {
      state.dialogVisible = false
    },
    setCurrentMember(state, payload) {
      state.currentMember = payload
    },
    newMember(state, payload) {
     state.members.push({ id: Date.now(), name: payload.name, surname: payload.surname, patronymic: payload.patronymic, position: payload.position, laborBook: true, salary:payload.salary, dateOfEntry: payload.dateOfEntry, rate: false})
     debugger
    }
    
  },
  getters: {
    getAllMembers(state) {
      return state.members


    },
    getDialogVisible: (state) => state.dialogVisible,
    getCurrentMember: (state) => state.currentMember
  },
  actions: {},
})