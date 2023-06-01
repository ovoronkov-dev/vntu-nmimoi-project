import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Fragment, useState } from 'react';
import { Data_Entity } from '../common/types';
import {
  BUILD_TYPE_LABELS,
  COFFEE_TYPE_LABELS,
  CONTROL_TYPE_LABELS,
  DRINK_TYPE_LABELS,
  USE_TYPE_LABELS,
} from '../common/constants';

export interface Props {
  data: Data_Entity[];
}

export const MachinesListView = ({ data }: Props) => {
  const [currentItem, setCurrentItem] = useState<Data_Entity | null>(null);

  const createClickHandler = (item: Data_Entity) => () => setCurrentItem(item);

  const handleClearItem = () => setCurrentItem(null);

  return (
    <Paper sx={{ p: 2, width: '100%' }}>
      <Typography variant="h5" align="center">
        Список кавових машин
      </Typography>

      <Divider sx={{ width: 200, my: 3, mx: 'auto' }} />

      <Grid container wrap="wrap" spacing={2}>
        {data.map((item) => (
          <Grid item xs={4} key={item.name} sx={{ height: '100%' }}>
            <Paper sx={{ height: '100%' }}>
              <Box display="flex" p={1}>
                <Box flex={1}>
                  <img
                    src={item.imageUrl}
                    title={item.name}
                    alt={item.name}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Box>
                <Box flex={3} ml={1}>
                  <Typography variant="body1">
                    <strong>{item.name}</strong>
                  </Typography>

                  <Typography variant="body2" color="error">
                    <strong>${item.attributes.price}</strong>
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 1 }}
                    onClick={createClickHandler(item)}
                  >
                    Деталі
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}

        {currentItem && (
          <Dialog open onClose={handleClearItem}>
            <DialogContent>
              <Box display="flex" p={1}>
                <Box flex={1}>
                  <img
                    src={currentItem.imageUrl}
                    title={currentItem.name}
                    alt={currentItem.name}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Box>
                <Box flex={3} ml={1}>
                  <Typography variant="body1">
                    <strong>{currentItem.name}</strong>
                  </Typography>

                  <Typography variant="body2" color="error">
                    <strong>Ціна: ${currentItem.attributes.price}</strong>
                  </Typography>

                  <Grid container wrap="wrap" spacing={1} sx={{ mt: 1 }}>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Бренд: <strong>{currentItem.attributes.brand}</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Тип кави:{' '}
                        <strong>
                          {
                            COFFEE_TYPE_LABELS[
                              currentItem.attributes.coffeeType
                            ]
                          }
                        </strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Види напоїв:{' '}
                        <strong>
                          {DRINK_TYPE_LABELS[currentItem.attributes.drinkTypes]}
                        </strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Об'єм води, л:{' '}
                        <strong>{currentItem.attributes.waterVolume}</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Тип конструкції:{' '}
                        <strong>
                          {BUILD_TYPE_LABELS[currentItem.attributes.buildType]}
                        </strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Сфера використання:{' '}
                        <strong>
                          {USE_TYPE_LABELS[currentItem.attributes.fieldOfUse]}
                        </strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Тиск пари, Бар:{' '}
                        <strong>{currentItem.attributes.vaporPressure}</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Потужність, Вт:{' '}
                        <strong>{currentItem.attributes.power}</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        Тип керування:{' '}
                        <strong>
                          {
                            CONTROL_TYPE_LABELS[
                              currentItem.attributes.controlType
                            ]
                          }
                        </strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </DialogContent>
          </Dialog>
        )}
      </Grid>
    </Paper>
  );
};
