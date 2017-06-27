export default {
  validations: {
    applicationUser: 'Выберите пользователя приложения',
    comment: 'Выберите комментарий'
  },
  projections: {
    CommentVoteE: {
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
