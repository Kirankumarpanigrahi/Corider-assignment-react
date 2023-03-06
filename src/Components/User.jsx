import React,{useState,useEffect} from 'react'
import UserItem from './UserItem'
import Loader from './Loader'
const User = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  
  const updateData = async ()=> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    setLoading(true)
    let fetchedData = await fetch(url);
    let parsedData = await fetchedData.json()
    setData(parsedData)
    setLoading(false)
}
    useEffect(()=>{
        try {
          updateData()
        } catch (error) {
          console.log(error)
        }
        // eslint-disable-next-line
    },[]);
   
  return (
    <>
    <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Fetched UserData</h1>
    {loading && <Loader />} 
    <div className="container">
                      
    <div className="row">
        {data.map((element) => {
            return <div className="col-md-4" key={element.id}>
                <UserItem name={element.name ? element.name : ""} email={element.email ? element.email : ""} imageUrl={`https://avatars.dicebear.com/v2/avataaars/${element.username}.svg?options[mood][]=happy`} phone={element.phone} address={element.address.city} website={element.website} company={element.company.name} />
            </div>
        })}
    </div>
    </div> 
    </>
  )
}

export default User;
