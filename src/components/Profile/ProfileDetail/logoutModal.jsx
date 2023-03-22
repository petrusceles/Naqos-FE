import React from 'react'
import LogoutIcon from "../../../assets/logout-icon.svg"
function LogoutModal() {
  return (
    <div className='absolute z-50 w-96 h-72 bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-xl shadow-lg grid grid-cols-1 justify-center justify-items-center content-center gap-3 lg:scale-150'>
      <img src={LogoutIcon} className='w-14'/>
      <h3 className='text-sm font-semibold'>Apakah kamu yakin ingin keluar?</h3>
      <p className='text-xs text-center px-14'>Kamu akan memerlukan akses login untuk dapat masuk kembali</p>
      <div className='grid grid-cols-2 justify-center gap-4'>
        <button className='p-1 px-2 text-xs font-semibold text-primary rounded border-primary border-2'>
          Batalkan
        </button>
        <button  className='p-1 px-2 text-xs font-semibold rounded border-primary border-2 bg-primary text-white'>
          Keluar
        </button>
      </div>
    </div>
  )
}

export default LogoutModal