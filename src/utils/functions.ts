
// Get value from environment file
export const getEnv = (key : string) => import.meta.env[key]

// Example
export const caseSentence = (text : string) => text.trim().toUpperCase().slice(0,1) + text.trim().toUpperCase().slice(1)
// EXAMPLE
export const caseUpper = (text : string) => text.trim().toUpperCase()
// example
export const caseLower = (text : string) => text.trim().toLowerCase()