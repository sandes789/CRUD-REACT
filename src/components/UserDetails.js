import React, {
    useState,
    useEffect
} from 'react'
import Avatar from 'react-avatar'
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {
    NavLink,
    Link
} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import EditUser from './EditUser'
import {
    connect
} from 'react-redux'


import {
    delUser,
    editUser,
    apicall
} from '../redux/actions/Detail'

// Redux
// import {connect} from 'react-redux'
// import {useDispatch, useSelector} from 'react-redux'

const Contact = ({setstate,userDetail,delUser,editUser,apicall}) => {
    // const dispatch = useDispatch()

    // useSelector()
    const delHandler = (id) => {
        delUser(id)
    }

    useEffect(() => {
        apicall()
    }, [])

    const [newedit, setNewedit] = useState({
        id: '',
        name: '',
        phone: '',
        email: ''

    })

    const editHandler = (e) => {
        setNewedit({
            ...newedit,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        editUser(newedit)
        setstate('')
    }


    const editItem = (list) => {
        setNewedit({
            // ...newedit,
            id: list.id,
            name: list.name,
            phone: list.phone,
            email: list.email,
        })
    }


    const addcls = () => {
        setstate('modals')
    }

    const userList = userDetail.length ?
        ( 
            <>

            {
                userDetail.map((list, i) => {
                    return ( 
                        <tr key={list.id} >
                            <td>
                                <input type = "checkbox" / >
                            </td> 
                            <td> 
                                < Avatar className = 'mr-2' name = {list.name } size = '30' round = {true}/>
                                {list.name}
                            </td >
                            <td> {list.phone} </td>
                            <td> {list.email} </td> 
                            <td>
                                <span className = 'edit text-primary mr-2' onClick = { (e) => {editItem(list); addcls()}} > <EditIcon fontSize ="small" /> </span> 
                                <span className = 'delete text-danger' onClick = {(e) => delHandler(list.id)}> <DeleteOutlineIcon fontSize="small" /> </span> 
                            </td>
                        </tr>

                    )
                })
            } 
            </>
        )

        :

        ( <p className = 'text-center text-danger' > List is EMPTY </p>
        )

    return ( 
        <div className = 'p-5'>
            <NavLink className = "nav-link text-right" to ='/add-user'>
                 <Button variant = "contained" color = "primary" > Add User </Button> 
            </NavLink> 
            <div className ="card">
                <table className = "table">
                    <thead>
                        <tr>
                            <th scope = "col" >
                                <input type = "checkbox" />
                            </th>
                            <th scope = "col" > Name </th>
                            <th scope = "col" > Phone No </th> 
                            <th scope = "col" > Email </th> 
                            <th scope = "col" > Actions </th> 
                        </tr> 
                    </thead> 
                    <tbody> 
                        {userList}
                    </tbody> 
                </table>
            </div>
            <EditUser newedit = {newedit} editHandler = {editHandler} submitHandler = {submitHandler} />
        </div>
    )

}

const mapStateToProps = (state) => ({
    userDetail: state.Detail.userDetail
})

const actions = {
    delUser,
    editUser,
    apicall
}

export default connect(mapStateToProps, actions)(Contact)