import {IconButton, TextField } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    console.log("Add Item Form");
    
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
        if(error !== null) {
            setError(null)
        }
        if(e.charCode === 13) {
            addItem();
        }
    }

    return(
        <div>
            <TextField variant="outlined"
            value={value}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            error={!!error}
            label="Title"
            helperText={error}/>
            {/* <Button variant="contained" color="primary" onClick={addItem}>+</Button> */}
            <IconButton color="primary" onClick={addItem}>
                <AddBox/>
            </IconButton>
        </div>
    )
})

export default AddItemForm;