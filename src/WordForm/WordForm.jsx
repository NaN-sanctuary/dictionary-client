import "./WordForm.css";
function WordForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const word = formData.get("word");
        const definition = formData.get("definition");
        console.log("Слово:", word);
        console.log("Значення:", definition);
        // Implement your logic to save the new word and definition here
        // You can send an API request to a server or update a local data store
    };

    return (
        <form onSubmit={handleSubmit}>
            <div id="descr">
                <p> Діліться тлумаченнями які інші люди знайдуть значущими.</p>
            </div>
            <input type="text" id="word" name="word" placeholder="Слово" required />

            <textarea id="definition" name="definition" placeholder="Напишіть тлумачення" required></textarea>

            <textarea id="example" name="example" placeholder="Напишіть приклад як це можна вжити у реченні" required></textarea>

            <button type="submit">ВІДПРАВИТИ</button>
        </form>
    );
}

export default WordForm;
