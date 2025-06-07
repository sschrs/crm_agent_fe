import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSession } from "../../redux/slicers/sessionSlice";

export const NewChatButton = () => {
    const session = useSelector(state => state.session);
    const dispatch = useDispatch()

    return (
        <button className="btn btn-outline-secondary w-100 h-100" onClick={e => {dispatch(resetSession())}}>
            New Chat
        </button>
    )
}