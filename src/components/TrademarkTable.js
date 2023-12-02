import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Button,
  Image,
} from "@aws-amplify/ui-react";

export const TrademarkTable = ({ notes, deleteNote }) => (
  <Table size="small" variation="bordered">
    <TableHead>
      <TableRow>
        {/* <TableCell as="th">Id</TableCell> */}
        <TableCell as="th">Trademark Type</TableCell>
        <TableCell as="th">Trademark Text</TableCell>
        <TableCell as="th">Owner Type</TableCell>
        <TableCell as="th">Owner Name</TableCell>
        <TableCell as="th">ABN/ACN</TableCell>
        <TableCell as="th">Email</TableCell>
        <TableCell as="th">Phone</TableCell>
        <TableCell as="th">Address1</TableCell>
        <TableCell as="th">Suburb</TableCell>
        <TableCell as="th">Postcode</TableCell>
        <TableCell as="th">State</TableCell>
        <TableCell as="th">Country</TableCell>
        <TableCell as="th">Logo</TableCell>
        <TableCell as="th">Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {notes.map((note) => (
        <TableRow key={note.id}>
          {/* <TableCell>{note.id}</TableCell> */}
          <TableCell>{note.trademarkType}</TableCell>
          <TableCell>{note.trademarkText}</TableCell>
          <TableCell>{note.ownerType}</TableCell>
          <TableCell>{note.ownerName}</TableCell>
          <TableCell>{note.abnAcn}</TableCell>
          <TableCell>{note.email}</TableCell>
          <TableCell>{note.phone}</TableCell>
          <TableCell>{note.address1}</TableCell>
          <TableCell>{note.suburb}</TableCell>
          <TableCell>{note.postcode}</TableCell>
          <TableCell>{note.state}</TableCell>
          <TableCell>{note.country}</TableCell>
          <TableCell>
            {note.trademarkLogo && (
              <Image
                src={note.trademarkLogo}
                alt={`visual aid for ${notes.trademarkText}`}
                style={{ width: 400 }}
              />
            )}
          </TableCell>
          <TableCell>
            <Button size="small">Edit</Button>
            <Button size="small" variation="link" onClick={() => deleteNote(note)}>
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
