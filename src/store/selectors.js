import { createSelector } from "@reduxjs/toolkit";

export const selectGetEvents = (state) => state.events.items;
export const selectGetFilter = (state) => state.events.filter;
export const selectGetParticipants = (state) => state.events.participants;
export const selectIsLoading = (state) => state.events.isLoading;
export const selectError = (state) => state.events.error;
export const selectGetParticipantsFilter = (state) =>
  state.events.participantsFilter;
export const selectVisibleEvents = createSelector(
  selectGetEvents,
  selectGetFilter,
  (events, filter) => {
    switch (filter) {
      case "AtoZ":
        return events.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "ZtoA":
        return events.slice().sort((a, b) => b.title.localeCompare(a.title));
      case "organizer":
        return events
          .slice()
          .sort((a, b) => a.organizer.localeCompare(b.organizer));
      case "eventDate":
        return events
          .slice()
          .sort((a, b) => new Date(a.event_date) - new Date(b.event_date));
      case "showAll":
      default:
        return events;
    }
  }
);
export const selectVisibleParticipants = createSelector(
  [selectGetParticipants, selectGetParticipantsFilter],
  (participants, filter) => {
    if (!participants.length) {
      return [];
    }
    return participants.filter(
      (participants) =>
        participants.name.toLowerCase().includes(filter.toLowerCase()) ||
        participants.email.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
