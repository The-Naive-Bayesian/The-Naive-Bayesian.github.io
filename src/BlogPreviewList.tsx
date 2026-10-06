import BlogPreview from './BlogPreview';
import type {BlogPreviewProps} from './BlogPreview';

interface BlogPreviewListProps {
    previews: Array<BlogPreviewProps>;
}

const BlogPreviewList = ({previews}: BlogPreviewListProps) => {
  return (
    <ul className='blog-preview-list'>
      {
        previews.map(
          ({id, title, preview}) => (
            <li key={id} className='blog-preview-item'>
              <BlogPreview  id={id} title={title} preview={preview} />
            </li>
          )
        )
      }
    </ul>
  )
};

export default BlogPreviewList;
