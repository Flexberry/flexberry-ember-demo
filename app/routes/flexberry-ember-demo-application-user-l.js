import ListFormRoute from 'ember-flexberry/routes/list-form';
import RedirectMixin from '../mixins/redirect-to-login-mixin';

export default ListFormRoute.extend(RedirectMixin, {
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'ApplicationUserL'
  */
  modelProjection: 'ApplicationUserL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'flexberry-ember-demo-application-user'
  */
  modelName: 'flexberry-ember-demo-application-user',

  /**
    Defined user settings developer.
    For default userSetting use empty name ('').
    Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.

    ```javascript
    {
      <componentName>: {
        <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    ```

    @property developerUserSettings
    @type Object
    @default {}
  */
  developerUserSettings: { FlexberryEmberDemoApplicationUserL: {} },
});
