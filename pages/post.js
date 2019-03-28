import {withRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import HackCard from '../components/HackCard'

const SinglePost = withRouter(props => (
    <Layout title={props.single_issue.title}>
        <HackCard {...props}/>
    </Layout>
))

SinglePost.getInitialProps = async function(context){
    const result = await fetch(`${process.env.DAILYHACK_GITHUB_API}/${context.query.number}`)
    const issue = await result.json()
    return {
        single_issue: issue
    }
}

export default SinglePost;