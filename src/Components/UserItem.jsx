import React from 'react'

const UserItem = (props)=> {
        let { name,email,phone,address,website,company,imageUrl } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> New</span>
                    </div>
                    <img src={!imageUrl ? 'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy' : imageUrl} className="card-img-top" alt="People Avatars" />
                    <div className="card-body">
                        <p className="card-title"><b>Name : </b>  {name}</p>
                        <p className="card-text"><b>Email : </b> {email}</p>
                        <p className="card-title"><b>Phone : </b>  {phone}</p>
                        <p className="card-title"><b>Address : </b>  {address}</p>
                        <p className="card-text"><b>Website : </b> {website}</p>
                        <p className="card-title"><b>Company : </b>  {company}</p>
                    </div>
                </div>
            </div>
        )
     
}

export default UserItem;