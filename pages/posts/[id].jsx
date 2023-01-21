import Layout from '../../components/layout';
import Date from '../../components/date';
import Head from 'next/head';

import utilStyles from '../../styles/utils.module.css';

import { getAllPostIds, getPostData } from '../../lib/posts';


//////    Returns array of possible values for [id]

export async function getStaticPaths() {

  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

//////    Fetches necessary data for post with [id]

//  params prop is current [id] key/val pair
export async function getStaticProps({ params }) {

  // getPostData asynchronous, so use await
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}



export default function Post({ postData }) {

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}