import React from 'react'
import Layout from '../../components/Layout'
import {portfolio,project} from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'
import { GatsbyImage} from "gatsby-plugin-image"

export default function Projects({data}) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Welcome to our projects</h2>
        <h3>Creating a App and Websites for customers</h3>
        <div className={project}>
          {projects.map(project =>(
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email at {contact} for a Projects!</p>
    </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        stack
        title
        slug
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}

`
