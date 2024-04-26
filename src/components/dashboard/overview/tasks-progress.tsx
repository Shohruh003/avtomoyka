import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export interface TasksProgressProps {
  sx?: SxProps;
  value: number;
}

export function TasksProgress({ sx }: TasksProgressProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline" fontSize={20}>
              Всего  посетителей за месяц - 1000
              </Typography>
              <Typography color="text.secondary" variant="overline" fontSize={20}>
              Всего  посетителей за день - 400
              </Typography>
              <Typography color="text.secondary" variant="overline" fontSize={20}>
              Из них :
              </Typography>
              <Typography sx={{marginLeft: '10px'}} color="text.secondary" variant="overline" fontSize={20}>
              Полная мойка - 350
              </Typography>
              <Typography sx={{marginLeft: '10px'}} color="text.secondary" variant="overline" fontSize={20}>
              Чистка салона - 200
              </Typography>
              <Typography sx={{marginLeft: '10px'}} color="text.secondary" variant="overline" fontSize={20}>
              Средня продолжительность - 15 мин
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
