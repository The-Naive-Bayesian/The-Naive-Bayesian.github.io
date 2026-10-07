export interface Article {
    id: string;
    title: string;
    body: string;
}

export const articles: {[id: string]: Article} = {
  '1': {
    id: '1',
    title: 'Hello, world!',
    body: `This is a test article.
    I really hope I'm able to actually do this blog thing for real this time. It's frustrating that I can't just bring myself to use an exsiting platform or static site generator or whatever.
    Truly the developer mindset is a mental disorder sometimes lol.`
  }
}
