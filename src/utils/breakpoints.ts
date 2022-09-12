const Breakpoints = {
    mobile: 479,
    mobile_landscape: 767,
    tablet: 991,
    large: 1200
} as const

export type BreakpointType = typeof Breakpoints[keyof typeof Breakpoints];

export const getWith = () => {
    return typeof window !== 'undefined' && window.innerWidth;
}

export default Breakpoints