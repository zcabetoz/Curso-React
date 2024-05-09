import propTypes from 'prop-types'

export const PrimerComponente = ({tittle, subtittle}) => {
    return (
        <>
            <h1>{tittle}</h1>
            <h1>{subtittle}</h1>
        </>
    )
}

PrimerComponente.propTypes = {
    tittle : propTypes.string.isRequired,
    subtittle : propTypes.number.isRequired
}



