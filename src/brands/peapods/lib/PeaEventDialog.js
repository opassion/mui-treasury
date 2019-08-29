/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, TimePicker } from 'material-ui-pickers';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField/TextField';
import Grid from '@material-ui/core/Grid';
import PeaDialog from './PeaDialog';
import PeaButton from './PeaButton';
import PeaSwitch from './PeaSwitch';
import PeaCategoryToggle from './PeaCategoryToggle';

const PeaEventDialog = ({ onClose, onOk, type, eventData, ...props }) => {
  const [data, setData] = useState(eventData);
  const typeLabel = type ? `${type[0].toUpperCase()}${type.slice(1)}` : '';

  useEffect(() => {
    setData(eventData);
  }, [type]);

  function changeText(event, name) {
    setData({
      ...data,
      [name]: event.target.value,
    });
  }

  function changeToggle(event, index) {
    const newCategories = data.categories;
    newCategories[index].checked = event.target.checked;
    setData({
      ...data,
      categories: newCategories,
    });
  }

  if (!data) {
    return null;
  }

  return (
    <PeaDialog
      className={'PeaEventDialog'}
      title={`${typeLabel} event`}
      content={
        <React.Fragment>
          <TextField
            fullWidth
            margin={'normal'}
            label={'Title'}
            placeholder={'Type the title of your event'}
            InputLabelProps={{
              shrink: true,
            }}
            value={data.title}
            onChange={event => changeText(event, 'title')}
          />
          <FormControl fullWidth margin={'normal'}>
            <FormLabel style={{ marginBottom: 16 }}>Category</FormLabel>
            <Grid container spacing={2}>
              {data.categories.map(({ image, label, checked }, index) => (
                <Grid key={label} item xs={4} sm={3}>
                  <PeaCategoryToggle
                    checked={checked}
                    label={label}
                    src={image}
                    onChange={event => changeToggle(event, index)}
                  />
                </Grid>
              ))}
            </Grid>
          </FormControl>
          <TextField
            multiline
            rows={3}
            classes={{
              root: 'PeaFormControl-root',
            }}
            InputLabelProps={{
              className: 'PeaFormLabel-root',
            }}
            InputProps={{
              disableUnderline: true,
              classes: {
                root: 'PeaInput-root',
                input: 'PeaInput-input',
                formControl: 'PeaInput-formControl',
              },
            }}
            FormHelperTextProps={{
              className: 'PeaFormHelperText-root',
            }}
            fullWidth
            margin={'normal'}
            label={'Description'}
            placeholder={'Type few words about your event'}
            value={data.description}
            onChange={event => changeText(event, 'description')}
          />
          <TextField
            multiline
            rows={3}
            classes={{
              root: 'PeaFormControl-root',
            }}
            InputLabelProps={{
              className: 'PeaFormLabel-root',
            }}
            InputProps={{
              disableUnderline: true,
              classes: {
                root: 'PeaInput-root',
                input: 'PeaInput-input',
                formControl: 'PeaInput-formControl',
              },
            }}
            FormHelperTextProps={{
              className: 'PeaFormHelperText-root',
            }}
            fullWidth
            margin={'normal'}
            label={'Hashtags'}
            placeholder={'#search_hashtags'}
            value={data.hashtags}
            onChange={event => changeText(event, 'hashtags')}
          />
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Date</FormLabel>
            <DatePicker />
          </FormControl>
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Time</FormLabel>
            <TimePicker />
          </FormControl>
          <FormControl margin={'normal'}>
            <FormLabel>Private event</FormLabel>
            <PeaSwitch checked />
          </FormControl>
          <TextField
            multiline
            rows={3}
            classes={{
              root: 'PeaFormControl-root',
            }}
            InputLabelProps={{
              className: 'PeaFormLabel-root',
            }}
            InputProps={{
              disableUnderline: true,
              classes: {
                root: 'PeaInput-root',
                input: 'PeaInput-input',
                formControl: 'PeaInput-formControl',
              },
            }}
            FormHelperTextProps={{
              className: 'PeaFormHelperText-root',
            }}
            fullWidth
            margin={'normal'}
            label={'Inviting guests'}
            placeholder={'Start typing name'}
            value={data.invitingGuests}
            onChange={event => changeText(event, 'invitingGuests')}
            {...props}
          />
          <TextField
            fullWidth
            margin={'normal'}
            label={'Ticket price'}
            placeholder={'Type ticket price, $'}
            InputLabelProps={{
              shrink: true,
            }}
            value={data.price}
            onChange={event => changeText(event, 'price')}
          />
        </React.Fragment>
      }
      actions={[
        <PeaButton elongated onClick={onClose}>
          Cancel
        </PeaButton>,
        <PeaButton
          elongated
          color={'primary'}
          variant={'contained'}
          onClick={() => onOk(data)}
        >
          {typeLabel}
        </PeaButton>,
      ]}
      onClose={onClose}
      {...props}
    />
  );
};

PeaEventDialog.metadata = {
  name: 'Pea Event Dialog',
  libraries: [
    {
      text: 'material-ui-pickers',
      link: 'https://material-ui-pickers.dev/getting-started/installation',
    },
  ],
};

PeaEventDialog.defaultProps = {
  eventData: null,
};

PeaEventDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  eventData: PropTypes.object,
};

export default PeaEventDialog;
