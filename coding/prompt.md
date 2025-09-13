# CoreSpeed Deck Template - AI Agent Instructions

## Slide Generation Rules

1. SLIDE LOCATION AND NAMING
   - Place all slides in `src/slides` directory
   - Use lower case keywords of generated slide content and a random number
     connected with hyphens as the ID of the slide. For example,
     `introduction-to-deckspeed-1123` is a valid ID.
   - Use the format of `{slideId}.tsx` as the filename of the slide file. For
     example, `introduction-to-deckspeed-1123.tsx` is a valid slide filename.

2. SLIDE METADATA MANGEMENT
   - All metadata of slides are stored in JSON file `src/slides/metadata.json`
   - Example `metadata.json`:
     ```json
     {
       "title": "DeckSpeed",
       "description": "Generate beautiful slide decks with AI",
       "author": "CoreSpeed Inc.",
       "paperSize": "A4",
       "orientation": "landscape",
       "order": {
         "welcome-page-2134": 1,
         "introduction-to-deckspeed-1123": 2,
         "lets-get-started-5683": 3
       }
     }
     ```
   - To reorder a slide, please only modify the ordering of slide IDs in the
     `order` list in metadata.

3. SLIDE COMPONENT STRUCTURE
   - Export a default function named `Slide`
   - Use TypeScript for type safety
   - Example structure:
     ```tsx
     export default function Slide() {
       return (
         <div className="w-full h-full flex items-center justify-center">
           <h1 className="text-4xl font-bold text-gray-800">Slide Content</h1>
         </div>
       );
     }
     ```

4. STYLING GUIDELINES
   - Use Tailwind CSS classes for styling
   - Ensure slides are responsive with `w-full h-full`
   - Center content using flex utilities
   - Use consistent text sizes:
     - Headings: text-4xl or larger
     - Body text: text-base to text-2xl
   - Use semantic color classes (text-gray-800, etc.)

5. CONTENT ORGANIZATION
   - One main concept per slide
   - Use semantic HTML elements (h1, h2, p, etc.)
   - Maintain visual hierarchy
   - Keep content centered unless design requires otherwise

6. ACCESSIBILITY
   - Use semantic HTML elements
   - Include alt text for images
   - Maintain sufficient color contrast
   - Ensure text is readable at all sizes

7. PERFORMANCE
   - Avoid unnecessary wrapper components
   - Keep component logic simple
   - Minimize external dependencies

8. PREVIEW AND LAYOUT CONSIDERATIONS
   - Consider support for portrait or landscape orientations indicated in slide
     metadata.
   - You must only use supported paper size values in slide metadata, which are
     "A4", "A3", "A5", "LETTER", "LEGAL", "TABLOID", "PRESENTATION", "WIDE".
     Note that "PRESENTATION" refers to regular 4:3 aspect ratio, and "WIDE"
     refers to 16:9 aspect ratio.
   - You must only use supported paper orientation values in slide metadata,
     which are "landscape" and "portrait".

9. AVAILABLE GRAPHICS LIBRARIES
   - `Chart.js`: used for creating charts
   - `Recharts`: used for creating charts, but do not use it with
     `ResponsiveContainer`. Also do no use it unless absolutely necessary
   - `TanStack react-table`: used for creating tables
   - You may also use vanilla JavaScript/CSS for creating charts/tables or other
     graphics elements

## IMPORTANT NOTES

- DO NOT use the SlideLayout component (removed from actual implementation)
- DO NOT add complex routing logic (handled by the framework)
- DO NOT modify the app directory structure
- DO NOT add external dependencies without clear justification

## File Modification Blacklist

Under no circumstances should you modify the following files:

- `src/components/*`
- `src/types/*`
- `.cursorrules`
- `.zypherrules`
- `README.md`
- `tailwind.config.ts`
- `tsconfig.json`
- `vite.config.js`

## Best Practices

1. Start with a clear slide outline
2. Generate slides sequentially
3. Maintain consistent styling across all slides
4. Test preview after generating each slide
5. Validate TypeScript types
6. Follow the established patterns in existing slides

Remember: The goal is to create beautiful, responsive slides that work
seamlessly in DeckSpeed while maintaining simplicity and performance.
