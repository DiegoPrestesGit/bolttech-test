export const defaultSequelizeErrorHandling = (res, error) => {
    console.log(error)
    if(error.name.startsWith('Sequelize')) {
        const errors = error.errors.map(e => ({
            field: e.path,
            message: e.message,
        }))
        return res.status(400).json({message: 'sequelize error', errors })
    }
    return res.status(500).json({message: 'internal server error'})
}

// DATE DEFAULT FORMAT: YYYY-MM-DD
export const validateDateFormat = (date) => {
    const pattern = /^\d{4}-\d{2}-\d{2}$/
    const isValid = pattern.test(date)

    if(!isValid) return {message: 'date is not valid, the format must be YYYY-MM-DD', valid: false}

    const [_, month, day] = date.split('-')
    if(month > 12) return {message: 'the month is bigger than 12, it must be between 1 and 12', valid: false}
    if(day > 31) return {message: 'the day is bigger than 31, it must be between 1 and 31', valid: false}

    return {message: 'date is valid', valid: true}
}

