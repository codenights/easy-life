import Layout from 'components/layout'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getAllPostIds, getPostData, PostData } from 'lib/posts'

const Post: NextPage<{ postData: PostData }> = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params?.id as string)

  return {
    props: {
      postData
    }
  }
}
