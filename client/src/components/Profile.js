import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
// import axios from 'axios'
import { getProfile } from '../components/UserFunctions'
import './LoginPage'

class Profile extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            isLoading: true,
            token: '',
            users: [],
        }
    }


    getUserProfile = () => {
        getProfile()
            .then( users => {
                console.log( users, 'all users' )
                this.setState( { users: users, modal: false, isLoggedIn: true } )
                console.log( users, 'the users mofo' )
            } )
    }

    // mapUsers = () => {
    //   this.state.users.map((user, index) => {
    //     console.log(user.firstName, 'fucking user')
    //     return (
    //       <table key={index}><tbody>
    //         <tr>
    //           <td>First Name</td>
    //           <td>{user.firstName}</td>
    //         </tr>
    //       </tbody>
    //       </table>
    //     )
    //   })
    // }

    componentDidMount() {
        this.getUserProfile()
    }


    render() {
        // this.mapUsers()
        // const { firstName, lastName, email } = this.state.users
        // console.log(firstName, 'the first name')
        return (
            <>
                <Container className="profile-page font-weight-light" >
                    <Row>
                        <Col xs="12">
                            <h2>Profile</h2>
                            { /* {this.state.users.map((user, id) => { 
              return (
                  <table key={id} className="table col-md-6 mx-auto">
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td>{user.firstName}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>{user.lastName}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{user.email}</td>
                  </tr>
                </tbody>
              </table>
              )
            })
              }
                */}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


export default Profile