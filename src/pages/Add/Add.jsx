import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

import './Add.css'

const Add = () => {
    const [selected, setSelected] = useState([]);
    return (
        <>
            <form>
                <input type="text" id="word" name="word" placeholder="Слово" required />
                <a>Добре опишіть значення слово щоб люди.</a>
                <input type="text" id="definition" name="definition" placeholder="Введіть ваше тлумачення тут" required />
                <input type="example" id="example" name="example" placeholder="Введіть приклади вживання тут" required />
                <pre>{JSON.stringify(selected)}</pre>
                <TagsInput
                    value={selected}
                    onChange={setSelected}
                    name="fruits"
                    placeHolder="enter fruits"
                    separators={
                        [
                            "Enter",
                            ",",
                            "."
                        ]
                    }
                />
                <em>press enter or comma to add new tag</em>
                <button type="submit">Надіслати</button>
            </form>
        </>
    )
}

export default Add;
