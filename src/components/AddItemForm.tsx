import React, { ChangeEvent, KeyboardEvent, useState } from "react";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {
    let [value, setValue] = useState("");
    let [error, setError] = useState<string | null>(null)

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    let addItem = () => {
        if(value.trim() !== ""){
            props.addItem(value);
            setValue("");
        } else {
            setError("Title is required!")
        }
    }

    let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if(e.charCode === 13) {
            addItem();
        }
    }

    return(
        <div>
            <input
            value={value}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            className={error ? "error" : ""}/>
            <button onClick={addItem}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}

export default AddItemForm;