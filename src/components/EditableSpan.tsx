import { TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

const EditableSpan = React.memo((props: EditableSpanPropsType) => {
    console.log("EditableSpan");
    
    let [editMode, setEditMode] = useState<boolean>(false);
    let [title, setTitle] = useState<string>(props.value)
    function doubleClickHandler() {
        setEditMode(true);
    }

    function activateViewMode() {
        setEditMode(false)
        props.onChange(title);
    }
    
    function changeTitle(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value);
    }

    return(
        editMode ? <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/> :
        <span onDoubleClick={doubleClickHandler}>{props.value}</span>
    )
});
export default EditableSpan;