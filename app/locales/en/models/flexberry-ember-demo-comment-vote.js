export default {
  validations: {
    applicationUser: 'Application user can\'t be blank',
    comment: 'Comment can\'t be blank'
  },
  projections: {
    CommentVoteE: {
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
