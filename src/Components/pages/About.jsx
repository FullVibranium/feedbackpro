import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'

function About() {
  return (
    <div>
      <Card>
          <h2>This is about page</h2>
          <p>This is my first copy project</p>
          <p>Version 1.0.1</p>
          <Link to={'/'}>Home</Link>
      </Card>
    </div>
  )
}

export default About
