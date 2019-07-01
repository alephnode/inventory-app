/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { Link } from 'react-router-dom'

function AddBox() {
  const [values, setValues] = React.useState({ box: '', items: '' })
  const handleChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value })
  const handleSubmit = async e => {
    e.preventDefault()
    let result
    const res = await fetch('http://localhost:8811/boxes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    try {
      result = await res.json()
    } catch (e) {
      result = e
    }
    return result
  }
  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="box">Box Name</label>
        <input id="box" type="text" name="box" onChange={handleChange} />
        <label htmlFor="items">Items</label>
        <textarea id="items" name="items" onChange={handleChange} />
        <input type="submit" value="Add" />
      </form>
      <Link to="/inventory">Back to inventory</Link>
    </div>
  )
}

export default AddBox
