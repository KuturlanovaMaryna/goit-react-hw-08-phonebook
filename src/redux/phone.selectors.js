import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilterInput = state => state.contacts.filterInput;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterInput],
  (contacts, filterInput) =>
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterInput);
    })
);