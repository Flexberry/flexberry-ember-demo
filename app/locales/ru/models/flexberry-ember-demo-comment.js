export default {
  validations: {
    author: 'Выберите автора',
    suggestion: 'Выберите предложение'
  },
  projections: {
    CommentE: {
      text: {
        caption: 'Текст'
      },
      votes: {
        caption: 'Голоса'
      },
      moderated: {
        caption: 'Одобрен'
      },
      author: {
        caption: 'Автор',
        name: {
          caption: 'Name'
        }
      },
      userVotes: {
        caption: 'Голоса пользователей',
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
  }
};
