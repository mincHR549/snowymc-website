import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    order: { type: 'number', required: false },
    date: { type: 'string', required: false }, // 支持 年-月-日
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^docs\//, ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/docs/${doc._raw.flattenedPath.replace(/^docs\//, '')}`,
    },
    headings: {
      type: 'json',
      resolve: (doc) => {
        // 简易 TOC：在页面构建时提取二级、三级标题（可进一步用 remark 抽取）
        const regex = /^(##|###)\s+(.+)$/gm
        const matches = Array.from(doc.body.raw.matchAll(regex))
        return matches.map((m) => ({
          depth: m[1] === '##' ? 2 : 3,
          title: m[2],
          id: m[2]
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-'),
        }))
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
})
