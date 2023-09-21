import * as React from "react"
import Layout from "../components/Layout"
import {header,btn} from '../styles/home.module.css'
import { Link, graphql,} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({data}) {
  const image = getImage(data.file)

  return (
    <Layout>
      <section className={header}>
      <div>
        <h2>Design</h2>
        <h3>Develop and deploy</h3>
        <p>App developer and web developer</p>
        <Link className={btn} to="/projects">My Web Projects</Link>
      </div>
         <GatsbyImage image={image} alt="banner image"/>
    </section>
    </Layout>
  )
}


export const query = graphql`

query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(width: 480)
    }
  }
}

`

