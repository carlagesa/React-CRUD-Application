import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function LetterAvatars() {
  return (
    <Stack direction="row" float="right" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    </Stack>
  );
}
