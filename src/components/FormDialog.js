import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { Button, Flex, TextField, View } from "@aws-amplify/ui-react";

export default function FormDialog({
  handleClickOpen,
  handleClose,
  open,
  createNote,
}) {
  return (
    <React.Fragment>
      <Button variation="primary" onClick={handleClickOpen}>
        Create Application
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Create Application</DialogTitle>
        <View as="form" onSubmit={createNote}>
          <DialogContent>
            <Flex direction="column" justifyContent="left">
              <TextField
              size="small"
                name="trademarkType"
                placeholder="trademarkType"
                required
              />
              <TextField
              size="small"

                name="trademarkText"
                placeholder="trademarkText"
                required
              />
              <TextField size="small" name="ownerType" placeholder="ownerType" />
              <TextField size="small" name="ownerName" placeholder="ownerName" />
              <TextField size="small" name="abnAcn" placeholder="abnAcn" />
              <TextField size="small" name="email" placeholder="email" />
              <TextField size="small" name="phone" placeholder="phone" />
              <TextField size="small" name="address1" placeholder="address1" />
              <TextField size="small" name="suburb" placeholder="suburb" />
              <TextField size="small" name="postcode" placeholder="postcode" />
              <TextField size="small" name="state" placeholder="state" />
              <TextField size="small" name="country" placeholder="country" />
              <View

                name="trademarkLogo"
                as="input"
                type="file"
                style={{ alignSelf: "start" }}
              />
            </Flex>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variation="primary">
              Submit
            </Button>
          </DialogActions>
        </View>
      </Dialog>
    </React.Fragment>
  );
}
