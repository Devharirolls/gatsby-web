import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage} from "gatsby-plugin-image"
import {details,featured,htmls} from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({data}){
  console.log(data);
  const {html} = data.markdownRemark
  const {title,stack,featuredImg} = data.markdownRemark.frontmatter


  return (
    <Layout>
        <div className={details}>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className={featured}>
                <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData}/>
            </div>
            <div className={htmls} dangerouslySetInnerHTML={{__html:html}}/>
        </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      stack
      featuredImg {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

`


