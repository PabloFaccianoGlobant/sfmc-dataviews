
export default {
  layout: [
    {
      name: 'Others',
      tables: [
        '_EnterpriseAttribute',
        '_Journey',
        '_JourneyActivity',
        '_ChatMessagingSubscription',
        '_AutomationInstance',
        '_AutomationActivityInstance'
      ]
    },
    {
      name: 'Email',
      tables: [
        '_Job',
        '_ListSubscribers',
        '_PublicationSubscriber',
        '_Subscribers',
        '_Sent',
        '_Open',
        '_Click',
        '_Bounce',
        '_Unsubscribe',
        '_BusinessUnitUnsubscribes',
        '_Complaint',
        '_FTAF',
        '_SocialNetworkTracking',
        '_SurveyResponse',
        '_SocialNetworkImpressions',
        '_Coupon'
      ]
    },
    {
      name: 'Mobile Connect / SMS',
      tables:  [
        '_SubscriberSMS',
        '_SMSMessageTracking',
        '_SMSSubscriptionLog',
        '_UndeliverableSms',
        '_MobileSubscription',
        '_MobileAddress'
      ]
    },
    {
      name: 'Mobile Push',
      tables:  [
        '_PushTag',
        '_PushAddress',
      ]
    },
    {
      name: 'Group Connect / LINE',
      tables: [
        '_MobileLineAddressContactSubscriptionView',
        '_MobileLineOrphanContactView',
        '_MobileLineAddressContact',
        '_MobileLineAddress',
        '_MobileLineProfile',
        '_MobileLineProfileAttribute'
      ]
    }
  ],
  tables: [
    /* Official DataViews */
    {
      name: '_Subscribers',
      channel: 'Email',
      description: 'Contains all the subscribers present in the list "AllSubscribers".',
      showInfo: false,
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_subscribers.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'SubscriberKey',
          type: 'Text (254)',
          info: 'A potential alternate identifier for subscribers. Also known as ContactKey.\nDefault value: Email Address\n\nMost common values:\n- Salesforce Contact ID (003...)\nSalesforce Lead ID (00Q...)\nSalesforce User ID (005...)\n- GUID/UUID\n- Number\n- EmailAddress'
        },
        {
          name: 'SubscriberID',
          type: 'Number',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.'
        },
        {
          name: 'EmailAddress',
          type: 'EmailAddress',
          info: 'Channel address'
        },
        {
          name: 'Domain',
          type: 'Text (254)',
          info: 'The domain of the subscriber. For example: gmail.com'
        },
        {
          name: 'DateJoined',
          type: 'Date',
          info: 'The date the subscriber joined your list.'
        },
        {
          name: 'DateUndeliverable',
          type: 'Date',
          info: 'The date an email for the subscriber was returned as undeliverable.'
        },
        {
          name: 'DateUnsubscribed',
          type: 'Date',
          info: 'The date the subscriber unsubscribed from your list	'
        },
        {
          name: 'BounceCount',
          type: 'Number',
          info: 'The total number of bounces accrued by the subscriber	'
        },
        {
          name: 'SubscriberType',
          type: 'Text (100)',
          info: 'The subscriber type for the affected subscriber.\n\nValues:\n0 = ExactTarget (Marketing Cloud), Salesforce Lead, Salesforce Contact\n3 = Unknown External System (Triggered Send Hidden Manage List)\n4 = MS CRM Contact\n5 = MS CRM Lead\n6 = MS CRM Account'
        },
        {
          name: 'Status',
          type: 'Number',
          info: 'The status of the subscriber.\n\nValues:active\nheld\nunsubscribed\nbounced.'
        },
        {
          name: 'Locale',
          type: 'Locale',
          info: 'The locale code for the subscriber.'
        }
      ]
    },
    {
      name: '_AutomationInstance',
      channel: 'Others',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_automation_instance.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'MemberID',
          type: 'Number',
          info: 'The unique ID of the business unit.'
        },
        {
          name: 'AutomationName',
          type: 'Text (400)',
          info: 'The automation name.'
        },
        {
          name: 'AutomationDescription',
          type: 'Text (400)',
          info: 'The automation description.'
        },
        {
          name: 'AutomationCustomerKey',
          type: 'Text (400)',
          info: 'The unique ID of the automation.'
        },
        {
          name: 'AutomationType',
          type: 'Text (9)',
          info: 'The automation’s starting source.\n\nValues:Schedule\nFile Drop\nTrigger'
        },
        {
          name: 'AutomationNotificationRecipient_Complete',
          type: 'Text (500)',
          info: 'The email address where notifications about completed automations are sent.'
        },
        {
          name: 'AutomationNotificationRecipient_Error',
          type: 'Text (500)',
          info: 'The email address where notifications about automation errors are sent.'
        },
        {
          name: 'AutomationNotificationRecipient_Skip',
          type: 'Text (500)',
          info: 'The email address where notifications about skipped automations are sent.'
        },
        {
          name: 'AutomationStepCount',
          type: 'Number',
          info: 'The number of steps in the automation.	'
        },
        {
          name: 'AutomationInstanceID',
          type: 'Text',
          info: 'The unique ID of the automation run (UUID)'
        },
        {
          name: 'AutomationInstanceIsRunOnce',
          type: 'Boolean',
          info: 'Whether the automation was set to run once.\n\nValues:\n1 = true\n0 = false'
        },
        {
          name: 'FilenameFromTrigger',
          type: 'Text (4000)',
          info: 'For file drop and trigger automations, the file that started the automation.'
        },
        {
          name: 'AutomationInstanceScheduledTime_UTC',
          type: 'Date',
          info: 'For scheduled automations, the time that the run was scheduled to begin.'
        },
        {
          name: 'AutomationInstanceStartTime_UTC',
          type: 'Date',
          info: 'The time that the automation run started.\nThis value is null if the automation was skipped.'
        },
        {
          name: 'AutomationInstanceEndTime_UTC',
          type: 'Date',
          info: 'The time that the automation run ended.\nThis value is null if the automation was skipped or is still running.'
        },
        {
          name: 'AutomationInstanceStatus',
          type: 'Text (400)',
          info: 'The status of the automation run when the data view is queried.\n\nValues:\nQueuedFile\nInitialized\nExecuting\nStopped\nComplete\nError.'
        },
        {
          name: 'AutomationInstanceActivityErrorDetails',
          type: 'Text (4000)',
          info: 'The message from the error log, if applicable.\nIf a system or unclassified error occurs, the value is System Error.\nIf multiple errors occur, only the first message is displayed.\nTo get details on multiple errors, use the _AutomationActivityInstance view.'
        }
      ]
    },
    {
      name: '_AutomationActivityInstance',
      channel: 'Others',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_automation_activity_instance.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'MemberID',
          type: 'Number',
          info: 'The unique ID of the business unit.	'
        },
        {
          name: 'AutomationName',
          type: 'Text (400)',
          info: 'The automation name.	'
        },
        {
          name: 'AutomationCustomerKey',
          type: 'Text (400)',
          info: 'The unique ID of the automation.	'
        },
        {
          name: 'AutomationInstanceID',
          type: 'Text',
          info: 'The unique ID of the automation run.	'
        },
        {
          name: 'ActivityType',
          type: 'Number',
          info: 'The activity type.\nSee docs for the list of all available types.'
        },
        {
          name: 'ActivityDescription',
          type: 'Text (400)',
          info: 'The activity description.'
        },
        {
          name: 'ActivityCustomerKey',
          type: 'Text (400)',
          info: 'The unique ID of the activity.'
        },
        {
          name: 'ActivityInstanceStep',
          type: 'Text (25)',
          info: 'Where the activity occurs in the automation.\nFor example, 3.2 is step 3, activity 2.	'
        },
        {
          name: 'ActivityInstanceID',
          type: 'Text',
          info: 'The unique ID of the activity run.	'
        },
        {
          name: 'ActivityInstanceStartTime_UTC',
          type: 'Date',
          info: 'The time that the activity run started.\nThis value is null if the automation was skipped.'
        },
        {
          name: 'ActivityInstanceEndTime_UTC',
          type: 'Date',
          info: 'The time that the activity run ended.\nThis value is null if the automation was skipped, is still running, or wasn’t selected as part of an Advanced Run Once.'
        },
        {
          name: 'ActivityInstanceStatus',
          type: 'Text (256)',
          info: 'The status of the activity run when the data view is queried.\n\nValues:\nInitialized\nExecuting\nComplete\nError\nNotSelected'
        },
        {
          name: 'ActivityInstanceStatusDetails',
          type: 'Text (400)',
          info: 'The message from the error log, if applicable.\nIf a system or unclassified error occurs, the value is System Error.'
        }
      ]
    },
    {
      name: '_Bounce',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_bounce.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'AccountID',
          type: 'Number',
          info: 'Your account ID number (EID)'
        },
        {
          name: 'OYBAccountID',
          type: 'Number',
          info: 'Also known as MID.\nThe account ID number for any related On-Your-Behalf accounts.\nThis field applies to enterprise accounts only.	'
        },
        {
          name: 'JobID',
          type: 'Number',
          info: 'The job ID number for the email send	'
        },
        {
          name: 'ListID',
          type: 'Number',
          info: 'The list ID number for the list used in the send	'
        },
        {
          name: 'BatchID',
          type: 'Number',
          info: 'The batch ID number for any batches used in the send	'
        },
        {
          name: 'SubscriberID',
          type: 'Number',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.'
        },
        {
          name: 'SubscriberKey',
          type: 'Text (254)',
          info: 'The subscriber key for the affected subscriber. This serves as the primary key.	'
        },
        {
          name: 'EventDate',
          type: 'Date',
          info: 'The date the bounce took place'
        },
        {
          name: 'IsUnique',
          type: 'Boolean',
          info: 'Whether the event is unique or repeated	'
        },
        {
          name: 'Domain',
          type: 'Text (128)',
          info: 'The domain at which the bounce occurred	'
        },
        {
          name: 'BounceCategoryID',
          type: 'Number',
          info: 'The ID number for the bounce category	'
        },
        {
          name: 'BounceCategory',
          type: 'Text (50)',
          info: 'The category of the bounce	'
        },
        {
          name: 'BounceSubcategoryID',
          type: 'Number',
          info: 'The ID number for the bounce subcategory	'
        },
        {
          name: 'BounceSubcategory',
          type: 'Text (50)',
          info: 'The subcategory of the bounce	'
        },
        {
          name: 'BounceTypeID',
          type: 'Number',
          info: 'The ID number for the bounce type	'
        },
        {
          name: 'BounceType',
          type: 'Text (50)',
          info: 'The type of bounce that occurred	'
        },
        {
          name: 'SMTPBounceReason',
          type: 'Text (MAX)',
          info: 'The reason for the bounce relayed by the mail system	'
        },
        {
          name: 'SMTPMessage',
          type: 'Text (MAX)',
          info: 'The message regarding the bounce from the mail system	'
        },
        {
          name: 'SMTPCode',
          type: 'Number',
          info: 'The error code for the bounce from the mail system	'
        },
        {
          name: 'TriggererSendDefinitionObjectID',
          type: 'Text (36)',
          info: 'The object ID for the triggered send definition'
        },
        {
          name: 'TriggeredSendCustomerKey',
          type: 'Text (36)',
          info: 'The customer key for the triggered send	'
        },
        {
          name: 'IsFalseBounce',
          type: 'Boolean',
          info: 'Indicates a false bounce	'
        },
      ]
    },
    {
      name: '_BusinessUnitUnsubscribes',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_businessunitunsubscribes.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'BusinessUnitID',
          info: 'The Account ID for the Business Unit (BU).',
          type: 'Number'
        },
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber.\nThis number represents the unique ID for each subscriber record.\nIndexed.',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'A potential alternate identifier for subscribers.\nDefaults to the value of Email Address.\nIndexed!',
          type: 'Text (254)'
        },
        {
          name: 'UnsubDateUTC',
          info: 'The date the subscriber unsubscribed from messages sent by BU.	',
          type: 'Date'
        },
        {
          name: 'UnsubReason',
          info: 'The reason listed is a custom value configured by your administrator.',
          type: 'Text (100)'
        },
      ]
    },
    {
      name: '_Click',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_click.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'AccountID',
          info: 'The account ID number of the Marketing Cloud account.	',
          type: 'Number'
        },
        {
          name: 'OYBAccountID',
          info: 'The account ID number for any related On-Your-Behalf (OYB) accounts. This field applies to enterprise accounts only.	',
          type: 'Number'
        },
        {
          name: 'JobID',
          info: 'The job ID number for the email send	',
          type: 'Number'
        },
        {
          name: 'ListID',
          info: 'The list ID number for the list used in the send	',
          type: 'Number'
        },
        {
          name: 'BatchID',
          info: 'The batch ID number for any batches used in the send	',
          type: 'Number'
        },
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.	',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber	',
          type: 'Text (254)'
        },
        {
          name: 'EventDate',
          info: 'The date the click took place	',
          type: 'Date'
        },
        {
          name: 'Domain',
          info: 'The domain at which the click occurred	',
          type: 'Text (128)'
        },
        {
          name: 'URL',
          info: 'The URL for the link clicked.\nNo AMPscript or variables are populated in this column, for example, www.example.com?%%attribute%%	',
          type: 'Text (900)'
        },
        {
          name: 'LinkName',
          info: 'The link name assigned in the email send	',
          type: 'Text (1024)'
        },
        {
          name: 'LinkContent',
          info: 'The link content assigned in the email send.\nAMPscript and variables are populated in this column, such as www.example.com?12345	',
          type: 'Text (MAX)'
        },
        {
          name: 'IsUnique',
          info: 'Whether the event is unique or repeated\n\nNOTE\nThe IsUnique value is true when any link is first clicked in a JobID by a subscriber.\nAny clicks afterwards are false even if different URLs.',
          type: 'Boolean'
        },
        {
          name: 'TriggererSendDefinitionObjectID',
          info: 'The object ID for the triggered send definition	',
          type: 'Text'
        },
        {
          name: 'TriggeredSendCustomerKey	',
          info: 'The customer key for the triggered send	',
          type: 'Text (36)'
        },
      ]
    },
    {
      name: '_Complaint',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?language=en_US&id=sf.mc_as_data_view_complaint.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'AccountID',
          info: 'The account ID number of the Marketing Cloud account.	',
          type: 'Number'
        },
        {
          name: 'OYBAccountID',
          info: 'The account ID number for any related On-Your-Behalf (OYB) accounts. This field applies to enterprise accounts only.	',
          type: 'Number'
        },
        {
          name: 'JobID',
          info: 'The job ID number for the email send	',
          type: 'Number'
        },
        {
          name: 'ListID',
          info: 'The list ID number for the list used in the send	',
          type: 'Number'
        },
        {
          name: 'BatchID',
          info: 'The batch ID number for any batches used in the send	',
          type: 'Number'
        },
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.	',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber	',
          type: 'Text (254)'
        },
        {
          name: 'EventDate',
          info: 'The date the complaint took place	',
          type: 'Date'
        },
        {
          name: 'Domain',
          info: 'The domain at which the click occurred	',
          type: 'Text (128)'
        },
        {
          name: 'IsUnique',
          info: 'Whether the event is unique or repeated',
          type: 'Number'
        }
      ]
    },
    {
      name: '_Coupon',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_coupon.htm&type=5',
      deprecated: true,
      hidden: false,
      fields: [
        {
          name: 'Name',
          info: 'Name of your coupon	',
          type: 'Text (128)'
        },
        {
          name: 'ExternalKey',
          info: 'The external key used to refer to your coupon via the API	',
          type: 'Text (36)'
        },
        {
          name: 'Description',
          info: 'Description of your coupon	',
          type: 'Text'
        },
        {
          name: 'BeginDate',
          info: 'The date the coupon becomes valid	',
          type: 'Date'
        },
        {
          name: 'ExpirationDate',
          info: 'The date the coupon becomes invalid	',
          type: 'Date'
        },
      ]
    },
    {
      name: '_EnterpriseAttribute',
      channel: 'Others',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_enterpriseattribute.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: '_SubscriberID',
          info: 'The subscriber ID for the affected subscriber.\nThis number represents the unique ID for each subscriber record stored.\nIndexed.',
          type: 'Number'
        },
      ]
    },
    {
      name: '_FTAF ',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_ftaf.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'AccountID',
          info: 'The account ID number of the Marketing Cloud account.	',
          type: 'Number'
        },
        {
          name: 'OYBAccountID',
          info: 'The account ID number for any related On-Your-Behalf (OYB) accounts. This field applies to enterprise accounts only.	',
          type: 'Number'
        },
        {
          name: 'JobID',
          info: 'The job ID number for the email send	',
          type: 'Number'
        },
        {
          name: 'ListID',
          info: 'The list ID number for the list used in the send	',
          type: 'Number'
        },
        {
          name: 'BatchID',
          info: 'The batch ID number for any batches used in the send	',
          type: 'Number'
        },
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.	',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber	',
          type: 'Text (254)'
        },
        {
          name: 'TransactionTime',
          info: 'The date the forward took place',
          type: 'Date'
        },
        {
          name: 'Domain',
          info: 'The domain at which the click occurred	',
          type: 'Text (128)'
        },
        {
          name: 'IsUnique',
          info: 'Whether the event is unique or repeated ',
          type: 'Boolean'
        },
        {
          name: 'TriggererSendDefinitionObjectID',
          info: 'The object ID for the triggered send definition	',
          type: 'Text'
        },
        {
          name: 'TriggeredSendCustomerKey',
          info: 'The customer key for the triggered send	',
          type: 'Text (36)'
        }
      ]
    },
    {
      name: '_MobileLineAddressContactSubscriptionView',
      channel: 'LINE',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_groupconnect_contact_subscriptions.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'ChannelID',
          info: 'Channel ID of LINE account	',
          type: 'Text'
        },
        {
          name: 'ContactID',
          info: 'Marketing Cloud ContactId (system generated) linked to LINE UID	',
          type: 'Number'
        },
        {
          name: 'ContactKey',
          info: 'Marketing Cloud contact key (system generated) linked to LINE UID	',
          type: 'Text'
        },
        {
          name: 'AddressID',
          info: 'LINE UID	',
          type: 'Text'
        },
        {
          name: 'IsActive',
          info: 'Active flag\n\nValues:\n1 = true\0 = false',
          type: 'Number'
        },
        {
          name: 'CreatedDate',
          info: 'Date and time record created in Central Standard Time. Date the customer started following LINE account.	',
          type: 'Date'
        },
        {
          name: 'ModifiedDate',
          info: 'Date and time record modified in Central Standard Time	',
          type: 'Date'
        },
      ]
    },
    {
      name: '_MobileLineOrphanContactView',
      channel: 'LINE',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_orphaned_contact.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'ContactID',
          info: 'Marketing Cloud ContactId (system generated) linked to LINE UID	',
          type: 'Number'
        },
        {
          name: 'ContactKey',
          info: 'ContactKey is either system-generated or provided by user during import. Linked to LINE UID	',
          type: 'Text'
        },
        {
          name: 'AddressID',
          info: 'LINE UID	',
          type: 'Text'
        },
        {
          name: 'CreatedDate',
          info: 'Date and time record created (in Central Standard Time). Date the customer started following LINE account.	',
          type: 'Date'
        },
      ]
    },
    {
      name: '_Job',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_job.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'JobID',
          info: 'The job ID number for the email send. Indexed!',
          type: 'Number'
        },
        {
          name: 'EmailID',
          info: 'The email ID for the job	',
          type: 'Number'
        },
        {
          name: 'AccountID',
          info: 'The ID number for the account that performed the job	',
          type: 'Number'
        },
        {
          name: 'AccountUserID',
          info: 'The ID number for the account user that performed the job	',
          type: 'Number'
        },
        {
          name: 'FromName',
          info: 'The from name in the email send	',
          type: 'Text (130)'
        },
        {
          name: 'FromEmail',
          info: 'The from email address in the email send	',
          type: 'Text (100)'
        },
        {
          name: 'SchedTime',
          info: 'The time the job was scheduled	',
          type: 'Date'
        },
        {
          name: 'PickupTime',
          info: 'The time the Marketing Cloud application started the job	',
          type: 'Date'
        },
        {
          name: 'DeliveredTime',
          info: 'The time the email was delivered	',
          type: 'Date'
        },
        {
          name: 'EventID',
          info: 'The ID for the job event	',
          type: 'Text (50)'
        },
        {
          name: 'IsMultipart',
          info: 'Whether the job was sent as multipart MIME or not	',
          type: 'Boolean'
        },
        {
          name: 'JobType',
          info: 'The type of job	',
          type: 'Text (50)'
        },
        {
          name: 'JobStatus',
          info: 'The status of the job	',
          type: 'Text (50)'
        },
        {
          name: 'ModifiedBy',
          info: 'If modified, the user who modified the job	',
          type: 'Number'
        },
        {
          name: 'ModifiedDate',
          info: 'The date the job was modified	',
          type: 'Date'
        },
        {
          name: 'EmailName',
          info: 'The name of the email sent by the job	',
          type: 'Text (100)'
        },
        {
          name: 'EmailSubject',
          info: 'The subject of the email send	',
          type: 'Text (200)'
        },
        {
          name: 'IsWrapped',
          info: 'Whether the links in the email were wrapped for tracking	',
          type: 'Boolean'
        },
        {
          name: 'TestEmailAddr',
          info: 'The test email address used in the job	',
          type: 'Email'
        },
        {
          name: 'Category',
          info: 'The job category	',
          type: 'Text (100)'
        },
        {
          name: 'BccEmail',
          info: 'Any email address send in the BCC field	',
          type: 'Text (100)'
        },
        {
          name: 'OriginalSchedTime',
          info: 'The original scheduled time for the job	',
          type: 'Date'
        },
        {
          name: 'CreatedDate',
          info: 'The date the job was created	',
          type: 'Date'
        },
        {
          name: 'CharacterSet',
          info: 'The character set used in the job	',
          type: 'Text (30)'
        },
        {
          name: 'IPAddress',
          info: 'This value is always null.	',
          type: 'Text (50)'
        },
        {
          name: 'SalesForceTotalSubscriberCount',
          info: 'The total number of Salesforce subscribers included in the job.\nDEPRECATED',
          type: 'Number'
        },
        {
          name: 'SalesForceErrorSubscriberCount',
          info: 'The total number of Salesforce subscribers included in the job that received errors.\nDEPRECATED',
          type: 'Number'
        },
        {
          name: 'SendType',
          info: 'The type of send used in the job	',
          type: 'Text (128)'
        },
        {
          name: 'DynamicEmailSubject',
          info: 'The dynamic email subject included in the job	',
          type: 'Text'
        },
        {
          name: 'SuppressTracking',
          info: 'If tracking information for this job was suppressed	',
          type: 'Boolean'
        },
        {
          name: 'SendClassificationType',
          info: 'The send classification type for the job	',
          type: 'Text (32)'
        },
        {
          name: 'SendClassification',
          info: 'The send classification for the job',
          type: 'Text (36)'
        },
        {
          name: 'ResolveLinksWithCurrentData',
          info: 'If the job resolved links with current data	',
          type: 'Boolean'
        },
        {
          name: 'EmailSendDefinition',
          info: 'The email send definition used in the job',
          type: 'Text (36)'
        },
        {
          name: 'DeduplicateByEmail',
          info: 'Whether the email addresses in the job are used to deduplicate subscribers	',
          type: 'Boolean'
        },
        {
          name: 'TriggererSendDefinitionObjectID',
          info: 'The object ID for the triggered send definition	',
          type: 'Text'
        },
        {
          name: 'TriggeredSendCustomerKey',
          info: 'The customer key for the triggered send	',
          type: 'Text (36)'
        }
      ]
    },
    {
      name: '_Journey',
      channel: 'Others',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_journey.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'VersionID',
          info: 'The unique identifier for the version of the journey	',
          type: 'Text (36)'
        },
        {
          name: 'JourneyID',
          info: 'The unique identifier for the journey. There are one or more VersionID’s associated to a JourneyID.',
          type: 'Text (36)'
        },
        {
          name: 'JourneyName',
          info: 'The name of the journey	',
          type: 'Text (200)'
        },
        {
          name: 'VersionNumber',
          info: 'The version number of the version of the journey	',
          type: 'Number'
        },
        {
          name: 'CreatedDate',
          info: 'The date that the version of the journey was created	',
          type: 'Date'
        },
        {
          name: 'ModifiedDate',
          info: 'The date that the version of the journey was last edited	',
          type: 'Number'
        },
        {
          name: 'LastPublishedDate',
          info: 'The date that the version of the journey was last published	',
          type: 'Number'
        },
        {
          name: 'JourneyStatus',
          info: 'The current running mode of the journey.\n\nValues:\nDraft\nRunning\nFinishing\nStopped',
          type: 'Text (100)'
        },
      ]
    },
    {
      name: '_JourneyActivity',
      channel: 'Others',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_journey_activity.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'VersionID',
          info: 'The unique identifier for the version of the journey	',
          type: 'Text (36)'
        },
        {
          name: 'ActivityID',
          info: 'The unique identifier for the activity. There are one or more ActivityID’s associated to a VersionID.	',
          type: 'Text (36)'
        },
        {
          name: 'ActivityName',
          info: 'The name of the activity	',
          type: 'Text (200)'
        },
        {
          name: 'ActivityExternalKey',
          info: 'The external key associated with the activity	',
          type: 'Text (200)'
        },
        {
          name: 'JourneyActivityObjectID',
          info: 'Use this unique identifier to join to email tracking system data views to identify a journey email’s Triggered Send Definition.	',
          type: 'Text (36)'
        },
        {
          name: 'ActivityType',
          info: 'The type of activity	',
          type: 'Text (512)'
        },
      ]
    },
    {
      name: '_ListSubscribers',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_listsubscribers.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'AddedBy',
          info: 'The ID of the user who ran the process that added the subscriber	',
          type: 'Number'
        },
        {
          name: 'AddMethod',
          info: 'The method by which the subscriber was added, including Unspecified, Webcollect, API, FTAF, Import, Move Copy, Application, Salesforce, Segmentation, Generic Extension, and Custom Object	',
          type: 'Text (17)'
        },
        {
          name: 'CreatedDate',
          info: 'The date the subscriber was added to the list	',
          type: 'Date'
        },
        {
          name: 'DateUnsubscribed',
          info: 'The date the subscriber unsubscribed	',
          type: 'Date'
        },
        {
          name: 'EmailAddress',
          info: 'The subscriber\'s email address',
          type: 'Text (254)'
        },
        {
          name: 'ListID',
          info: 'The list ID number for the list used in the send	',
          type: 'Number'
        },
        {
          name: 'ListName',
          info: 'The name of the list containing the subscribers	',
          type: 'Text (50)'
        },
        {
          name: 'ListType',
          info: 'Shows whether the type is list or group.\n\nValues:\nPublication list\nSuppression list\nList\nGroup\nFTAF list\nUnknown',
          type: 'Text (16)'
        },
        {
          name: 'Status',
          info: 'The status of the subscriber	',
          type: 'Text (12)'
        },
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.	',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber	',
          type: 'Text (254)'
        },
        {
          name: 'SubscriberType',
          info: 'The type of subscriber	',
          type: 'Text (100)'
        },
      ]
    },
    {
      name: '_Open',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_open.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'AccountID',
          info: 'The account ID number of the Marketing Cloud account.	',
          type: 'Number'
        },
        {
          name: 'OYBAccountID',
          info: 'The account ID number for any related On-Your-Behalf (OYB) accounts. This field applies to enterprise accounts only.	',
          type: 'Number'
        },
        {
          name: 'JobID',
          info: 'The job ID number for the email send	',
          type: 'Number'
        },
        {
          name: 'ListID',
          info: 'The list ID number for the list used in the send	',
          type: 'Number'
        },
        {
          name: 'BatchID',
          info: 'The batch ID number for any batches used in the send	',
          type: 'Number'
        },
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.	',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber	',
          type: 'Text (254)'
        },
        {
          name: 'EventDate',
          info: 'The date the open took place	',
          type: 'Date'
        },
        {
          name: 'Domain',
          info: 'The domain at which the click occurred	',
          type: 'Text (128)'
        },
        {
          name: 'IsUnique',
          info: 'Whether the event is unique or repeated',
          type: 'Boolean'
        },
        {
          name: 'TriggererSendDefinitionObjectID',
          info: 'The object ID for the triggered send definition	',
          type: 'Text (36)'
        },
        {
          name: 'TriggeredSendCustomerKey',
          info: 'The customer key for the triggered send	',
          type: 'Text (36)'
        }
      ]
    },
    {
      name: '_Sent',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_sent.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'AccountID',
          info: 'The account ID number of the Marketing Cloud account.	',
          type: 'Number'
        },
        {
          name: 'OYBAccountID',
          info: 'The account ID number for any related On-Your-Behalf (OYB) accounts. This field applies to enterprise accounts only.	',
          type: 'Number'
        },
        {
          name: 'JobID',
          info: 'The job ID number for the email send	',
          type: 'Number'
        },
        {
          name: 'ListID',
          info: 'The list ID number for the list used in the send	',
          type: 'Number'
        },
        {
          name: 'BatchID',
          info: 'The batch ID number for any batches used in the send	',
          type: 'Number'
        },
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.	',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber	',
          type: 'Text (254)'
        },
        {
          name: 'EventDate',
          info: 'The date the send took place	',
          type: 'Date'
        },
        {
          name: 'Domain',
          info: 'The domain at which the click occurred	',
          type: 'Text (128)'
        },
        {
          name: 'TriggererSendDefinitionObjectID',
          info: 'The object ID for the triggered send definition	',
          type: 'Text (36)'
        },
        {
          name: 'TriggeredSendCustomerKey',
          info: 'The customer key for the triggered send	',
          type: 'Text (36)'
        }
      ]
    },
    {
      name: '_SMSMessageTracking ',
      channel: 'SMS',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_sms_message_tracking.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'MobileMessageTrackingID',
          info: 'Unique ID for tracking information related to the sent message	',
          type: 'Number'
        },
        {
          name: 'EID',
          info: 'Enterprise ID number for the sender	',
          type: 'Number'
        },
        {
          name: 'MID',
          info: 'Member ID	',
          type: 'Number'
        },
        {
          name: 'Mobile',
          info: 'Mobile number for the subscriber	',
          type: 'Phone'
        },
        {
          name: 'MessageID',
          info: 'Mobile message ID	',
          type: 'Number'
        },
        {
          name: 'KeywordID',
          info: 'Unique identifier for the keyword	',
          type: 'Text'
        },
        {
          name: 'CodeID',
          info: 'Unique identifier for the SMS code	',
          type: 'Text'
        },
        {
          name: 'ConversationID',
          info: 'Not used (legacy)',
          type: 'Text'
        },
        {
          name: 'ConversationStateID',
          info: 'Unique identifier that correlates mobile originated (MO) and mobile terminated (MT) messages as a single conversation',
          type: 'Text'
        },
        {
          name: 'CampaignID',
          info: 'The SMS campaign tied to the record	',
          type: 'Number'
        },
        {
          name: 'Sent',
          info: 'If the message was sent (1 = true, 0 = false)	',
          type: 'Boolean'
        },
        {
          name: 'Delivered',
          info: 'If the message was delivered (1 = true, 0 = false)	',
          type: 'Boolean'
        },
        {
          name: 'Undelivered',
          info: 'Whether the message was delivered successfully or not (1 = true, 0 = false)	',
          type: 'Boolean'
        },
        {
          name: 'Outbound',
          info: 'If the message was outgoing (1 = true, 0 = false)	',
          type: 'Boolean'
        },
        {
          name: 'Inbound',
          info: 'If the message was incoming (1 = true, 0 = false)	',
          type: 'Boolean'
        },
        {
          name: 'CreateDateTime',
          info: 'The date and time the tracking record was created	',
          type: 'Date'
        },
        {
          name: 'ModifiedDateTime',
          info: 'The date and time (in Central Standard Time) the tracking record was modified	',
          type: 'Date'
        },
        {
          name: 'ActionDateTime',
          info: 'The actual date and time a delivery or non-delivery event was received by the Marketing Cloud.\nTimestamps for delivery receipts aren’t indicative of when a message was received on a handset. The SMS industry doesn’t support read receipts, and the data returned in this view are based on when a delivery receipt is returned to our system.',
          type: 'Date'
        },
        {
          name: 'MessageText',
          info: 'The text of the message	',
          type: 'Text (160)'
        },
        {
          name: 'IsTest',
          info: 'If the message was a test message	',
          type: 'Boolean'
        },
        {
          name: 'MobileMessageRecurrenceID',
          info: 'The ID of the recurrence schedule for the message. Can be used for troubleshooting send issues.	',
          type: 'Number'
        },
        {
          name: 'ResponseToMobileMessageTrackingID',
          info: 'The tracking ID of the response to the message	',
          type: 'Number'
        },
        {
          name: 'IsValid',
          info: 'If the message is valid	',
          type: 'Boolean'
        },
        {
          name: 'InvalidationCode',
          info: 'Invalidation code for the message	',
          type: 'Number'
        },
        {
          name: 'SendID',
          info: 'The send ID number for the SMS send	',
          type: 'Number'
        },
        {
          name: 'SendSplitID',
          info: 'If the message was split, the ID of the split	',
          type: 'Number'
        },
        {
          name: 'SendSegmentID',
          info: 'The ID of the segment tied to the message	',
          type: 'Number'
        },
        {
          name: 'SendJobID',
          info: 'The job ID for the SMS send	',
          type: 'Number'
        },
        {
          name: 'SendGroupID',
          info: 'The group ID for the SMS send	',
          type: 'Number'
        },
        {
          name: 'SendPersonID',
          info: 'The sendperson ID for the SMS send	',
          type: 'Number'
        },
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record	',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber	',
          type: 'Number'
        },
        {
          name: 'SMSStandardStatusCodeId',
          info: 'SFMC delivery status code\n\nhttps://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/sms-status-codes.htm',
          type: 'Number'
        },
        {
          name: 'Description',
          info: 'Detailed description of the status code	',
          type: 'Text'
        },
        {
          name: 'Name',
          info: 'The name of your message	',
          type: 'Text'
        },
        {
          name: 'ShortCode',
          info: 'The short code or long code used to send your message.\nThe ShortCode column isn’t populated for inbound and MT sends. View the associated code in the CodeID column instead.',
          type: 'Text'
        },
        {
          name: 'SharedKeyword',
          info: 'The keyword used in your message	',
          type: 'Text'
        },
        {
          name: 'Ordinal',
          info: 'Represents the parts in a multi-part message. Represented in ascending order starting at 0.	',
          type: 'Number'
        },
        {
          name: 'FromName',
          info: 'From Name that an individual message was deployed with.',
          type: 'Text (11)'
        },
        {
          name: 'JBActivityID',
          info: 'Unique identifier for the journey activity the message was deployed from	',
          type: 'Text'
        },
        {
          name: 'JBDefinitionID',
          info: 'Unique identifier for the journey a message was deployed from',
          type: 'Text'
        },
        {
          name: 'SMSJobID',
          info: 'Unique identifier for each SMS job triggered in MobileConnect	',
          type: 'Text'
        },
        {
          name: 'SMSBatchID',
          info: 'Identifies a batch associated with an SMS send	',
          type: 'Number'
        },
      ]
    },
    {
      name: '_SocialNetworkImpressions',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_social_network_impressions.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'JobID',
          info: 'The job ID number for the email send	',
          type: 'Number'
        },
        {
          name: 'ListID',
          info: 'The list ID number for the list used in the send	',
          type: 'Number'
        },
        {
          name: 'RegionTitle',
          info: 'The title of the region shared via Social Forward	',
          type: 'Text'
        },
        {
          name: 'RegionDescription',
          info: 'The description of the region shared via Social Forward	',
          type: 'Text'
        },
        {
          name: 'RegionHTML',
          info: 'The HTML associated with the social forward region	',
          type: 'Text'
        },
        {
          name: 'ContentRegionID',
          info: 'The ID of the shared content region	',
          type: 'Number'
        },
        {
          name: 'SocialSharingSiteID',
          info: 'The ID of the social network involved in the sharing of the content region	',
          type: 'Number'
        },
        {
          name: 'SiteName',
          info: 'The name of the social network involved in the sharing of the content region	',
          type: 'Text'
        },
        {
          name: 'CountryCode',
          info: 'The country code for the social network involved in the sharing of the content region	',
          type: 'Text'
        },
        {
          name: 'ReferringURL',
          info: 'The referring URL used in the Social Forward activity	',
          type: 'Text'
        },
        {
          name: 'IPAddress',
          info: 'The IP address for the URL from which the content region was shared.	',
          type: 'Text (50)'
        },
        {
          name: 'TransactionTime',
          info: 'The time at which the content area was shared	',
          type: 'Date'
        },
        {
          name: 'PublishedSocialContentStatusID',
          info: 'The status ID for the published social content	',
          type: 'Text'
        },
        {
          name: 'ShortCode',
          info: 'The short code for the published social content status, which is Active, Inactive, or Deleted	',
          type: 'Text'
        },
        {
          name: 'PublishTime',
          info: 'The time the social content area was published	',
          type: 'Date'
        },
      ]
    },
    {
      name: '_SocialNetworkTracking',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_social_network_tracking.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.	',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber	',
          type: 'Text (254)'
        },
        {
          name: 'ListID',
          info: 'The list ID number for the list used in the send	',
          type: 'Number'
        },
        {
          name: 'BatchID',
          info: 'The batch ID number for any batches used in the send	',
          type: 'Number'
        },
        {
          name: 'SocialSharingSiteID',
          info: 'The ID of the social network used to share the content region	',
          type: 'Number'
        },
        {
          name: 'SiteName',
          info: 'The name of the social network involved in the sharing of the content region	',
          type: 'Text'
        },
        {
          name: 'CountryCode',
          info: 'The country code for the social network involved in the sharing of the content region	',
          type: 'Text'
        },
        {
          name: 'PublishedSocialContentID',
          info: 'The ID number for the content area published via Social Forward	',
          type: 'Text'
        },
        {
          name: 'RegionTitle',
          info: 'The title of the region shared via Social Forward',
          type: 'Text'
        },
        {
          name: 'RegionDescription',
          info: 'The description of the region shared via Social Forward	',
          type: 'Text'
        },
        {
          name: 'RegionHTML',
          info: 'The HTML associated with the social forward region	',
          type: 'Text'
        },
        {
          name: 'ContentRegionID',
          info: 'The ID of the shared content region	',
          type: 'Text'
        },
        {
          name: 'OYBMemberID',
          info: 'The ID number for any On-Your-Behalf (OYB) account involved in the sharing of the content area	',
          type: 'Number'
        },
        {
          name: 'TransactionTime',
          info: 'The time at which the content area was shared	',
          type: 'Date'
        },
        {
          name: 'IsUnique',
          info: 'Whether the event is unique or not	',
          type: 'Boolean'
        },
        {
          name: 'Domain',
          info: 'The domain from which the content was shared	',
          type: 'Text'
        },
        {
          name: 'PublishedSocialContentStatusID	',
          info: 'The status ID for the published social content	',
          type: 'Text'
        },
        {
          name: 'ShortCode',
          info: 'The short code for the published social content status, which is Active, Inactive, or Deleted	',
          type: 'Text'
        },
        {
          name: 'PublishTime',
          info: 'The time the social content area was published	',
          type: 'Date'
        }
      ]
    },
    {
      name: '_SMSSubscriptionLog',
      channel: 'SMS',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_sms_subscription_log.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'LogDate',
          info: 'The date the subscription is logged	',
          type: 'Date'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber	',
          type: 'Text'
        },
        {
          name: 'MobileSubscriptionID',
          info: 'The unique ID of the subscription record	',
          type: 'Number'
        },
        {
          name: 'SubscriptionDefinitionID',
          info: 'The unique keyword ID		',
          type: 'Text'
        },
        {
          name: 'MobileNumber',
          info: 'Mobile number for the subscriber	',
          type: 'Phone'
        },
        {
          name: 'OptOutStatusID',
          info: 'Whether the subscriber has opted out of SMS messages. See key for values.	',
          type: 'Number'
        },
        {
          name: 'OptOutMethodID',
          info: 'Method the subscriber used to opt out of SMS messages. See key for values.	',
          type: 'Number'
        },
        {
          name: 'OptOutDate',
          info: 'Date the subscriber opted out of SMS messages	',
          type: 'Date'
        },
        {
          name: 'OptInStatusID',
          info: 'Whether the subscriber has opted in to SMS message. See key for values.	',
          type: 'Number'
        },
        {
          name: 'OptInMethodID',
          info: 'Method the subscriber used to opt in to SMS messages. See key for values.	',
          type: 'Number'
        },
        {
          name: 'OptInDate',
          info: 'Date the subscriber opted in to SMS messages	',
          type: 'Date'
        },
        {
          name: 'Source',
          info: 'The subscription source	',
          type: 'Number'
        },
        {
          name: 'CreatedDate',
          info: 'Date the message was created	',
          type: 'Date'
        },
        {
          name: 'ModifiedDate',
          info: 'Date the message was modified	',
          type: 'Date'
        },
      ]
    },
    {
      name: '_SurveyResponse',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_surveyresponse.htm&type=5',
      deprecated: true,
      hidden: false,
      fields: [
        {
          name: 'AccountID',
          info: 'The account ID number of the Marketing Cloud account.	',
          type: 'Number'
        },
        {
          name: 'OYBAccountID',
          info: 'The account ID number for any related On-Your-Behalf (OYB) accounts. This field applies to enterprise accounts only.	',
          type: 'Number'
        },
        {
          name: 'JobID',
          info: 'The job ID number for the email send	',
          type: 'Number'
        },
        {
          name: 'ListID',
          info: 'The list ID number for the list used in the send	',
          type: 'Number'
        },
        {
          name: 'BatchID',
          info: 'The batch ID number for any batches used in the send	',
          type: 'Number'
        },
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.	',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber	',
          type: 'Text (254)'
        },
        {
          name: 'EventDate',
          info: 'The date the survey response took place	',
          type: 'Date'
        },
        {
          name: 'Domain',
          info: 'The domain at which the click occurred	',
          type: 'Text (128)'
        },
        {
          name: 'SurveyID',
          info: 'The ID of the survey	',
          type: 'Number'
        },
        {
          name: 'SurveyName',
          info: 'The name of the survey',
          type: 'Text (100)'
        },
        {
          name: 'IsUnique',
          info: 'Whether the response is unique or not',
          type: 'Number'
        },
        {
          name: 'QuestionID',
          info: 'The ID of the survey question	',
          type: 'Number'
        },
        {
          name: 'QuestionName',
          info: 'The name of the survey question	',
          type: 'Text (50)'
        },
        {
          name: 'Question',
          info: 'The survey question	',
          type: 'Text (4000)'
        },
        {
          name: 'AnswerID',
          info: 'The ID of the answer	',
          type: 'Number'
        },
        {
          name: 'AnswerName',
          info: 'The name of the answer',
          type: 'Text (4000)'
        },
        {
          name: 'Answer',
          info: 'The Boolean answer to the survey question',
          type: 'Text (4000)'
        },
        {
          name: 'AnswerData',
          info: 'The text content of the survey answer',
          type: 'Text (MAX)'
        }
      ]
    },
    {
      name: '_UndeliverableSMS',
      channel: 'SMS',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_undeliverable_sms.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'MobileNumber',
          info: 'Mobile number for the subscriber	',
          type: 'Phone'
        },
        {
          name: 'Undeliverable',
          info: 'Indicates that the number is Held and that MobileConnect discontinued sending messages to the subscriber	',
          type: 'Boolean'
        },
        {
          name: 'BounceCount',
          info: 'Number of bounced SMS messages for subscriber	',
          type: 'Number'
        },
        {
          name: 'FirstBounceDate',
          info: 'The date when the first bounce occurred	',
          type: 'Date'
        },
        {
          name: 'HoldDate',
          info: 'The date when MobileConnect discontinued sending messages to the subscriber	',
          type: 'Date'
        },
      ]
    },
    {
      name: '_Unsubscribe',
      channel: 'Email',
      link: 'https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_unsubscribe.htm&type=5',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'JobID',
          info: 'The job ID number for the email send	',
          type: 'Number'
        },
        {
          name: 'ListID',
          info: 'The list ID number for the list used in the send	',
          type: 'Number'
        },
        {
          name: 'AccountID',
          info: 'Your account ID number	',
          type: 'Number'
        },
        {
          name: 'OYBAccountID',
          info: 'The account ID number for any related On-Your-Behalf accounts. This field applies to enterprise accounts only.	',
          type: 'Number'
        },
        {
          name: 'BatchID',
          info: 'The batch ID number for any batches used in the send	',
          type: 'Number'
        },
        {
          name: 'SubscriberID',
          info: 'The subscriber ID for the affected subscriber. This number represents the unique ID for each subscriber record.	',
          type: 'Number'
        },
        {
          name: 'SubscriberKey',
          info: 'The subscriber key for the affected subscriber',
          type: 'Text (254)'
        },
        {
          name: 'EventDate',
          info: 'The date the unsubscribe took place	',
          type: 'Date'
        },
        {
          name: 'IsUnique',
          info: 'Whether the event is unique or repeated	',
          type: 'Boolean'
        },
        {
          name: 'Domain',
          info: 'The domain at which the unsubscribe occurred	',
          type: 'Text (128)'
        },
      ]
    },

    /* HIDDEN DATAVIEWS */

    /* TEMPLATE */
    {
      name: 'NAME',
      channel: 'Email',
      link: '',
      deprecated: false,
      hidden: false,
      fields: [
        {
          name: 'FIELD_NAME',
          info: 'DESCRIPTION',
          type: 'Number'
        },
      ]
    },
  ]
}