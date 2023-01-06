import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'


const Authmiddleware = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      return (
          <Layout >
            <div style={{
                  minHeight: 'calc(100vh - 250px)'
                }}>
              <Component {...props} />
            </div>
          </Layout>
      )
    }}
  />
)

Authmiddleware.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any
}

export default Authmiddleware
