export default {
  validations: {
    type: 'Выберите тип предложения',
    author: 'Выберите автора'
  },
  projections: {
    SuggestionE: {
      address: {
        caption: 'Адрес'
      },
      text: {
        caption: 'Текст'
      },
      polygon: {
        caption: 'Полигон'
      },
      date: {
        caption: 'Дата'
      },
      votes: {
        caption: 'Голоса'
      },
      moderated: {
        caption: 'Одобрено'
      },
      type: {
        caption: 'Тип',
        name: {
          caption: 'Name'
        }
      },
      author: {
        caption: 'Автор',
        name: {
          caption: 'Name'
        }
      },
      comments: {
        caption: 'Комментарии',
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
      },
      files: {
        caption: 'Файлы',
        order: {
          caption: 'Порядок'
        },
        file: {
          caption: 'Файл'
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
    },
    SuggestionL: {
      address: {
        caption: 'Адрес'
      },
      text: {
        caption: 'Текст'
      },
      date: {
        caption: 'Дата'
      },
      votes: {
        caption: 'Голоса'
      },
      moderated: {
        caption: 'Одобрено'
      },
      type: {
        caption: 'Тип предложения',
        name: {
          caption: 'Тип предложения'
        }
      },
      author: {
        caption: 'Автор',
        name: {
          caption: 'Автор'
        }
      }
    }
  }
};
