import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'flexberry-ember-demo-suggestion-type-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'flexberry-ember-demo-localized-suggestion-type+localization':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            chooseText: '...',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'localization',
            projection: 'LocalizationL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
