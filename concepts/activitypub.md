# ActivityPub Integration

How Cosmoslide uses ActivityPub to federate slide content.

## What is ActivityPub?

ActivityPub is a W3C standard for decentralized social networking. Cosmoslide uses it to:
- Share slides across instances
- [TODO] Enable social interactions (likes, boosts, comments)
- Federate with other Fediverse platforms

## Slides as ActivityPub Objects

Slides are represented as ActivityPub objects with a PDF attachment:

```json
{
  "@context": "https://www.w3.org/ns/activitystreams",
  "type": "Article",
  "id": "https://instance.example/slides/123",
  "name": "My Presentation Title",
  "content": "A description of the slide deck",
  "published": "2024-01-15T10:00:00Z",
  "attributedTo": "https://instance.example/users/alice",
  "attachment": [
    {
      "type": "Document",
      "mediaType": "application/pdf",
      "url": "https://instance.example/media/slides-123.pdf"
    }
  ]
}
```

## Publishing Flow

1. User uploads PDF with metadata
2. System creates ActivityPub object with PDF attachment
3. Object wrapped in `Create` activity
4. Activity delivered to followers' inboxes

## Social Interactions

Standard ActivityPub activities work with slides:
- [TODO] **Like** - Appreciation
- [TODO] **Announce** - Boost/reshare
- **Note** - Comments and replies

## Compatibility

Cosmoslide works with other Fediverse platforms:
- Mastodon
- Pleroma
- Misskey
- Other ActivityPub-compliant software

Users on these platforms can view, like, boost, and comment on slides.
