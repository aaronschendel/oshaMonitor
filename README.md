# OSHA Monitor - Keeps an eye out for the workers

## General Idea
HiveOS allows notifications to Discord and Telegram but I am a simple person - I just want a text message if my worker goes offline. Hence, this project.


# Configuration File
Place this file at the root directory

## oshamonitor_config.json
- hiveos.bearer_token
    - You can create a static Authentication Token on the HiveOS website. When you first log in go to Account and then scroll down to fine Authentication token. Click "Generate new Personal API-token". After generated click "Show" and after authenticating, copy the token into this field.
- twilio.alert_recipient
    - This is the phone number you would like to be notified if your rig goes down. Format is "+\[CountryCode\]\[PhoneNumber_DigitsOnly\].
- twilio.twilio_number
    - This is the phone number you have set up in Twilio to send text messages from. Format is "+\[CountryCode\]\[PhoneNumber_DigitsOnly\].
- twilio.account_sid
    - This is your String Identifier (SID) for Twilio. Can be found on Twilio homepage after logging in. [More Details](https://www.twilio.com/docs/glossary/what-is-a-sid)
- twilio.auth_token
    - This is your Auth Token for Twilio. Can be found on the Twilio homepage after logging in. [More Details](https://support.twilio.com/hc/en-us/articles/223136027-Auth-Tokens-and-How-to-Change-Them)
- general.refresh_interval
    - This sets the frequency of the polling to check worker status. The number is the delay in milliseconds. IE: 5 seconds is 5000.
```
    "hiveos": {
        "bearer_token": "your_hiveos_bearer_token"
    },
    "twilio": {
        "alert_recipient": "+1[your_number]",
        "twilio_number": "+1[your_twilio_number]",
        "account_sid": "your_account_sid",
        "auth_token": "your_auth_token"
    },
    "general" {
        "refresh_interval": "5000"
    }
```

# Important Notes
- This currently is only set up to work for the first worker in your HiveOS account. It will ONLY monitor this one worker currently. I only have one worker so I have not implemented more workers at this point and likely will not.