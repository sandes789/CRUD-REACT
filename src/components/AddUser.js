import React, {useState} from 'react'
import {connect} from 'react-redux'
import { addUser } from '../redux/actions/Detail'
import {NavLink} from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import {useHistory} from 'react-router-dom'


const AddUser = ({addUser}) => {
    let history = useHistory()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] =useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        const newDetail = {
            id:uuid(),
            name:name,
            phone:phone,
            email:email,
        }
        addUser(newDetail)
        setName('')
        setPhone('')
        setEmail('')
        setMsg(true) 

        setTimeout(() => {
            setMsg(false) 
            history.push('/user-details')
         }, 2000)
        
    }

    


    return (
        <div>
            <div className={"alert alert-success w-25 ml-auto " + (msg ? "show" : "d-none")} role="alert">
                 User added Successfully
            </div>
            <NavLink className="nav-link text-right" to='/user-details'>
                {/* <Button variant="contained" color="primary">Back</Button> */}
                <input type="submit" className="btn btn-primary" value="Back"/>
            </NavLink>
            {/* <h3 className={"alert alert-success " + (msg ? "show" : "d-none")}>User added Successfully</h3> */}
            <div className='card p-3  add-user'>
                <h4 className='mb-3 text-center'>Add a users</h4>
                <form onSubmit={submitHandler}>
                    <input placeholder="Enter Full Name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder="Enter Phone" type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input placeholder="Enter Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="submit" className="btn btn-primary" value="Add"/>
                </form>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    userDetail:state.Detail.userDetail
})

const actions = {
    addUser
}

export default connect(mapStateToProps, actions)(AddUser)
