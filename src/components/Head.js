import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import favicon from '../images/icons/iconlogo1.png'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }
  `)

  return (
    <Helmet title={`${title}  |  ${data.site.siteMetadata.title}`}
      link={[
        { rel: 'icon', type: 'image', href: `${favicon}` },
      ]} />
  )
}

export default Head