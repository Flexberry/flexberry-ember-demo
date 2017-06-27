export default {
  validations: {
    applicationUser: 'Выберите пользователя приложения',
    suggestion: 'Выберите предложение'
  },
  projections: {
    VoteE: {
      voteType: {
        caption: 'Тип голосования'
      },
      applicationUser: {
        caption: 'Пользователь приложения',
        name: {
          caption: 'Name'
        }
      }
    }
  }
};
