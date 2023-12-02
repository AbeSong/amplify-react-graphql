import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import {
  Flex,
  Heading,
  View,
  withAuthenticator,
  Menu,
  MenuItem,
  Divider,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import { TrademarkTable } from "./components/TrademarkTable";
import AppHeaderAdmin from "./AppHeaderAdmin";
import FormDialog from "./components/FormDialog";
// import {fetchNotes, createNote, deleteNote} from "./services/service.js"

const AppAdmin = ({ signOut }) => {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.trademarkLogo) {
          const url = await Storage.get(note.trademarkText);
          note.trademarkLogo = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const formEntries = Object.fromEntries(form);
    const trademarkLogo = form.get("trademarkLogo");
    const data = { ...formEntries, trademarkLogo: trademarkLogo.name };
    if (!!data.trademarkLogo)
      await Storage.put(data.trademarkText, trademarkLogo);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
    setOpen(false);
  }

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (_event, reason) => {
    if (reason === "backdropClick") return;
    setOpen(false);
  };

  return (
    <View className="App">
      <AppHeaderAdmin signOut={signOut} />
      <Flex justifyContent="space-between" margin={"0 24px"}>
        <Heading level={2}>Trademark Applications</Heading>
        <Flex>
          <Menu>
            <MenuItem onClick={handleClickOpen}>Create</MenuItem>
            <Divider />
            <MenuItem isDisabled onClick={() => alert("In progress")}>
              Download
            </MenuItem>
          </Menu>
          <FormDialog
            createNote={createNote}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
          />
        </Flex>
      </Flex>
      <Flex padding={"24px"}>
        <TrademarkTable notes={notes} deleteNote={deleteNote} />
      </Flex>
    </View>
  );
};

export default withAuthenticator(AppAdmin);
