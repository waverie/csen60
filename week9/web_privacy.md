# Web Privacy

## Notes

Data Collection---How?

- Form entry
- Mobile OS-provided
- Cookies
- Behavior Logging

Form entry:

- Social networks
    - Share info w/ others
    - Connect w/ friends
    - Attract potential employers

- Online shopping
    - Credit card 4 payment
    - Home address 4 shipping

- Online finances
    - Banking
    - Investments
    - Tax

Mobile OS-provided:

- Contacts:
    - "Find ur friends on ___"
    - Instant, massive social graph

- Photos:
    - May include metadata

- Location:
    - "Find ___ near u"

Cookies:

Definiton: Name/value pair created by website to store info on computer

- Why would user want cookies?
    - User authentication (remember me)
    - Site preferences
    - Contents of shopping carts

- Why would developer use cookies?
    - Better UX
    - Ad tracking
    - Site metrics

Behavior Logging:

- Any action user takes on webpage can be logged
- HTML event listeners!
    - Clicks
    - Hovers
- Time between actions
    - How long u spend looking @ post
    - Did u skip ad? At what point in ad?

Data Applications:

- Ad Tracking
- Improve search results
- Improve product recommendations
- Drive specific metric

Ad Tracking:

- How r all these products free??
    - Facebook/Twitter/LinkedIn
    - Google
    - YouTube/SoundCloud
- Goal: convert ad seen or on-screen to some action
- Better targeted ad, better chance of conversion ($$$)

Search:

- Improve results
    - Did user click link?
        - Was it top result?
    - Did user need to write another query?
- Predictive suggestions
- PageRank
- Natural language processing

Recommendation:

- "Based on ___ u liked"
- Given previous action, provide most likely next step 4 user
- Given someone's social graph, they may be more likely to engage w/ recommendation
- Ad targeting's recommendation
- Collaborative filtering

Drive a metric:

- Optimize webpage's behavior 4 something that can be quantitatively measured
- Iterative UI improvements
- Ex's
    - Email client: decrease time to reply to emails
    - Increases engagement w/ feature that generates more data
    - Increase behavior that fits more profitable business model
- A/B Testing

Big Data:

- Join from many disparate sources
- 1 person's data might be useful, but would require manual work to properly language
- Aggregation enables scaled-up analysis & automation
- Can create user groups: cohort analysis
- Can predict behaviors, political tendencies & more w/ seemingly unrelated data points

Lots of Sensitive Info:
- Personally identifiable info:
    - Name, address, phone, email
    - Demographics: age, race, gender
    - Past contributions, purchases, rental, friends, ...
- Financial Info:
    - Credit cards
    - Bank accounts
- Legally sensitive
    - Health info (HIPPA)
    - Student info
    - Info from children (COPPA)

Privacy Policy:

- Statement saying what website does w/ any info it collects
    - Or otherwise obtains from user
    - & why website needs this info
- Generally considered legally binding
    - Must obey laws of land
    - Different lands've different laws
- Written in dense legal language
- Users may or may not pay attention

Role:
- Delineate what types of info r collected
    - Whether that info's used immediately or saved
- Specify why info's needed
    - Not always done
    - Useful if application's not obvious
- Specify who owns info
    - If u own info, company can't use it freely
    - If they own info things r more flexible
- Specify what application can do w/ info
    - Use in application only
    - Use in application & owning company
    - Use in application, owning company, affiliates
    - Share (sell to) w/ related businesses
    - Share (sell to) w/ anyone
- Specify which controls u have over info
    - Can u stop it from being collected
    - Can u request any collected info be discarded

Developer - Legal Responsibility:

- Privacy has legal implications
    - Already covered by laws in many places
    - Already covered by laws in many domains
    - European law's generally much stricter than U.S.
    - China's policy of censorship
- Responsible 4 breaches of policy
    - Need to use "best efforts" to avoid them
    - Implications can be large
        - Fines, imprisonment
        - Cost to protect consumer
        - Cost related to breach

General Data Protection Regulation (GDPR):

- Protects citizens of E.U.
    - Any service w/ E.U. users must comply
    - Web's global
- Users must provide consent
    - Services must define how data'll be used
    - Can't collect data 4 1 purpose, then use later 4 another
- Must collect min amount of data to achieve stated purpose
    - Don't need someone's age to add 'em to newsletter
- Consumers may view all data collected about 'em
- Consumers've right to be "forgotten"

California Consumer Privacy Act (CCPA):
- Any service w/ CA users must comply
- Similar to, less strict than GDPR
    - Opt-out vs. Consent (Opt-in)
    - "Don't sell my personal data"