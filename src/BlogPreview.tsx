
export interface BlogPreviewProps {
    id: number;
    title: string;
    preview: string;
}

const BlogPreview = ({id, title, preview}: BlogPreviewProps) => {
  return (
    <article className='blog-preview'>
        <a className='blog-link' href={`/blog/posts/${id}`}> <h3 className='title'>{title}</h3> </a>
        <p className='body'>{preview}</p>
    </article>
  )
}

export default BlogPreview;
