import React from 'react'
import { coffeeOptions } from '../utils'

const CoffeeForm = () => {
  return (
    <>
    <div className="section-header">
      <i className='fa-solid fa-pencil'/>
      <h2>Start Tracking Today...</h2>
    </div>
    <h4>Select Coffee type</h4>
    <div className='coffee-grid'>
      {coffeeOptions.slice(0, 5).map((opt, optIndex) => {
        return (
          <button className='button-card' key={optIndex}>
            <h4>{opt.name}</h4>
            <p>{opt.caffeine} mg</p>
          </button>
        )
      })}
      <button className='button-card'>
        <h4>Other</h4>
        <p>n/a</p>
      </button>
    </div>

    <select id="coffee-list" name='coffee-list'>
      <option value={null}>Select type</option>
      {coffeeOptions.map((opt, optIndex) => {
        return (
          <option value={opt.name} key={optIndex}>
            {opt.name} ({opt.caffeine} mg)
          </option>
        )
      })}
    </select>
    </>
  )
}

export default CoffeeForm