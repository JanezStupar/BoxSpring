# About
BoxSpring is CouchApp based logging application. 

The purpose of this document is to provide overview of functionality, installation instructions and a short term roadmap for the application.

# Install

## Prerequisites

1. CouchDB v1.0.0 or above  [couchdb](https://github.com/apache/couchdb)
2. couchapp v0.7.5 or above [couchapp](http://couchapp.org/page/installing)

## Get the application

### Pull it off GitGub:
    git clone git://github.com/JanezStupar/BoxSpring.git
    cd BoxSpring
    couchapp push . http://user:pass@localhost:5984/boxspring

### Replicate it off CouchDB:

*Coming soon*

## Configure the application

## Configure vhosts

You need to set a virtual host, else the rewrites and application URLs may not
work correctly. The vhost should point to the _rewrite function of the
BoxSpring database. e.g.:

    boxspring.mycouch = /boxspring/_design/syslog/_rewrite

# Architecture

## Configuration documents

## Widgets

# Roadmap
