import React, { Component } from 'react'

class UsersListWithFavorites extends Component {
  

  
  render() {
      
    return (
      <ol className='user-favorite-details'>
      	{this.props.profiles.map( profile => (
	      	<li className='user-favorite-list-item' key={profile.id}>
    	  	</li>
		))}
      </ol>
    )
  } 
}

export default UsersListWithFavorites;
