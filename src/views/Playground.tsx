import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Fragment, useMemo, useState } from 'react';
import { QUESTIONS } from '../common/questions';
import { Search_Question, Search_QuestionVariant } from '../common/types';
import { searchByAttributes } from '../utils';
import { MachinesListView } from './MachinesList';
import { brown } from '@mui/material/colors';

export const PlaygroundView = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [state, setState] = useState<Search_QuestionVariant[]>([]);

  const createSelectHandler = (variant: Search_QuestionVariant) => () => {
    setState((prevState) => [...prevState, variant]);
    setCurrentQuestion((prevState) => prevState + 1);
  };

  const clear = () => {
    setCurrentQuestion(0);
    setState([]);
  };

  const question = useMemo(() => QUESTIONS[currentQuestion], [currentQuestion]);

  const answer = useMemo(() => {
    if (state.length !== 10) return [];

    return searchByAttributes(state);
  }, [state]);

  return (
    <Fragment>
      {!!answer.length && (
        <Fragment>
          <MachinesListView data={answer} />

          <Button
            color="primary"
            variant="contained"
            sx={{ mt: 1 }}
            onClick={clear}
          >
            Почати спочатку
          </Button>
        </Fragment>
      )}

      {!question && !answer.length && (
        <Paper sx={{ p: 2, width: '100%' }}>
          <Alert severity="warning">
            На жаль, ми не знайшли кавової машини, яка підійшла б Вашим вимогам.
          </Alert>
        </Paper>
      )}

      {question && (
        <Paper sx={{ p: 2, width: '100%' }}>
          <Typography variant="h5" align="center">
            Питання: {QUESTIONS[currentQuestion].title}
          </Typography>

          <Divider sx={{ width: 200, my: 3, mx: 'auto' }} />

          <Grid wrap="nowrap" container spacing={2}>
            {QUESTIONS[currentQuestion].variants.map((variant) => (
              <Grid key={variant.header} item xs={6}>
                <Paper
                  sx={{
                    cursor: 'pointer',
                    borderBottom: `4px solid ${brown['400']}`,
                  }}
                  onClick={createSelectHandler(variant)}
                >
                  <Box
                    p={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography>
                      <strong>{variant.header}</strong>
                    </Typography>

                    {variant.subheader && (
                      <Typography variant="body2" color="caption">
                        ({variant.subheader})
                      </Typography>
                    )}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </Fragment>
  );
};
