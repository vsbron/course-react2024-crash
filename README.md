# Today I Learned

Small facts app that displays the list of facts in various categories and allows to add the new ones.

## Features

- Random facts list with source link and some reactions;
- Facts can be filtered out using the Categories buttons;
- New fact can be added to the Facts list using the Form under the "Share a Fact" button;
- Fact could be deleted using "X" button;
- User can vote on each fact with the Votes Buttons;
- If facts' majority of votes are "False" it gets the "Disputed" tag added;

## Details

- Facts are loaded from the Supabase database;
- Facts are listed, added and updated using React Query;
- Facts filtering is written using URL State;
- CSS is written by Vanilla CSS;
- Added responsive support up to 550px;

## Live version

https://vsbron-course-react2024-crash.netlify.app
