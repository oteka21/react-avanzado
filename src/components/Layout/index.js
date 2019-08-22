import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export function Layout ({ title, subtitle, children }) {
  return <Fragment>
    <Helmet>
      {title && <title>{title} | Petgram</title>}
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
    {children}
  </Fragment>
}
