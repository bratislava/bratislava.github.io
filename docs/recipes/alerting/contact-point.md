# Contact Points

In this recipe we discuss how to setup a new [contact point](https://grafana.com/docs/grafana/latest/alerting/contact-points/), so you can better target your alert notification to relevant contacts.

To whom [Grafana](https://grafana.bratislava.sk/) sends the alerts is driven by [contact points](https://grafana.bratislava.sk/alerting/notifications). You can find the setting in "Alerting" (Bell icon on the left menu) section.

Currently, there are two ways Grafana can send you a alert notification.
  - A Grafana Bratislava Slack application/bot, that you can add to your channel or create a chat directly
  - Email address `grafana[at]devops.bratislava.sk`, that you can use to send a alert notification to you mailbox

The default setting is to send alerts to Slack Bratislava Innovation Grafana alerting channel. This should serve for most use-case and if you do not wish to change this, you don't need any additional setup when [creating your own alerts](./index.md).

_Note, that not all users can add contact points, you need to be Grafana administrator. If you can't access these [notification settings](https://grafana.bratislava.sk/alerting/notifications), please ask someone from DevOps to add it for you._

## Add new Slack channel or chat

To add a new Slack channel or chat as a contact point, we need to first add Grafana Slack App into the channel/chat.

To add Grafana App to the channel

  1. We need to open a channel settings and click `Integrations`
  2. There you will see `"Add an App"` button. When clicked, a list of all available application will show up
  3. We need to select correct Grafana application. Our application has a description `"Grafana @ grafana.bratislava.sk application"`

To be able to receive alerts in a chat

1. You just need to actually start a chat with Grafana App  
   You can start it as you would start any other chat with any other person and just type into `"To:"` field "Grafana" 

_Note, that the application is only part of Bratislava Innovation group and your channel needs to be part of it also._

If you have successfully integrated Grafana into your channel/chat, then it is rest is very straight forward. 

  1. In [Grafana's notification settings](https://grafana.bratislava.sk/alerting/notifications) click `"+ New contact point"` button
  2. Give it a name, like `"Slack - <name of the channel>"` or `"Slack - <name of the person>"` in case of a chat, e.g., `"Slack - DevOps"` or `"Slack - jozko.mrkvicka"`
  3. Select a contact point type to "Slack"
  4. Specify recipient, by either giving the name of the channel or name of the person in case of chat or respective Slack IDs. You can find the Slack ID in the channel/chat settings.
  5. Give it a Bot token. If you are administrator of the App you can find the token in [Grafana App Settings](https://api.slack.com/apps/A0429S9L3E3/oauth), if not, ask somebody from DevOps to provide a token for you.

And that's it. You have successfully added a new contact point into Grafana, you can test it by hitting `"Test"` button.  

If you want to receive specific alerts on this channel you will also need to create a notification policy to match those alerts. You can look at "Link alerts with a contact point" section.

## Add new email address

Grafana email alerting is setup through our [mailgun](https://www.mailgun.com/) smtp server with address `grafana[at]devops.bratislava.sk`. 

To add an email contact point, we need to 
  1. Visit  Grafana alerting [notification settings](https://grafana.bratislava.sk/alerting/notifications)
  2. Click `"+ New contact point"` button
  3. Give it a name, like `"Email - <address>"` or `"Email - <project>"`
  4. Specify email addresses to which to send notifications

And that's it. Grafana should be sending alert notification, you can test it by hitting `"Test"` button.

If you want to receive specific alerts on this email you will also need to create a notification policy to match those alerts. You can look at "Link alerts with a contact point" section.

## Link alerts with a Contact Point

Setting up a [contact point](https://grafana.com/docs/grafana/latest/alerting/contact-points/) is just a half of the work. If you want to send specific alerts to specific contacts, you need to also setup a ["Notification Policy"](https://grafana.com/docs/grafana/latest/alerting/notifications/). You can find it in alerting section (Bell icon on the left menu), under ["Notification policies"](https://grafana.bratislava.sk/alerting/routes).

To build a notification policy we need to 
  1. First hit the "+ New notification policy" button
  2. Add a matcher. This will create rules, based on which we will "match" or link specific alerts with your contact point
    - Hit "+ Add matcher" button
    - Add as many label conditions as you need, to match only that group of alerts that you need
  3. Select a contact point
  4. (Optional) You can also setup a ["Mute Timing"](https://grafana.com/docs/grafana/latest/alerting/notifications/mute-timings/) or if there are already some, you can choose one. This will "mute" alert notification based on specified conditions. For example, you might want to receive alerts only during your working hours, so you would create a mute timing that would pause notifications during your off time. 

  And that's it. Now you have linked your contact point with your policy and should be receiving alert notifications. 
