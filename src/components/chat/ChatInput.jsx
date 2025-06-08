import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { invokeGraph } from "../../api/invoke";
import { addChat, setCustomer, setResultData, setTableExplantation } from "../../redux/slicers/sessionSlice";
import { setPending } from "../../redux/slicers/pendingSlice";

export const ChatInput = (props) => {
    const [userQuestion, setUserQuestion] = useState("");
    
    const dispatch = useDispatch();
    const session = useSelector(state => state.session);
    const pending = useSelector(state => state.pending.pending);

    const invoke = async (e) => {
        if (pending || userQuestion.trim() === "") return;          
        
        dispatch(setPending(true));

        e.preventDefault();

        const data = {
            user_question: userQuestion,
            data_source: session.dataSource,
            knowledge_base: session.knowledgeBase,
            chat: session.chatHistory,
        }

        const response = await invokeGraph(data);

        const chat = {
            user: response.data.user_question,
            assistant: response.data.answer,
            chart: response.data.chart,
            table: response.data.data_result
        };

        if (response.data.customer_specification){
            dispatch(setCustomer(response.data.customer));
        }

        if (response.data.table_explantation && response.data.table_explantation != ""){
            dispatch(setTableExplantation(response.data.table_explantation))
        }

        dispatch(addChat(chat));
        dispatch(setResultData(response.data.data_result));

        dispatch(setPending(false));
        setUserQuestion("");
    }

    console.log(session.chatHistory);

    return (
        <div>
            <form onSubmit={invoke}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ask Something"
                        aria-describedby="button-addon2"
                        onChange={e => setUserQuestion(e.target.value)}
                        value={userQuestion}
                    />
                    <button className="btn btn-dark" type="submit" id="button-addon2" disabled={pending}>
                        {pending ? (
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : (
                            "Send"
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}