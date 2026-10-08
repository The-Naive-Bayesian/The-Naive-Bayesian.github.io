import {useContext} from 'react';
import {articles} from './data/articles.ts'

interface ArticleProps {
    id: string;
    title: string;
    body: string;
}

const ArticleWrapper = () => {
  const postUrlPattern = /\/blog\/posts\/(?<id>\d+)/;

  const found = window.location.pathname.match(postUrlPattern);
  if (!found
      || !found.groups
      || !found.groups['id']
      || !articles[found.groups['id']]
  ) return (<h2 className='post-404'>Post not found!</h2>);
  const post = articles[found.groups['id']];

  return <Article id={post.id} title={post.title} body={post.body} />;
}

const Article = ({title, body}: ArticleProps) => {
  const paragraphs: string[] = body.split('\n');

  return (
    <article className='blog-post'>
      <h2 className='blog-post-title'>{title}</h2>
      {
        paragraphs.map((p) => <p className='blog-post-body'>{p}</p>)
      }
    </article>
  )
}

export default ArticleWrapper;
