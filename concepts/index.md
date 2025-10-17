# Overview

Understanding the core concepts behind Cosmoslide and how it integrates with the Fediverse.

## What is Cosmoslide?

Cosmoslide is a decentralized slideshare platform built on the ActivityPub protocol. It allows users to share slide presentations in PDF format across the Fediverse, enabling federated content sharing and social interactions.

## Architecture

Cosmoslide consists of several key components:

### Content Storage

PDF files are stored on individual Fediverse instances, maintaining the decentralized nature of the platform. Each instance manages its own storage and serves content to users across the network.

### ActivityPub Protocol

Cosmoslide uses ActivityPub to federate slide content. This means:
- Slides can be shared across different Fediverse instances
- Users can interact with slides from any compatible instance
- [TODO] Standard ActivityPub activities (like, share, reply) work with slide content

### User Interface

The platform provides a web-based interface for:
- Uploading and managing slide decks
- Browsing and viewing slides from across the Fediverse
- Interacting with slide content through social features

## Key Features

### Decentralization

No single point of control - each instance operates independently while participating in the larger Fediverse network.

### Federation

Slides are automatically shared with other instances, allowing content to reach audiences across different servers.

### Standard Interactions

All standard Fediverse interactions apply to slides:
- Following authors
- [TODO] Liking and boosting slides
- [TODO] Commenting on presentations
- [TODO] Bookmarking for later

## How It Works

1. **Upload** - Users upload PDF slide decks to their Fediverse instance
2. **Publish** - The content is wrapped in ActivityPub activities
3. **Federate** - Other instances receive and display the slide content
4. **Interact** - Users across the Fediverse can view and engage with the slides

## Learn More

Dive deeper into specific concepts:

- [PDF Sharing](/concepts/pdf-sharing) - How PDF storage and delivery works
- [ActivityPub Integration](/concepts/activitypub) - Technical details of federation
- [Federation](/concepts/federation) - How slides are discovered across instances
