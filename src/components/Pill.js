import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';

export default function Pill({handleAdd, suggestion}) {
  return (
    <Chip
      className="trademark-item"
      sx={{marginRight: "8px", marginBottom: "8px"}}
      onClick={() => handleAdd(suggestion)}
      label={suggestion.name}
      size="small"
      icon={<AddIcon />}
    />
  );
}
