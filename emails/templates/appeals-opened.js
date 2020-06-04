const {
  action,
  addressBadge,
  base,
  infobox,
  link,
  trimMultiline,
} = require('../template-utils')
const { accountData } = require('../helpers')

module.exports = function() {
  return {
    subject: 'Appeals are open for Dispute {{disputeId}}',
    template: base(
      {
        title: 'Notifications',
        subtitle: `Your account ${addressBadge()} received a notification on {{date}}`,
      },
      `
        ${infobox({
          mode: 'appeals-opened',
          primary: `
            Appeals are now open for a Preliminary Ruling of ${link(
              'Dispute #{{disputeId}}',
              '{{disputeUrl}}',
              { nowrap: true }
            )}`,
          secondary: trimMultiline(`
            Now that Voting has ended, Preliminary Rulings can be appealed by
            anyone, including you. If you disagree with the ruling made by your
            fellow jurors and believe it will be overturned by a larger set of
            jurors, you can appeal the dispute and earn a reward if your appeal
            is successful.
          `),
        })}
        ${action('Appeal Ruling', '{{disputeUrl}}', {
          padding: '16px 0 0',
        })}
      `
    ),
    templateText: `
      Aragon Court Notifications

      Your account {{account}} received a notification on {{date}}:

      Appeals are now open for a Preliminary Ruling of Dispute #{{disputeId}}.

      Now that Voting has ended, Preliminary Rulings can be appealed by
      anyone, including you. If you disagree with the ruling made by your
      fellow jurors and believe it will be overturned by a larger set of
      jurors, you can appeal the dispute and earn a reward if your appeal
      is successful.

      Appeal Ruling: {{disputeUrl}}

      This service is provided by Aragon One AG [1]. You are receiving this email
      because you are subscribed to Aragon Court Email Notifications. You can
      contact us at support@aragon.org if you not longer wish to receive these.

      [1] https://aragon.one/
    `,
    mockData: {
      ...accountData('0xef0f7ecef8385483ac8a2e92d761f571c4b782bd'),
      date: 'Thursday, 17 Dec. 2019',
      disputeId: '14',
      disputeUrl: 'https://example.org/',
    },
  }
}