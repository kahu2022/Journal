// VARIABLES

import { fetchAllJournalPosts, saveJournalEntryAPI } from "../api"

export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const SAVE_ENTRY = 'SAVE_ENTRY'

// ACTIONS

export function receiveEntries (entriesArr) {
    return {
        type: RECEIVE_ENTRIES,
        entries: entriesArr
    }
}

export function saveEntry(newEntryObj) {
    return {
        type: SAVE_ENTRY,
        entryData: newEntryObj
    }
}

// THUNK FUNCTIONS

export function getAllEntries() {
    return (dispatch) => {
        fetchAllJournalPosts()
        .then(entriesArr => {
            dispatch(receiveEntries(entriesArr))
        })
    }
}

export function addNewEntry(newEntryObj) {
    return (dispatch) => {
        saveJournalEntryAPI(newEntryObj)
        .then((entryFromDb) => {
            dispatch(saveEntry(entryFromDb))
        })
    }
}