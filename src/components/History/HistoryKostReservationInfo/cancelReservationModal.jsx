import React from 'react'
import CancelReservationIcon from '../../../assets/cancel-reservation-icon.svg'
function CancelReservationModal({IsCancelReservationInitiatedState}) {
  return (
    (<div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] bg-white drop-shadow-xl flex flex-wrap text-center justify-center text-sm p-4 rounded-xl gap-3 lg:w-[40%] lg:text-base lg:gap-6 lg:p-14 lg:min-w-[700px] z-10 duration-75 ease-in-out ${IsCancelReservationInitiatedState.isCancelReservationInitiated ? 'scale-100' : 'scale-0'}`}>
      <div className='w-full justify-center hidden lg:flex'>
        <img src={CancelReservationIcon}/>
      </div>
      <div className='w-full text-lg font-semibold lg:text-2xl'>Apakah kamu yakin ingin keluar?</div>
      <div className='w-full'>Pesananmu otomatis akan dibatalkan dan kamu harus memesan ulang</div>
      <div className='flex gap-5 w-full justify-center lg:gap-10'>
        <button className='box-border border-2 p-2 w-[40%] border-primary rounded font-semibold lg:w-[20%]' onClick={() => {IsCancelReservationInitiatedState.setIsCancelReservationInitiated(false)}}>Batalkan</button>
        <button className='box-border p-2 w-[40%] bg-primary text-white rounded font-semibold lg:w-[20%]'>Keluar</button>
      </div>
    </div>)
  )
}

export default CancelReservationModal