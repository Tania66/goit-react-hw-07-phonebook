import { createSelector } from '@reduxjs/toolkit';

export const getContact = state => state.contacts.items;

export const selectedFilter = state => state.filter.filter;

export const selectFilterContact = createSelector(
  [getContact, selectedFilter],
  (items, filter) =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
