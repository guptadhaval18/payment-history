import React from 'react'

const Summary = () => {
  return (
    <div className='summary'>
      <div className='card1'>
        <div className='row1'>
          <div className='col'>
            First Name: <strong>Jon</strong>
          </div>
          <div className='col'>
            Last Name: <strong>Revell</strong>
          </div>
        </div>
        <div className='row2'>
          <div>Current Available to Redeem:</div>
          <div>
            <strong>$ 150.00</strong>
          </div>
        </div>
        <div className='row2'>
          <div>PetPeeps Points This Year:</div>
          <div>
            <strong>2,318</strong>
          </div>
        </div>
      </div>

      <div className='card2'>
        <div className='row1'>
          <div className='col'>Sale Price</div>
          <div className='col'>
            <h3>
              <strong>$4328.41</strong>
            </h3>
          </div>
        </div>
        <div className='row1'>
          <div className='col'>Return Price</div>
          <div className='col'>
            <h3>
              <strong>$9.41</strong>
            </h3>
          </div>
        </div>
      </div>

      <div className='card3'>
        <div className='col1'>
          <h3>178</h3>
          <div>Sale QTY</div>
        </div>
        <div className='border1'></div>
        <div className='col1'>
          <h3>4</h3>
          <div>Return QTY</div>
        </div>
      </div>

      <div className='card4'>
        <div className='col1'>
          <h3>84</h3>
          <div>Sale Receipt Count</div>
        </div>
        <div className='border2'></div>
        <div className='col1'>
          <h3>1</h3>
          <div>Return Receipt Count</div>
        </div>
      </div>

      <div className='card5'>
        <div className='row1'>
          <div className='col'>Sale Price</div>
          <div className='col'>
            <h3>
              <strong>$4328.41</strong>
            </h3>
          </div>
        </div>
        <div className='row1'>
          <div className='col'>Return Price</div>
          <div className='col'>
            <h3>
              <strong>$9.41</strong>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
