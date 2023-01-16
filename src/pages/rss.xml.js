import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

const postImportResult = import.meta.glob('../**/*.md', { eager: true });
const posts = Object.values(postImportResult);

async function getPosts() {
  const unresolved = posts.map(async (post) => {
    const slug = post.url || post.file.split("/")[post.file.split("/").length - 2];

    return {
      link: slug,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.pubDate,
      customData: `<content:encoded><![CDATA[${await sanitizeHtml(post.compiledContent())}]]></content:encoded>`,
    };
});

return await Promise.all(unresolved);

}

export const get = async () => rss({
  title: 'Kyle Johnston, Writing',
  site: import.meta.env.SITE,
  description: 'This is where I write about things.',
  // SITE will use "site" from your project's astro.config.
  // list of `<item>`s in output xml
  // simple example: generate items for every md file in /src/pages
  // see "Generating items" section for required frontmatter and advanced use cases
  items: await getPosts(),
  xmlns: {
    content: "http://purl.org/rss/1.0/modules/content/",
  },
  // (optional) inject custom xml
  customData: `<language>en-us</language>`,
});
