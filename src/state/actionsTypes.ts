const ActionsType = {
   TOGGLE_NAVIGATION: 'TOGGLE_NAVIGATION' 
} as const

export type ActionType = typeof ActionsType[keyof typeof ActionsType];

export default ActionsType