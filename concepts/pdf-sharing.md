# PDF Sharing

How PDF files are stored and shared across the Fediverse.

## Storage

When a user uploads a PDF:
1. The file is stored on their home instance
2. Metadata (title, description) is saved
3. A URL is generated for accessing the PDF

Each instance stores and serves its own users' PDF files.

## Delivery

PDFs are served directly from the hosting instance via HTTPS. When users from other instances view a slide deck, their client fetches the PDF from the origin instance.

## Format

Cosmoslide currently supports standard PDF files. The system validates:
- File type (must be PDF)
- File size (within instance limits)

