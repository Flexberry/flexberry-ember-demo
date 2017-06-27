export default {
  validations: {
    name: 'Введите название',
    localization: 'Выберите локализацию',
    suggestionType: 'Выберите тип предложения'
  },
  projections: {
    LocalizedSuggestionTypeE: {
      name: {
        caption: 'Название'
      },
      localization: {
        caption: 'Локализация',
        name: {
          caption: 'Name'
        }
      }
    }
  }
};
