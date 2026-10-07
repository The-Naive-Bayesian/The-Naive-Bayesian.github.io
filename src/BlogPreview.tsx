
export interface BlogPreviewProps {
    id: number;
    title: string;
    preview: string;
}

const BlogPreview = ({id, title, preview}: BlogPreviewProps) => {
  return (
    <article className='blog-preview'>
        <a className='blog-link' href={`/blog/posts/${id}`}> <h2 className='title'>{title}</h2> </a>
        <p className='body'>{preview}</p>
    </article>
  )
}

export default BlogPreview;
