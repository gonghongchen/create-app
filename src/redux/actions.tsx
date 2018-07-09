const actions = {
    add(description: string = 'add') {
        return {type: 'ADD', description}
    },
    reduce(description: string = 'reduce') {
        return {type: 'REDUCE', description}
    },
    modifyWord(description: string = 'modify word') {
        return {type: 'MODIFY_WORD', description}
    }
}

export default actions