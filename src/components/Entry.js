import React from 'react'

const Entry = ({ entry }) => {
  const [expand, setExpand] = React.useState(false)
  const handleShowDetail = () => setExpand(!expand)
  return (
    <>
      <tr key={entry.rcptNo}>
        {expand ? (
          <td className='row3'>
            <button className='circle' onClick={handleShowDetail}>
              &#xf068;
            </button>
            {entry.date}
          </td>
        ) : (
          <td className='row2'>
            <button className='circle' onClick={handleShowDetail}>
              &#xf067;
            </button>
            {entry.date}
          </td>
        )}
        <td>{entry.rcptType}</td>
        <td>{entry.rcptNo}</td>
        <td>{entry.noOfItems}</td>
        <td>{entry.totalQty}</td>
        <td>{entry.receptSubTotal}</td>
        <td>{entry.receptDiscount}</td>
        <td>{entry.receptAmt}</td>
        <td>{entry.ptsPeeps}</td>
        <td>{entry.storesNo}</td>
        <td>{entry.tenderType}</td>
        <td>{entry.cashier}</td>
      </tr>
      {expand && (
        <tr>
          <td className='row3'>&nbsp;</td>
          <td className='d-yellow'>
            <strong>Item#</strong>
          </td>
          <td className='d-yellow'>
            <strong>Desc 1</strong>
          </td>
          <td className='d-yellow'>
            <strong>Desc 2</strong>
          </td>
          <td className='d-yellow'>
            <strong>Size</strong>
          </td>
          <td className='d-yellow'>
            <strong>Attr</strong>
          </td>
          <td className='d-yellow'>
            <strong>Qty</strong>
          </td>
          <td className='d-yellow'>
            <strong>Rxpt p$</strong>
          </td>
          <td className='d-yellow'>
            <strong>Ext p$</strong>
          </td>
          <td className='d-yellow'>
            <strong>Disc %</strong>
          </td>
          <td className='d-yellow'>
            <strong>Disc $</strong>
          </td>
          <td className='d-yellow'>
            <strong>UPC</strong>
          </td>
        </tr>
      )}
      {expand &&
        entry.details.map((row) => (
          <tr key={row.upc}>
            <td className='row3'>&nbsp;</td>
            <td className='l-yellow'>{row.itemNo}</td>
            <td className='l-yellow'>{row.desc1}</td>
            <td className='l-yellow'>{row.desc2}</td>
            <td className='l-yellow'>{row.size}</td>
            <td className='l-yellow'>{row.attr}</td>
            <td className='l-yellow'>{row.qty}</td>
            <td className='l-yellow'>{row.rxptP}</td>
            <td className='l-yellow'>{row.extP}</td>
            <td className='l-yellow'>{row.discP}</td>
            <td className='l-yellow'>{row.disc}</td>
            <td className='l-yellow'>{row.upc}</td>
          </tr>
        ))}
    </>
  )
}

export default Entry
