interface Props {
    sentence: string;
}

const TextApparition = ({ sentence } : Props) => {
    return(
        <div>
            <p>{sentence}</p>
        </div>
    )
}
export default TextApparition;