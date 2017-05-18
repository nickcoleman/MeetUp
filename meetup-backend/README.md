# Meetup Backend Server

## 01 - Basic Server Setup

Create the node.js server setup with a basic meetup model including Meetup Create & Read routes.


## 02 - Setup Meetup Groups

Setup Meetup Groups with basic group module/model. 
Groups will include meetups (ObjectId) 
A Meetup must be referenced by a group

Group Model:
  name: String
  description: String
  category: String
  Meetups: [Meetup]
