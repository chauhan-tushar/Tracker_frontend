import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const AdminDashboard = () => {
  return (
    <div>
        <Header />
        <div className="flex">
            <Sidebar />
        </div>
    </div>
  )
}

export default AdminDashboard
