import { Projection, Offline } from 'ember-flexberry-data';
import config from '../config/environment';

export default Offline.Store.reopen(Projection.StoreMixin, {
  init() {
    this.set('offlineSchema', {
      [config.APP.offline.dbName]: {
        1: {
          'flexberry-ember-demo-application-user':
            'id,name,login,eMail,phone1,phone2,phone3,activated,vK,facebook,twitter,birthday,gender,vip,karma',
          'flexberry-ember-demo-comment-vote':
            'id,voteType,applicationUser,comment',
          'flexberry-ember-demo-comment':
            'id,text,votes,moderated,author,suggestion,userVotes',
          'flexberry-ember-demo-localization':
            'id,name',
          'flexberry-ember-demo-localized-suggestion-type':
            'id,name,localization,suggestionType',
          'flexberry-ember-demo-suggestion-file':
            'id,order,file,suggestion',
          'flexberry-ember-demo-suggestion-type':
            'id,name,moderated,parent,*localizedTypes',
          'flexberry-ember-demo-suggestion':
            'id,address,text,date,votes,moderated,latitude,longitude,type,author,*commets,*files,*userVotes',
          'flexberry-ember-demo-vote':
            'voteType,applicationUser,suggestion',
          'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity':
            'id,objectPrimaryKey,operationTime,operationType,executionResult,source,serializedField,createTime,' +
            'creator,editTime,editor,user,objectType,*auditFields',
          'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field':
            'id,field,caption,oldValue,newValue,mainChange,auditEntity',
          'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type':
            'id,name',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent':
            'id,name,login,pwd,isUser,isGroup,isRole,connString,enabled,email,full,read,insert,update,delete,' +
            'execute,createTime,creator,editTime,editor',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group':
            'id,createTime,creator,editTime,editor,syncDownTime,readOnly,group,user',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-session':
            'id,createTime,creator,editTime,editor,syncDownTime,readOnly,userKey,startedAt,lastAccess,closed',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-access':
            'id,typeAccess,createTime,creator,editTime,editor,syncDownTime,readOnly,filter,permition',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter':
            'id,filterText,name,filterTypeNView,createTime,creator,editTime,editor,syncDownTime,readOnly,subject',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization':
            'id,createTime,creator,editTime,editor,syncDownTime,readOnly,user,agent',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute':
            'id,createTime,creator,editTime,editor,syncDownTime,readOnly,view,attribute',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation':
            'id,createTime,creator,editTime,editor,syncDownTime,readOnly,operation,class',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role':
            'id,startDate,endDate,createTime,creator,editTime,editor,syncDownTime,readOnly,role,agent',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view':
            'id,createTime,creator,editTime,editor,syncDownTime,readOnly,view,class',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition':
            'id,createTime,creator,editTime,editor,syncDownTime,readOnly,agent,subject,*access',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject':
            'id,name,type,isAttribute,isOperation,isView,isClass,sharedOper,full,read,insert,update,delete,' +
            'execute,permitted,createTime,creator,editTime,editor,syncDownTime,readOnly',
          'i-i-s-caseberry-logging-objects-application-log':
            'id,category,eventId,priority,severity,title,timestamp,machineName,appDomainName,processId,' +
            'processName,threadName,win32ThreadId,message,formattedMessage',
          'new-platform-flexberry-flexberry-user-setting':
            'id,appName,userName,moduleName,settName,settLastAccessTime,txtVal',
          'new-platform-flexberry-services-lock':
            'id,lockKey,userName,lockDate',
          'flexberry-ember-demo-offline-user': 'id,login,password'
        }
      }
    });
    return this._super(...arguments);
  },

  offlineModels: {
    'new-platform-flexberry-flexberry-user-setting': true,
    'offline-user': true
  }
});
