// import { API, Storage } from "aws-amplify";
// import { listNotes } from "../graphql/queries";
// import {
//   createNote as createNoteMutation,
//   deleteNote as deleteNoteMutation,
// } from "../graphql/mutations";

import axios from "axios";

export const getApplications = async () => {
  try {
    const url = "https://localhost:7043/api/Applications";
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const postApplication = async (payload) => {
  try {
    const url = "https://localhost:7043/api/Applications";
    const response = await axios.post(url, payload);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// export async function fetchNotesService() {
//   const apiData = await API.graphql({ query: listNotes });
//   const notesFromAPI = apiData.data.listNotes.items;
//   await Promise.all(
//     notesFromAPI.map(async (note) => {
//       if (note.tradeMarkLogo) {
//         const url = await Storage.get(note.trademarkText);
//         note.tradeMarkLogo = url;
//       }
//       return note;
//     })
//   );
//   setNotes(notesFromAPI);
// }

// export async function createNoteService(event) {
//   if (!!data.tradeMarkLogo)
//     await Storage.put(data.trademarkText, tradeMarkLogo);
//   await API.graphql({
//     query: createNoteMutation,
//     variables: { input: data },
//   });
//   fetchNotes();
//   event.target.reset();
//   setOpen(false);
// }

// export async function deleteNoteService({ id, name }) {
//   await Storage.remove(name);
//   await API.graphql({
//     query: deleteNoteMutation,
//     variables: { input: { id } },
//   });
// }