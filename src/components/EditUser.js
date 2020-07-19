import React from 'react'
import {connect} from 'react-redux'
import {editUser} from '../redux/actions/Detail'

// import {v4 as uuid} from 'uuid'


const EditUser = ({newedit,editHandler,submitHandler}) => {
   
    

    return (
        <div className="card-module">
            
            <div className='card p-3  add-user'>
                <h4 className='mb-3 text-center'>Edit a users</h4>
                <form onSubmit={submitHandler}>
                    <input placeholder="Enter Full Name" type="text" name='name' required value={newedit.name} onChange={editHandler} />
                    <input placeholder="Enter Phone" type="text" name='phone' required value={newedit.phone} onChange={editHandler} />
                    <input placeholder="Enter Email" type="email" name='email' required value={newedit.email} onChange={editHandler} />
                    <input type="submit" className="btn btn-primary" value="Edit" />
                </form>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    editDetail:state.Detail.editDetail
})

const actions = {
    editUser
}

export default connect(mapStateToProps, actions)(EditUser)
