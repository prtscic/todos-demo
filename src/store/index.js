import useTodoStore from './modules/todos'
import useFilterStore from './modules/filter'
export default () => {
    return {
        todos:useTodoStore(),
        filter:useFilterStore()
    }
}