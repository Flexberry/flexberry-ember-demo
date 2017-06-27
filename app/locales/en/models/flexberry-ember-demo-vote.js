export default {
  validations: {
    applicationUser: 'Application user can\'t be blank',
    suggestion: 'Suggestion can\'t be blank'
  },
  projections: {
    VoteE: {
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
};
