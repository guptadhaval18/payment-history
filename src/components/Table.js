import React, { useEffect, useState } from 'react'
import { throttle, cloneDeep } from 'lodash'
import allData from './data/data.json'
import Entry from './Entry'

const Table = () => {
  const [countPerPage, setCountPerPage] = useState(2)
  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState(allData)
  const [collection, setCollection] = useState(
    cloneDeep(allData.slice(0, countPerPage))
  )
  const searchData = React.useRef(
    throttle((val) => {
      const query = val.toLowerCase()
      setData(
        cloneDeep(allData.filter((item) => item.rcptNo.indexOf(query) > -1))
      )
    }, 400)
  )

  useEffect(() => {
    searchData.current(value)
    setCollection(
      data.slice((currentPage - 1) * countPerPage, currentPage * countPerPage)
    )
  }, [data, countPerPage, value, currentPage])

  const handleChange = (event) => {
    setValue(event.target.value)
    searchData.current(value)
  }

  const handleNoRows = (event) => {
    setCountPerPage(event.target.value)
    setCurrentPage(1)
  }

  const handlePageNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePagePrev = () => {
    setCurrentPage(currentPage - 1)
  }
  return (
    <>
      <div className='header2'>
        <h3>Purchase History</h3>
        <form className='formSearch'>
          <label htmlFor='from'>FROM</label>
          <input type='date' id='from' />
          <label htmlFor='to'>TO</label>
          <input type='date' id='to' />
          <input
            type='text'
            placeholder='&#xf002; Search'
            name='search'
            value={value}
            onChange={handleChange}
          />
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input type='checkbox' id='date' name='date' value='Date' />
              <label htmlFor='date'> Date &#xf107;</label>
            </th>
            <th>Rcpt Type &#xf107;</th>
            <th>Rcpt# &#xf107;</th>
            <th># of items &#xf107;</th>
            <th>Total QTY &#xf107;</th>
            <th>Recept Sub Total &#xf107;</th>
            <th>Recept Discount &#xf107;</th>
            <th>Recept Amt &#xf107;</th>
            <th>Pts Peeps &#xf107;</th>
            <th>Stores# &#xf107;</th>
            <th>Tender Type &#xf107;</th>
            <th>Cashier &#xf107;</th>
          </tr>
        </thead>
        <tbody>
          {collection.map((entry) => (
            <Entry entry={entry} />
          ))}
        </tbody>
      </table>
      <div className='footer'>
        <form className='perPage'>
          <label className='gray' htmlFor='noRows'>
            Rows per page:
          </label>
          <select
            id='noRows'
            name='noRows'
            onChange={handleNoRows}
            defaultValue={2}
          >
            <option value='2'>2</option>
            <option value='4'>4</option>
            <option value='10'>10</option>
          </select>
        </form>
        <p>1-100 of 100</p>
        {currentPage !== 1 && (
          <button className='pageButton' onClick={handlePagePrev}>
            &#xf104;
          </button>
        )}
        {currentPage < data.length / countPerPage && (
          <button className='pageButton' onClick={handlePageNext}>
            &#xf105;
          </button>
        )}
      </div>
    </>
  )
}

export default Table
