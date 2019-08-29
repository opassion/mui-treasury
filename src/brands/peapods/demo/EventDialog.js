/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from 'components/atoms/Box';
import PeaEventDialog from '../lib/PeaEventDialog';

import peaActivism from '../lib/assets/pea_activism.png';
import peaArtAndCulture from '../lib/assets/pea_art-and-culture.png';
import peaCommunity from '../lib/assets/pea_community.png';
import peaFood from '../lib/assets/pea_food.png';
import peaGaming from '../lib/assets/pea_gaming.png';
import peaHobbie from '../lib/assets/pea_hobbie.png';
import peaLearning from '../lib/assets/pea_learning.png';
import peaMovie from '../lib/assets/pea_movie.png';
import peaMusic from '../lib/assets/pea_music.png';
import peaNetworking from '../lib/assets/pea_networking.png';
import peaOutdoor from '../lib/assets/pea_outdoor.png';
import peaSpirituality from '../lib/assets/pea_spirituality.png';
import peaSport from '../lib/assets/pea_sport.png';
import peaVolunteering from '../lib/assets/pea_volunteering.png';

const initialData = {
  title: '',
  categories: [
    { image: peaActivism, label: 'Activism', checked: false },
    { image: peaArtAndCulture, label: 'Art & Culture', checked: false },
    { image: peaCommunity, label: 'Community', checked: false },
    { image: peaFood, label: 'Food', checked: false },
    { image: peaGaming, label: 'Gaming', checked: false },
    { image: peaHobbie, label: 'Hobbie', checked: false },
    { image: peaLearning, label: 'Learning', checked: false },
    { image: peaMovie, label: 'Movie', checked: false },
    { image: peaMusic, label: 'Music', checked: false },
    { image: peaNetworking, label: 'Networking', checked: false },
    { image: peaOutdoor, label: 'Outdoor', checked: false },
    { image: peaSpirituality, label: 'Spirituality', checked: false },
    { image: peaSport, label: 'Sport', checked: false },
    { image: peaVolunteering, label: 'Volunteering', checked: false },
  ],
  description: '',
  hashtags: '',
  date: '',
  time: '',
  privateEvent: false,
  invitingGuests: '',
  price: 0,
};

const EventDialog = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null);
  const [eventData, setEventData] = useState(initialData);

  function openModal(modalType = 'create') {
    if (modalType === 'create') {
      setEventData(initialData);
    }
    setOpen(true);
    setType(modalType);
  }

  function closeModal() {
    setOpen(false);
    setType(null);
  }

  function okModal(data) {
    alert(`${type}d successfully`);
    console.log('data ==>', data);
    closeModal();
  }

  return (
    <>
      <Box flex={1} flexDirection={'column'} justifyContent={'center'}>
        <Button fullWidth onClick={() => openModal('create')}>
          Create Event
        </Button>
        <Button fullWidth onClick={() => openModal('update')}>
          Update Event
        </Button>
        <Button fullWidth onClick={() => openModal('delete')}>
          Delete Event
        </Button>
      </Box>
      <PeaEventDialog
        open={open}
        onClose={closeModal}
        type={type}
        eventData={eventData}
        onOk={okModal}
      />
    </>
  );
};

EventDialog.metadata = {
  name: 'Pea EventDialog',
};
EventDialog.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
EventDialog.code = `
  /* eslint-disable no-console */
  /* eslint-disable no-alert */
  /* eslint-disable max-len */
  import React, { useState } from 'react';
  import Button from '@material-ui/core/Button';
  import Box from 'components/atoms/Box';
  import PeaEventDialog from '../lib/PeaEventDialog';

  import peaActivism from '../lib/assets/pea_activism.png';
  import peaArtAndCulture from '../lib/assets/pea_art-and-culture.png';
  import peaCommunity from '../lib/assets/pea_community.png';
  import peaFood from '../lib/assets/pea_food.png';
  import peaGaming from '../lib/assets/pea_gaming.png';
  import peaHobbie from '../lib/assets/pea_hobbie.png';
  import peaLearning from '../lib/assets/pea_learning.png';
  import peaMovie from '../lib/assets/pea_movie.png';
  import peaMusic from '../lib/assets/pea_music.png';
  import peaNetworking from '../lib/assets/pea_networking.png';
  import peaOutdoor from '../lib/assets/pea_outdoor.png';
  import peaSpirituality from '../lib/assets/pea_spirituality.png';
  import peaSport from '../lib/assets/pea_sport.png';
  import peaVolunteering from '../lib/assets/pea_volunteering.png';

  const initialData = {
    title: '',
    categories: [
      { image: peaActivism, label: 'Activism', checked: false },
      { image: peaArtAndCulture, label: 'Art & Culture', checked: false },
      { image: peaCommunity, label: 'Community', checked: false },
      { image: peaFood, label: 'Food', checked: false },
      { image: peaGaming, label: 'Gaming', checked: false },
      { image: peaHobbie, label: 'Hobbie', checked: false },
      { image: peaLearning, label: 'Learning', checked: false },
      { image: peaMovie, label: 'Movie', checked: false },
      { image: peaMusic, label: 'Music', checked: false },
      { image: peaNetworking, label: 'Networking', checked: false },
      { image: peaOutdoor, label: 'Outdoor', checked: false },
      { image: peaSpirituality, label: 'Spirituality', checked: false },
      { image: peaSport, label: 'Sport', checked: false },
      { image: peaVolunteering, label: 'Volunteering', checked: false },
    ],
    description: '',
    hashtags: '',
    date: '',
    time: '',
    privateEvent: false,
    invitingGuests: '',
    price: 0,
  };

  const EventDialog = () => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(null);
    const [eventData, setEventData] = useState(initialData);

    function openModal(modalType = 'create') {
      if (modalType === 'create') {
        setEventData(initialData);
      }
      setOpen(true);
      setType(modalType);
    }

    function closeModal() {
      setOpen(false);
      setType(null);
    }

    function okModal(data) {
      alert(\`\${type}d successfully\`);
      console.log('data ==>', data);
      closeModal();
    }

    return (
      <>
        <Box flex={1} flexDirection={'column'} justifyContent={'center'}>
          <Button fullWidth onClick={() => openModal('create')}>
            Create Event
          </Button>
          <Button fullWidth onClick={() => openModal('update')}>
            Update Event
          </Button>
          <Button fullWidth onClick={() => openModal('delete')}>
            Delete Event
          </Button>
        </Box>
        <PeaEventDialog
          open={open}
          onClose={closeModal}
          type={type}
          eventData={eventData}
          onOk={okModal}
        />
      </>
    );
  };
`;

export default EventDialog;
