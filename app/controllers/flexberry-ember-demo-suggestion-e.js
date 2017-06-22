import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'flexberry-ember-demo-suggestion-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'flexberry-ember-demo-comment+author':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            chooseText: '...',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'author',
            projection: 'ApplicationUserL',
            autocomplete: true,
          };
          break;

        case 'flexberry-ember-demo-vote+applicationUser':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            chooseText: '...',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'applicationUser',
            projection: 'ApplicationUserL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
