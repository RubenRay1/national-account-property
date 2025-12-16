# Friday BMS App

## Excel Data Lookup & Search Portal

A Python Flask web application that connects to DynamoDB to provide searchable access to business data.

### Features
- **Real-time Search**: Search across all fields in the database
- **Responsive Design**: Works on desktop and mobile devices
- **DynamoDB Integration**: Direct connection to excel-data table
- **BMS Branding**: Professional UI with BMS colors and styling

### Tech Stack
- **Backend**: Python Flask
- **Database**: AWS DynamoDB (excel-data table)
- **Frontend**: Vanilla JavaScript, CSS Grid
- **Hosting**: AWS Amplify

### Local Development
```bash
pip install -r requirements.txt
python app.py
```

### Deployment
Deploy to AWS Amplify using the included `amplify.yml` configuration.

### Live Application
- **Current URL**: https://d1uyw9ozifvivp.amplifyapp.com
- **App ID**: d1uyw9ozifvivp

### Data Source
Connects to the `excel-data` DynamoDB table containing company business process information including payment terms, work authorization, invoice delivery, and project management details.
