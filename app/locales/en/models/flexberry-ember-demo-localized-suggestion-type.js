export default {
  validations: {
    name: 'Name can\'t be blank',
    localization: 'Localization can\'t be blank',
    suggestionType: 'Suggestion type can\'t be blank'
  },
  projections: {
    LocalizedSuggestionTypeE: {
      name: {
        caption: 'Name'
      },
      localization: {
        caption: 'Localization',
        name: {
          caption: 'Name'
        }
      }
    }
  }
};
