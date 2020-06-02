import React, {useState} from "react";

export interface InterfaceAddData {
    title: string;
    content: string;
    important: boolean;
}

export function AddTodo(props: {addTodoData: (newState: InterfaceAddData) => void}) {
    const [newState, setNewState] = useState<InterfaceAddData>({
        title: "",
        content: "",
        important: false,
    });

    return (<>
        <form>
            <div>
                제목 :
                <input value={newState.title} type="text" onChange={(e) => {
                    setNewState({
                        ...newState,
                        title: e.target.value,
                    });
                }}/>
            </div>
            <div>
                내용 :
                <textarea value={newState.content} onChange={(e) => {
                    setNewState({
                        ...newState,
                        content: e.target.value,
                    });
                }}/>
            </div>
            <div>
                중요도 :
                <input type="checkbox" checked={newState.important} onChange={(e) => {
                    setNewState({
                        ...newState,
                        important: e.target.checked,
                    });
                }}/>
            </div>
            <div>
                <input type="button" value="제출" onClick={() => {
                    if (newState.title === "") {
                        alert("제목입력하세요");
                        return;
                    } else if (newState.content === "") {
                        alert("내용입력하세요");
                        return;
                    }

                    props.addTodoData(newState);
                    setNewState({
                        title: "",
                        content: "",
                        important: false,
                    });
                }}/>
            </div>
        </form>
    </>);
}
