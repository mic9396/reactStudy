import React from "react";
import * as todoSeed from "./todoSeeds";

export function Todos(props: {info: todoSeed.ITodo; changeCheck: (newCheck: boolean, id: number) => void}) {
    console.log(props.info.due);
    return (
        <div>
            <label>
            <input checked={props.info.checked} type="checkbox" onChange={(e) => {
                props.changeCheck(e.target.checked, props.info.id);
            }}/>
            {props.info.important === true
                ? <b>{props.info.title}</b>
                : props.info.title
            } - {props.info.content}
            {props.info.checked === true
                ? " - 끝!"
                : " - 진행중!"
            }
            {props.info.due === undefined ? "" : "(" + props.info.due.toDateString() + ")"}
            </label>
        </div>
    );
}
