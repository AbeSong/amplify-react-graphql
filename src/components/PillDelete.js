import Chip from '@mui/material/Chip';

export default function PillDelete({handleRemove, suggestion}) {
  return (
    <Chip
      className="trademark-item"
      sx={{marginRight: "8px", marginBottom: "8px"}}
      onDelete={() => handleRemove(suggestion)}
      onClick={() => handleRemove(suggestion)}
      label={suggestion.name}
      size="small"
    />
  );
}
