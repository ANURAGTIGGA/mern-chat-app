import React from 'react'

export default function 
() {
  return (
    <div className='flex justify-center items-center h-full'>
        <div className="backdrop-blur-sm bg-white/30 w-116 border px-12 py-12 rounded">
            <form>
              <label className="input input-bordered flex items-center gap-2 mb-6">
                Full Name
                <input type="text" className="grow" placeholder="Daisy" />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-6">
                Username
                <input type="text" className="grow" placeholder="" />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-6">
                Password
                <input type="password" className="grow" placeholder="password" />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-6">
                Confirm
                <input type="password" className="grow" placeholder="password" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Male</span>
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
                <span className="label-text">Female</span>
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
              </label>

              <button className="btn btn-outline btn-primary float-right ml-3">SIGN UP</button>
              <button className="btn btn-outline btn-secondary float-right">CANCEL</button>
                
            </form>
        </div>
    </div>
  )
}
