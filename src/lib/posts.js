import fm from 'front-matter';

// Get all markdown files from the posts directory
const postFiles = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });

export async function getPosts() {
    const posts = [];

    for (const path in postFiles) {
        const rawContent = await postFiles[path]();
        const { attributes } = fm(rawContent);
        const slug = path.split('/').pop().replace('.md', '');

        posts.push({
            slug,
            ...attributes,
            body: rawContent, // Include full content for search
        });
    }

    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
    const rawContent = await postFiles[`../posts/${slug}.md`]();
    const { attributes, body } = fm(rawContent);
    return { data: attributes, content: body };
}
