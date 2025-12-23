import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const news = defineCollection({
	// Load Markdown and MDX files in the `src/content/news/` directory.
	loader: glob({ base: "./src/content/news", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const clubHub = defineCollection({
	// Load Markdown and MDX files in the `src/content/notices/` directory.
	loader: glob({ base: "./src/content/club-hub", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const stickynotes = defineCollection({
	// Load JSON Data in the `src/content/stickyNotes.json` file.
	loader: file("./src/content/stickyNotes.json"),
	// Type-check frontmatter using a schema
	schema: z.object({
		
		name: z.string(),
		email: z.string(),
		club: z.string(),
		message: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		
	}),
});



export const collections = { news, clubHub, stickynotes };
