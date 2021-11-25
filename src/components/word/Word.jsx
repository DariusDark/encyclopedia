import './word.css';

function Word({ match: { params: { word } } }) {
    return (
        <div className="word">
            <h2 className="word__title">word</h2>
            <p className="word__description">Word description Word description Word descriptionWord descriptionWord descriptionWord description Word descriptionWord description Word description</p>
        </div>
    )
}

export default Word
