export default {
  validations: {
    author: 'Author can\'t be blank',
    suggestion: 'Suggestion can\'t be blank'
  },
  projections: {
    CommentE: {
      text: {
        caption: 'Text'
      },
      votes: {
        caption: 'Votes'
      },
      moderated: {
        caption: 'Moderated'
      },
      author: {
        caption: 'Author',
        name: {
          caption: 'Name'
        }
      },
      userVotes: {
        caption: 'User votes',
        voteType: {
          caption: 'Vote type'
        },
        applicationUser: {
          caption: 'Application user',
          name: {
            caption: 'Name'
          }
        }
      }
    }
  }
};
