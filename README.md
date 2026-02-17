# Project Dashboard

A frontend module built using React to manage and view projects in a fictional internal system.

---

## Tech Stack

- React (Vite)
- React Router
- Functional Components
- React Hooks (useState, useMemo)
- Basic CSS

No external UI libraries were used.

---

## Features

### 1. Project List View
Displays:
- Project Name
- Client Name
- Status (Active / On Hold / Completed)
- Start Date
- End Date

Mock data is stored locally in:
```
src/data/projects.js
```

---

### 2. Client-Side Filtering

Supports:
- Search by project name or client name
- Multi-select status filtering

Filtering:
- Does NOT mutate original data
- Uses `useMemo` for memoized derived state
- Works correctly in combination

---

### 3. Project Detail View

- Accessible via route: `/project/:id`
- Displays all project fields
- Handles missing project IDs
- Includes an additional custom field:

Extra Field Added:
- `priority` (High / Medium / Low)

This demonstrates extensibility beyond base requirements.

---

### 4. Edge Case Handling

The UI gracefully handles:

- No projects available
- No results after filtering
- Long project names (text wrapping + title tooltip)
- Missing optional fields (e.g., End Date)
- Invalid project ID routes

Reusable `EmptyState` component ensures consistent UI for empty scenarios.

---

### Architectural Decisions:

- Clear separation of pages vs reusable components
- Stateless presentation components where possible
- Filtering logic derived, not stored
- No global state (not required at this scale)

---

## Setup Instructions

1. Clone repository

```
git clone <https://github.com/APURVA-DIVAKAR/project-dashboard/blob/main/README.md>
```

2. Install dependencies

```
npm install
```

3. Run development server

```
npm run dev
```

4. Open in browser

```
http://localhost:5173
```

---

## Testing Considerations

Manual verification performed for:
- Combined filters
- Case-insensitive search
- Empty results
- Invalid project ID
- Missing optional fields

---