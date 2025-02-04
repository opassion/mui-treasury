import React from 'react';
import MomentUtils from '@date-io/moment';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker as TimePicker,
  KeyboardDatePicker as DatePicker,
  DateTimePicker,
} from '@material-ui/pickers';

import theme from './lib/theme';

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => (
  <MaterialThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      {children}
    </MuiPickersUtilsProvider>
  </MaterialThemeProvider>
);

export { ThemeProvider, theme, DatePicker, TimePicker, DateTimePicker };

export * from '@material-ui/core';
export { Visibility, VisibilityOff } from '@material-ui/icons';

export { default as Button } from './lib/PeaButton';
export { default as Icon } from './lib/PeaIcon';
export { default as Avatar } from './lib/PeaAvatar';
export { default as MenuItem } from './lib/PeaMenuItem';
export { default as Statistic } from './lib/PeaStatistic';
export { default as Tag } from './lib/PeaTag';
export { default as SearchInput } from './lib/PeaSearchInput';
export { default as TextArea } from './lib/PeaTextArea';
export { default as Radio } from './lib/PeaRadio';
export { default as Switch } from './lib/PeaSwitch';
export { default as Counter } from './lib/PeaCounter';
export { default as CategoryToggle } from './lib/PeaCategoryToggle';
export { default as PersonListItem } from './lib/PeaPersonListItem';
export { default as PeopleList } from './lib/PeaPeopleList';
export { default as EventCardSmall } from './lib/PeaEventCardSmall';
export { default as CardActions } from './lib/PeaCardActions';
export { default as ProfileCard } from './lib/PeaProfileCard';
export { default as NotificationItem } from './lib/PeaNotificationItem';
export { default as Confirmation } from './lib/PeaConfirmation';
export { default as InvitationDialog } from './lib/PeaInvitationDialog';
export { default as GroupDialog } from './lib/PeaGroupDialog';
export { default as PodDialog } from './lib/PeaPodDialog';
export { default as Register } from './lib/PeaRegister';
export { default as PodCard } from './lib/PeaPodCard';
export { default as PersonCard } from './lib/PeaPersonCard';
export { default as Slider } from './lib/PeaSlider';
export { default as EventDialog } from './lib/PeaEventDialog';
export { default as EventFilters } from './lib/PeaEventFilters';
export { default as UserFilters } from './lib/PeaUserFilters';
export { default as AppBar } from './lib/PeaAppBar';
export { default as Connections } from './lib/PeaConnections';
export { default as SocialAvatar } from './lib/PeaSocialAvatar';
export { default as Typography } from './lib/PeaTypography';
export { default as FullProfileOld } from './lib/PeaFullProfileOld';
export { default as FullProfile } from './lib/PeaFullProfile';
export { default as UserCard } from './lib/PeaUserCard';
export { default as GroupProfile } from './lib/PeaGroupProfile';
export { default as GroupCard } from './lib/PeaGroupCard';
export { default as EventCard } from './lib/PeaEventCard';
export { default as Chat } from './lib/PeaChat';
export { default as MediaUploader } from './lib/PeaMediaUploader';
export { default as AccountProfile } from './lib/PeaAccountProfile';
export { default as ThreadTitle } from './lib/PeaThreadTitle';
export { default as ThreadHeader } from './lib/PeaThreadHeader';
export { default as MessageInput } from './lib/PeaMessageInput';
export { default as TrendingHashtagList } from './lib/PeaTrendingHashtagList';
export { default as Toast } from './lib/PeaToast';
export { default as SwipeableTabs } from './lib/PeaSwipeableTabs';
export { default as LoadingSpinner } from './lib/PeaLoadingSpinner';
export { default as ImageCarousel } from './lib/PeaImageCarousel';
export { default as EventDetails } from './lib/PeaEventDetails';
export { default as Tooltip } from './lib/PeaTooltip';
export { default as AutocompleteList } from './lib/PeaAutocompleteList';
export { default as UserSettings } from './lib/PeaUserSettings';
export { default as ShareContent } from './lib/PeaShareContent';
