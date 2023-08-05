import React from 'react'

function CarInfo({ params }: any) {
  return (
    <div>
        <h1>CarInfo</h1>
        <h1>Car ID: {params.carid}</h1>
    </div>
  )
}

export default CarInfo