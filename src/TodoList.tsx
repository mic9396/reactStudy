import React, {useState} from "react";
import { AddTodo, InterfaceAddData } from "./AddTodo";
import {Todos} from "./Todos";
import * as todoSeed from "./todoSeeds";

export function TodoList() {
    const [state, setState] = useState<todoSeed.ITodo[]>([
        ...todoSeed.seeds,
    ]);

    const changeCheck = (newCheck: boolean, id: number) => {
        const newState = state;
        newState.splice((id-1), 1, {
            ...state[id-1],
            checked : newCheck,
        });
        setState([
            ...newState
        ]);
    };

    const addTodoHandler = (newState: InterfaceAddData) => {
        const makeNewState = [...state, {
            id: ++state.length,
            ...newState,
            createdAt: new Date,
            updatedAt: new Date,
            checked: false,
        }];

        setState(makeNewState);
    };

    return <>
        <div>
            {state.map((info) => <Todos info={info} changeCheck={changeCheck} key={info.id}/>)}
        </div>
        <hr/>
        <div>
            <AddTodo addTodoData={addTodoHandler}/>
        </div>
    </>;
}
