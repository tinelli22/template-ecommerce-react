import { StateAction, IAppState  } from './state'

const toggleNavigationAction = (state: IAppState, action: StateAction): IAppState => {
    const navigation = state.navigation === 'closed' ? 'opened' : 'closed';

    return {
        ...state,
        navigation
    }
}

export default {
    toggleNavigationAction
}