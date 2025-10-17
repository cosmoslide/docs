# Federation

How slides are shared and discovered across Fediverse instances.

## What is Federation?

Federation allows independent Cosmoslide instances to communicate and share content using ActivityPub. Each instance operates independently while participating in the larger Fediverse network.

## Content Distribution

When a slide is published:
- **Locally** - Stored in the local database, visible to local users
- **Remotely** - Delivered to followers on other instances via ActivityPub

## Discovery

### Following Users
When you follow someone on another instance:
1. Your instance sends a `Follow` activity
2. Their future slides are delivered to your instance
3. You see their slides in your timeline

### Timelines
- **Home** - Slides from users you follow (local and remote)
- **Local** - Only slides from your instance
- **Federated** - Slides from all known instances

## [TODO] Content Caching

When your instance receives a remote slide:
- **Metadata** - Cached locally (title, description, author)
- **PDF File** - Remains on the origin instance

The PDF is fetched directly from the hosting instance when viewed.

## [TODO] Visibility

Different visibility levels affect federation:
- **Public** - Federated to all instances
- **Unlisted** - Federated but not in public timelines
- **Followers-only** - Only sent to approved followers

## Moderation

Instance administrators can:
- [TODO] Block instances to prevent communication
- [TODO] Moderate content from remote instances
- [TODO] Enforce local moderation policies
