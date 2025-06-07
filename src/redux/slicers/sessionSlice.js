import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: "session",
    initialState: {
        customer: undefined,
        dataSource: [],
        knowledgeBase: [],
        chatHistory: [],
        resultData: [],
        tableExplantation: ""
    },
    reducers: {
        setStateField: (state, action) => {
            const { key, value } = action.payload;
            if (key in state) {
                state[key] = value;
            }
        },
        addChat: (state, action) => {
            state.chatHistory.push(action.payload);
        },
        setResultData: (state, action) => {
            state.resultData = action.payload;
        },
        setDataSource: (state, action) => {
            state.dataSource = action.payload;
        },
        setCustomer: (state, action) => {
            state.customer = action.payload;
        },
        resetSession: (state, action) => {
            return {
                customer: undefined,
                dataSource: [],
                chatHistory: [],
                resultData: [],
            }
        },
        setTableExplantation: (state, action) => {
            state.tableExplantation = action.payload;
        },
        setKnowledgeBase: (state, action) => {
            state.knowledgeBase = action.payload;
        }
    }
})

export const { setStateField, addChat, setResultData, setDataSource, setCustomer, setChart, resetSession, setTableExplantation, setKnowledgeBase } = sessionSlice.actions;